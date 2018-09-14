# techqueria.org

[![Waffle.io - Columns and their card count](https://badge.waffle.io/techqueria/website.svg?columns=all)](https://waffle.io/techqueria/website)

[![GitHub Issues](https://img.shields.io/github/issues/techqueria/website.svg?style=flat-square)](https://github.com/techqueria/website/issues) [![GitHub Pull Requests](https://img.shields.io/github/issues-pr/techqueria/website.svg?style=flat-square)](https://github.com/techqueria/website/pulls) [![MIT License](https://img.shields.io/github/license/techqueria/website.svg?style=flat-square)](http://badges.mit-license.org)

Website for [Techqueria.org](http://techqueria.org/), a community of Latinx professionals in the tech industry.

## Installation

```bash
npm i
```

## Development

### Live Server

```bash
npm start
```

This will automatically open a browser tab with the website and BrowserSync will automatically reload the CSS or refresh the whole page, when stylesheets or content changes.

### Build

To build a static version of the website inside the `/dist` folder.

This command is not generally needed for local development as it is just used to handle deployments through Netlify.

```bash
npm run build
```

## Usage

This website uses [Hugo](https://gohugo.io/) as the static site generator and [Gulp](https://gulpjs.com/) + [Webpack](https://webpack.js.org/) as the asset pipeline.

The website is hosted and deployed by [Netlify](https://netlify.com).

The asset pipeline uses [PostCSS](http://postcss.org/) and [Babel](https://babeljs.io/) for Sass and JavaScript compilation and transpilation.

### Structure

```text
├── dist                // Static files generated and deployed (.gitignore)
├── gulpfile.babel.js   // Build processes for assets
├── netlify.toml        // Netlify deployment configuration
├── package.json        // NPM packages to install
├── site                // Hugo site that is built
|  ├── archetypes       // Default templates
|  ├── config.toml      // Hugo configuration file
|  ├── content          // Content goes here (Markdown files with posts and pages)
|  ├── layouts          // Layouts for pages and posts (Liquid HTML templates)
|  └── static           // Any static files that go into root of dist directory
├── src                 // Go to assets directory in dist
|  ├── img              // Optimized through gulp configuration
|  ├── js               // Compressed and transpiled to single JS file
|  └── sass             // Compressed and compiled to single CSS file
└── webpack.config.js   // Webpack configuration
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
- [Americo Zuzunaga](https://github.com/azuzunaga)
- [Phillip Ventura](https://github.com/fvntr)
