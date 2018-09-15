# Contributing

<!-- TOC -->

- [Steps](#steps)
- [Project Tracker](#project-tracker)
- [Tools](#tools)
- [Structure](#structure)
- [Installation](#installation)
- [Live Server](#live-server)
- [Build](#build)
- [Questions?](#questions)

<!-- /TOC -->

## Steps

> To get started...

1.  🍴 [Fork this repo](https://github.com/techqueria/website#fork-destination-box)
2.  🔨 Hack away
3.  👥 Add yourself as a contributor under the credits section
4.  🔧 [Open a new pull request](https://github.com/techqueria/website/compare)
5.  🎉 Get your pull request approved - success!

Or just [create an issue](https://github.com/techqueria/website/issues) - any little bit of help counts! 😊

## Project Tracker

[![Waffle.io - Columns and their card count](https://badge.waffle.io/techqueria/website.svg?columns=all)](https://waffle.io/techqueria/website)

We are using [Waffle.io](https://waffle.io/techqueria/website) to track open issues and progress being made.

## Tools

This website uses [Hugo](https://gohugo.io/) as the static site generator and [Gulp](https://gulpjs.com/) + [Webpack](https://webpack.js.org/) as the asset pipeline.

The website is hosted and deployed by [Netlify](https://netlify.com).

The asset pipeline uses [PostCSS](http://postcss.org/) and [Babel](https://babeljs.io/) for Sass and JavaScript compilation and transpilation.

## Structure

```text
├── CNAME                   // domain
├── CODE_OF_CONDUCT.md      // code of conduct
├── CONTRIBUTING.md         // how to contribute
├── LICENSE                 // license
├── README.md               // overview
├── gulpfile.babel.js       // configuring build process for assets
├── netlify.toml            // configuration for Netlify deployment
├── package.json            // managing NPM packages
├── dist                    // static files generated and served through Netlify using npm start or npm build
├── site
|  ├── archetypes           // default post formats
|  ├── config.toml          // configuration file (Hugo)
|  ├── content              // content goes here (Markdown files with posts and pages)
|  ├── layouts              // HTML Liquid templates for pages
|  └── static               // files that go into root of dist directory
├── src
|  ├── img                  // images are optimized through Gulp
|  ├── js                   // compressed and transpiled to single JS file
|  └── sass                 // compressed and compiled to single CSS file
└── webpack.config.js       // build configuration that works in tandem with Gulp
```

## Installation

```bash
npm i
```

## Live Server

```bash
npm start
```

This will automatically open a browser tab with the website and BrowserSync will automatically reload the CSS or refresh the whole page, when stylesheets or content changes.

## Build

To build a static version of the website inside the `/dist` folder.

This command is not generally needed for local development as it is just used to handle deployments through Netlify.

```bash
npm run build
```

## Questions?

We have a dedicated `#website` channel within the Slack group where you can bring up questions, comments, concerns or general feedback.

You can also contact us directly using [organizers@techqueria.org](mailto:organizers@techqueria.org).
