# Contributing

<!-- TOC -->

- [Steps](#steps)
- [Development](#development)
  - [Installation](#installation)
  - [Service Worker](#service-worker)
  - [Live Server](#live-server)
  - [Project Tracker](#project-tracker)
  - [Tools](#tools)
  - [Structure](#structure)
- [Deployment](#deployment)
- [Questions?](#questions)

<!-- /TOC -->

## Steps

> To get started...

1.  🍴 [Fork this repo](https://github.com/techqueria/website#fork-destination-box)
2.  🔨 Look over the [development](#development) guidelines and hack away.
3.  👥 Add yourself as a contributor under the contributors section
4.  🔧 [Open a new pull request](https://github.com/techqueria/website/compare)
5.  🎉 Get your pull request approved - success!

Or just [create an issue](https://github.com/techqueria/website/issues) - any little bit of help counts! 😊

## Development

### Installation

```bash
npm i
```

This will install all the packages needed to run this website locally.

### Service Worker

The [service worker](https://developers.google.com/web/tools/workbox/) is being initialized in `site/layouts/partials/scripts/service-worker.html` and is included in the `.gitignore`.

Make sure to comment out this file before running the live server.

### Live Server

```bash
npm start
```

This will automatically open a browser tab with the website and BrowserSync will automatically reload the CSS or refresh the whole page, when stylesheets or content changes.

Our pipeline is inspired by [Victor Hugo](https://github.com/netlify-templates/victor-hugo) which is a Hugo boilerplate for creating truly epic websites.

### Project Tracker

[![Waffle.io - Columns and their card count](https://badge.waffle.io/techqueria/website.svg?columns=all)](https://waffle.io/techqueria/website)

We are using [Waffle.io](https://waffle.io/techqueria/website) as well as [GitHub Milestones](https://help.github.com/articles/about-milestones/) to track open issues and progress being made.

### Tools

- [Hugo](https://gohugo.io/)
  - static site generators or CMS
- [Bulma.io](https://bulma.io/)
  - design system
- [Gulp](https://gulpjs.com/)
  - asset pipeline
- [Webpack](https://webpack.js.org/)
  - asset pipeline and service worker
- [Netlify](https://netlify.com)
  - hosting and deployment
- [PostCSS](http://postcss.org/)
  - Sass compilation
- [Babel](https://babeljs.io/)
  - JavaScript compilation and transpilation

### Structure

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

## Deployment

```bash
npm run build
```

This will build a static version of the website inside the `/dist` folder.

This command is not generally needed for local development as it is just used to handle deployments through Netlify - see `netlify.toml`.

## Questions?

We have a dedicated `#website` channel within the Slack group where you can bring up questions, comments, concerns or general feedback.

You can also contact us directly using [organizers@techqueria.org](mailto:organizers@techqueria.org).
