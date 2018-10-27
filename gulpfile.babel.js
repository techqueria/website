import autoprefixer from "autoprefixer";
import BrowserSync from "browser-sync";
import {
  spawn
} from "child_process";
import cssnano from "cssnano";
import del from "del";
import log from "fancy-log";
import gulp from "gulp";
import imagemin from "gulp-imagemin";
import postcss from "gulp-postcss";
import sass from "gulp-sass";
import sourcemaps from "gulp-sourcemaps";
import hugoBin from "hugo-bin";
import PluginError from "plugin-error";
import csso from "postcss-csso";
import webpack from "webpack";
import webpackConfig from "./webpack.prod";
import webpackDevConfig from "./webpack.dev";

// Browser Sync
const browserSync = BrowserSync.create();

// Compress SASS
gulp.task("sass", () =>
  gulp
  .src(["./src/sass/styles.scss", "./src/sass/search.scss"])
  .pipe(
    sass({
      outputStyle: "compressed",
    }).on("error", sass.logError)
  )
  .pipe(postcss([autoprefixer(), cssnano(), csso()]))
  .pipe(sourcemaps.write("."))
  .pipe(gulp.dest("./dist/assets/css"))
  .pipe(browserSync.stream())
);

// Compress images
gulp.task("img", () =>
  gulp
  .src("./src/img/**/*")
  .pipe(imagemin())
  .pipe(gulp.dest("./dist/assets/img"))
);

// Copy static files
gulp.task("static", () =>
  gulp
  .src("./static/**/*")
  .pipe(gulp.dest("./dist"))
  .pipe(browserSync.stream())
);

// Compile Javascript
gulp.task("js", () => {
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
});


// Clean up dist
gulp.task("clean", () => {
  return del.sync("dist");
});

// Development server with browsersync
const runServer = () => {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
  gulp.watch("./src/js/**/*.js", ["js"]);
  gulp.watch("./src/sass/**/*.scss", ["sass"]);
  gulp.watch("./src/img/**/*", ["img"]);
  gulp.watch("./src/static/**/*", ["static"]);
  gulp.watch("./site/**/*", ["hugo"]);
};

// Run Hugo
function buildSite(cb, options, environment) {
  const args = options ? hugoArgsDefault.concat(options) : hugoArgsDefault;
  process.env.NODE_ENV = environment;
  return spawn(hugoBin, args, {
    stdio: "inherit"
  }).on("close", (code) => {
    if (code === 0) {
      browserSync.reload();
      cb();
    } else {
      browserSync.notify("Hugo build failed :(");
      cb("Hugo build failed");
    }
  });
}

// Hugo arguments
const hugoArgsDefault = ["-d", "../dist", "-s", "site"];
const hugoArgsPreview = ["--buildDrafts", "--buildFuture"];

// Development tasks
gulp.task("hugo", (cb) => buildSite(cb, [], "prod"));
gulp.task("hugo-dev", (cb) => buildSite(cb, [], "dev"));
gulp.task("hugo-preview", (cb) => buildSite(cb, hugoArgsPreview, "dev"));

// Server tasks
gulp.task("server", ["hugo-dev", "sass", "js", "img", "static"], (cb) => runServer(cb));
gulp.task("server-prod", ["hugo", "sass", "js", "img", "static"], (cb) => runServer(cb));
gulp.task("server-preview", ["hugo-preview", "sass", "js", "img", "static"], (cb) => runServer(cb));

// Production tasks
gulp.task("build", ["clean", "hugo", "sass", "img", "static", "js"], (cb) => buildSite(cb, [], "prod"));
gulp.task("build-dev", ["clean", "hugo-dev", "sass", "img", "static", "js"], (cb) => buildSite(cb, [], "dev"));
