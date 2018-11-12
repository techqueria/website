// Load plugins
const autoprefixer = require("autoprefixer");
const browserSync = require("browser-sync").create();
const cssnano = require("cssnano");
const csso = require("postcss-csso");
const del = require("del");
const gulp = require("gulp");
const hugoBin = require("hugo-bin");
const imagemin = require("gulp-imagemin");
const log = require("fancy-log");
const PluginError = require("plugin-error");
const postcss = require("gulp-postcss");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const cp = require("child_process");
const webpack = require("webpack");
const webpackConfig = require("./webpack.prod");
const webpackDevConfig = require("./webpack.dev");
const newer = require("gulp-newer");

// Compress SASS
gulp.task("sass", () => {
  return gulp
    .src(["./src/sass/styles.scss"])
    .pipe(
      sass({
        outputStyle: "compressed",
      }).on("error", sass.logError)
    )
    .pipe(postcss([autoprefixer(), cssnano(), csso()]))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./dist/assets/css"))
    .pipe(browserSync.stream());
});

// Compress images
const images = () => {
  return gulp
    .src("./src/img/**/*")
    .pipe(newer("./dist/assets/img"))
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/assets/img"));
};

gulp.task("img", images);

const js = (done) => {
  const environment = process.env.NODE_ENV;
  log("ENVIRONMENT: " + environment);
  let myConfig = {};
  if (environment === "dev") {
    myConfig = Object.assign({}, webpackDevConfig);
  } else {
    myConfig = Object.assign({}, webpackConfig);
  }
  webpack(myConfig, (err, stats) => {
    if (err) throw new PluginError("webpack", err);
    log(
      "[webpack]",
      stats.toString({
        colors: true,
        progress: true,
      })
    );
    browserSync.reload();
  });
  done();
};
// Compile Javascript
gulp.task("js", js);

// Clean up dist
gulp.task("clean", () => {
  return del(["dist"]);
});

// Development server with browsersync
const runServer = (options) => {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
  gulp.watch("./src/js/**/*.js", gulp.series("js"));
  gulp.watch("./src/sass/**/*.scss", gulp.series("sass"));
  gulp.watch("./src/img/**/*", gulp.series("img"));
  gulp.watch("./site/**/*", gulp.series(options));
};

// Run Hugo
const buildSite = (done, options, environment) => {
  const args = options ? hugoArgsDefault.concat(options) : hugoArgsDefault;
  process.env.NODE_ENV = environment;
  return cp.spawn(hugoBin, args, {
    stdio: "inherit"
  }).on("close", (code) => {
    if (code === 0) {
      browserSync.reload();
      done();
    } else {
      browserSync.notify("Hugo build failed :(");
      done("Hugo build failed");
    }
  });
};

// Hugo arguments
const hugoArgsDefault = ["-d", "../dist", "-s", "site"];
const hugoArgsPreview = ["--buildDrafts", "--buildFuture"];

// Development tasks
gulp.task("hugo", (done) => buildSite(done, [], "prod"));
gulp.task("hugo-dev", (done) => buildSite(done, [], "dev"));
gulp.task("hugo-preview", (done) => buildSite(done, hugoArgsPreview, "dev"));

// Server tasks
gulp.task("server", gulp.series("hugo-dev", "sass", "img", "js", (done) => {
  runServer("hugo-dev");
  done();
}));

gulp.task("server-prod", gulp.series("hugo", "sass", "img", "js", (done) => {
  runServer("hugo");
  done();
}));

gulp.task("server-preview", gulp.series("hugo-preview", "sass", "img", "js", (done) => {
  runServer("hugo-preview");
  done();
}));

// Production tasks
gulp.task("build", gulp.series("clean", "hugo", "sass", "img", "js", (done) => {
  buildSite(done, [], "prod");
}));

gulp.task("build-dev", gulp.series("clean", "hugo-dev", "sass", "img", "js", (done) => {
  buildSite(done, [], "dev");
}));
