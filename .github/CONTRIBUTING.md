# Contributing

<!-- TOC -->

- [Steps](#steps)
  - [1. Installation](#1-installation)
  - [2. Live Server](#2-live-server)
  - [3. Make changes](#3-make-changes)
  - [Directory Structure](#directory-structure)
  - [Tools Being Used](#tools-being-used)
  - [4. Opening a Pull Request](#4-opening-a-pull-request)
  - [Issue Tracker](#issue-tracker)
  - [5. Getting Approval](#5-getting-approval)
- [Other Useful Information](#other-useful-information)
  - [Deployment](#deployment)
- [Questions?](#questions)

<!-- /TOC -->

## Steps

### 1. Installation

```bash
npm i
```

This will install all the packages needed to run this website locally.

If you've never used [npm](https://docs.npmjs.com/getting-started/what-is-npm#what-is-npm) before, please follow [these instructions](https://docs.npmjs.com/getting-started/installing-node#installing-npm-from-the-nodejs-site) to get `npm` up and running properly.

### 2. Live Server

```bash
npm start
```

This will automatically open a browser tab with the website and BrowserSync will automatically reload the CSS or refresh the whole page, when stylesheets or content changes.

Our pipeline is inspired by [Victor Hugo](https://github.com/netlify-templates/victor-hugo) which is a Hugo boilerplate for creating truly epic websites.

### 3. Make changes

### Directory Structure

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

### Tools Being Used

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

### 4. Opening a Pull Request

### Issue Tracker

[![Waffle.io - Columns and their card count](https://badge.waffle.io/techqueria/website.svg?columns=all)](https://waffle.io/techqueria/website)

We are using [Waffle.io](https://waffle.io/techqueria/website) to track open issues and progress being made.

There are 2 labels being used to track progress - these are used [Wafflebot](https://github.com/apps/wafflebot) to automate most of the process.

1. `in progress`

    Maintainers are responsible for adding the label `in progress` once someone has decided to take on an open issue.

2. `review`

    A PR has been opened and references a specific issue.

![Waffle.io Columns](https://i.imgur.com/UUh4glr.png)

### 5. Getting Approval

## Other Useful Information

### Deployment

> You do not need to run this command for development purposes.

```bash
npm run build
```

This will build a static version of the website inside the `/dist` folder.

This command is just used to handle production deployments through Netlify and does not need to be run locally - refer to `netlify.toml` and `gulpfile.babel.js`.

## Questions?

Our current maintainers for this project are

- [David Silva](https://github.com/dvidsilva)
- [Frances Coronel](https://github.com/fvcproductions)
- [Phillip Ventura](https://github.com/fvntr)

Please make a comment in your issue or PR if you have any questions, comments, concerns or general feedback and one of us will get back to you ASAP.

If you are part of the [Techqueria Slack workspace](https://techqueria.org/slack/), we also have a dedicated `#website` channel for discussion and a `#website-gh` for GitHub notifications.

If needed, there is also the option of emailing us directly using [organizers@techqueria.org](mailto:organizers@techqueria.org).
