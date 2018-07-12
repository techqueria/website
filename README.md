# techqueria.org

[![GitHub Issues](https://img.shields.io/github/issues/techqueria/website.svg?style=flat-square)](https://github.com/techqueria/website/issues) [![GitHub Pull Requests](https://img.shields.io/github/issues-pr/techqueria/website.svg?style=flat-square)](https://github.com/techqueria/website/pulls) [![MIT License](https://img.shields.io/github/license/techqueria/website.svg?style=flat-square)](http://badges.mit-license.org)

Website for [Techqueria.org](http://techqueria.org/)

## Installation

```bash
npm i
```

### Start Live Server

```bash
npm start
```

This will automatically open a browser tab with the website and BrowserSync will automatically reload the CSS or refresh the whole page, when stylesheets or content changes.

### Build

To build a static version of the website inside the `/dist` folder

```bash
npm run build
```

## Usage

This website uses [Hugo](https://gohugo.io/) as the static site generator and [Gulp](https://gulpjs.com/) + [Webpack](https://webpack.js.org/) as the asset pipeline.

It is setup to use [PostCSS](http://postcss.org/) and [Babel](https://babeljs.io/) for Sass and JavaScript compiling/transpiling.

### Structure

```text
├── dist                // Static files generated
├── gulpfile.babel.js   // Build processes
├── netlify.toml        // Netlify deployment config
├── package.json        // NPM packages
├── site                // Compiles to dist
|  ├── archetypes       // Default templates
|  ├── config.toml      // Hugo config
|  ├── content          // Content goes here
|  ├── layouts          // Layouts for pages and posts
|  └── static           // Any static files
├── src                 // Go to assets directory in dist
|  ├── img              // Minified
|  ├── js               // Compressed and transpiled
|  └── sass             // Compressed and compiled
└── webpack.config.js   // Webpack config
```

## Contributing

> To get started...

1.  🍴 [Fork this repo](https://github.com/techqueria/website#fork-destination-box)
2.  🔨 View the contributing guidelines at [CONTRIBUTING.md](CONTRIBUTING.md)
3.  👥 Add yourself as a contributor under the credits section
4.  🔧 [Open a new pull request](https://github.com/techqueria/website/compare)
5.  🎉 Get your pull request approved - success!

Or just [create an issue](https://github.com/techqueria/website/issues) - any little bit of help counts! 😊

## Code of Conduct

In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

More details can be found at this project's [code of conduct](.github/CODE_OF_CONDUCT.md).

## Credits

- [David Silva](https://github.com/dvidsilva)
- [Frances Coronel](https://github.com/fvcproductions)
- [CJ Joulain](https://github.com/cjoulain)
- [Kimberly Munoz](https://github.com/KimberlyMunoz)
