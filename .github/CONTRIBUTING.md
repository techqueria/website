# Contributing

<!-- TOC -->

- [1. Setting Up](#1-setting-up)
  - [Ways to Contribute](#ways-to-contribute)
  - [Fork the repo](#fork-the-repo)
  - [Installation](#installation)
- [2. Local Development](#2-local-development)
  - [Live Server](#live-server)
  - [Branding](#branding)
  - [Service Workers](#service-workers)
  - [Tools](#tools)
  - [Platforms](#platforms)
  - [Languages](#languages)
  - [Translations](#translations)
  - [Directory Structure](#directory-structure)
  - [Available Commands](#available-commands)
  - [Audits](#audits)
  - [Deployment](#deployment)
- [3. Opening a Pull Request](#3-opening-a-pull-request)
  - [A Good PR](#a-good-pr)
  - [Checks](#checks)
  - [GitHub Integrations](#github-integrations)
  - [Issue Tracker](#issue-tracker)
  - [Stale Pull Requests](#stale-pull-requests)
- [Questions?](#questions)
  - [GitHub Mentions](#github-mentions)
  - [Slack](#slack)
  - [Email](#email)
- [Troubleshooting](#troubleshooting)
  - [Error: Cannot find module](#error-cannot-find-module)
  - [Not seeing changes live](#not-seeing-changes-live)

<!-- /TOC -->

## 1. Setting Up

### Ways to Contribute

> If you are new to open source, we recommend reading [GitHub's open source guide](https://opensource.guide/how-to-contribute/) and their [Hello World tutorial](https://guides.github.com/activities/hello-world/).

Feel free to contribute to the Techqueria website in one or more of the following ways and thank you for being willing to help out! 😊

- Tackle any of the [open issues](https://github.com/techqueria/website/issues) that are labeled `help wanted`, `good first issue` or `hacktoberfest`.
  - If an issue is labeled as `in progress`, someone is already working on it.
- [Open a new issue](https://github.com/techqueria/website/issues/new)
- [Report a bug](https://github.com/techqueria/website/issues/new?template=bug-report.md)
- [Request a new feature](https://github.com/techqueria/website/issues/new?template=feature-request.md)
- Improve our [contributing guidelines](https://github.com/techqueria/website/blob/master/.github/CONTRIBUTING.md) (this file) or other documentation
- Fix typos or grammar errors on pages or across the code base
- Refactor code
- Anything else you can think of! 😆

### Fork the repo

[Fork](https://github.com/techqueria/website#fork-destination-box) this repository and clone it locally.

Connect your local to the original "upstream" repository by adding it as [a remote](https://help.github.com/articles/configuring-a-remote-for-a-fork/).

Pull in changes from "upstream" often so that you stay up to date so that when you submit your pull request, merge conflicts will be less likely.

See more detailed instructions through this GitHub article called ["Syncing a Fork"](https://help.github.com/articles/syncing-a-fork/).

### Installation

> If you've never used [npm](https://docs.npmjs.com/getting-started/what-is-npm#what-is-npm) before, we recommend following [these instructions](https://docs.npmjs.com/getting-started/installing-node#installing-npm-from-the-nodejs-site) to get `npm` up and running properly.

```bash
npm install
```

This will install all the packages needed to run this website locally.

## 2. Local Development

### Live Server

```bash
npm start
```

This will automatically open a browser tab with the website and BrowserSync will automatically reload the CSS or refresh the whole page, when stylesheets or content changes.

At this point, you are able to preview the website locally and can make changes to the source code.

> Our pipeline was inspired by [Victor Hugo](https://github.com/netlify-templates/victor-hugo) which is a Hugo boilerplate for creating truly epic websites.

### Branding

You can view https://techqueria.org/about/brand as a reference for how we tackle our organization branding.

### Service Workers

We are using [Workbox](https://developers.google.com/web/tools/workbox/) to register a service worker on the production version of the website.

A [service worker](https://developers.google.com/web/fundamentals/primers/service-workers/) allows users to view the homepage of Techqueria even when they are offline and therefore caches the necessary assets.

❗ If you see a console error complaining about the service worker not registering while developing locally, that's okay! The service worker registration should fail in development since we don't want caching.

### Tools

- [Hugo](https://gohugo.io/)
  - static site generator or CMS
- [Bulma.io](https://bulma.io/)
  - design system
- [Gulp](https://gulpjs.com/)
  - asset pipeline
  - [PostCSS](http://postcss.org/) for Sass compilation
  - [ImageMin](https://github.com/imagemin/imagemin) to optimize images
  - [CSSO](https://github.com/css/csso) for CSS minification
- [Webpack](https://webpack.js.org/)
  - asset pipeline
  - [Workbox](https://developers.google.com/web/tools/workbox/) to create a service worker
- [Babel](https://babeljs.io/)
  - JavaScript compilation and transpilation
- [Twemoji](https://twemoji.twitter.com/)
  - Emoji rendering the same regardless of platform or browser
- [Font Awesome](https://fontawesome.com/)
  - Standardized icons

### Platforms

- [Netlify](https://netlify.com)
  - hosting and deployment

### Languages

- JavaScript
- SASS
- HTML
- TOML
- JSON

### Translations

Content is in the progress of being translated to Español.

### Directory Structure

```text
├── .github
|  ├──  CODE_OF_CONDUCT.md         // code of conduct
|  ├──  CODEOWNERS                 // automatic reviewers for certain files and directories
|  ├──  CONTRIBUTING.md            // how to contribute
|  ├──  ISSUE_TEMPLATE.md          // template for new issues
|  ├──  PULL_REQUEST_TEMPLATE.md   // template for new pull requests
|  └──  stale.yml                  // configuration for Stale bot
├── .vscode
|  └──  settings.json       // VS Code workspace settings
├── dist                    // (ignored) static files generated and served through Netlify using npm start or npm build
├── site
|  ├── archetypes           // default post formats
|  ├── content              // content goes here (Markdown files with posts and pages)
|  ├── layouts              // HTML Liquid templates for pages
|  ├── static               // files that go into root of dist directory
|  └── config.toml          // configuration file (Hugo)
├── src
|  ├── img                  // images are optimized through Gulp
|  ├── js                   // compressed and transpiled to a single JS file
|  └── sass                 // compressed and compiled to a single CSS file
├── .babelrc                // configuration for Babel
├── .editorconfig           // configuration for editors
├── .eslintrc               // configuration for ESLint
├── .gitignore              // ignored files and folders
├── .nvmrc                  // configuration for NVM
├── .prettierrc             // configuration for Prettier formatter
├── CNAME                   // domain name
├── gulpfile.babel.js       // configuring Gulp build process for assets
├── LICENSE                 // repo license
├── netlify.toml            // configuration for Netlify deployment
├── package.json            // managing NPM packages
├── README.md               // overview
├── renovate.json           // configuration for Renovate bot
├── webpack.dev.js          // Webpack build configuration for local development
└── webpack.prod.js         // Webpack build configuration for production
```

### Available Commands

> References `package.json` and `gulpfile.babel.js`

We've covered one of them already - `npm start` - here are the others.

- `npm build`
  - Build production ready files
- `npm build:dev`
  - Build local files
- `npm start`
  - Local server for development
- `npm start:prod`
  - Local server for production ready website
- `npm start:preview`
  - Preview draft and future posts.
- `npm lint`
  - This will report any ESLint issues within the command line.

### Audits

We use Google's [Lighthouse](https://developers.google.com/web/tools/lighthouse/) to check for performance, accessibility, SEO, our PWA score and to make sure we follow best practices.

If you are using Chrome, Lighthouse is the default audit system so it's easy to use!

![Chrome DevTools - Lighthouse](https://i.imgur.com/NiXPxuP.jpg)

As of October 2018, we have scores of 100 or close to that for every metric and we strive to keep it that way through automated checks in PRs (see more below).

![Techqueria - Lighthouse Scores](https://i.imgur.com/NceItoo.jpg)

### Deployment

> _Heads up_, you do not need to run this command for development purposes.

```bash
npm run build
```

This will build a static version of the website inside the `/dist` folder.

This command is just used to handle production deployments through Netlify and does not need to be run locally - refer to `netlify.toml` and `gulpfile.babel.js`.

## 3. Opening a Pull Request

### A Good PR

Make sure to do the following when opening your pull request (or PR)

- include a useful description of your PR after opening it
- make sure all the checks have been filled out
- reference any relevant issues or supporting documentation in your PR (for example, **"Closes #37."**)

> Below is an example of what the Markdown for a good PR looks like.
>
> Notice it has a with a description with a reference to an existing issue. It also has all the checks filled in with an x.

```markdown
This adds a contact form to the website using Bulma - fixes #92.

---

<!-- Thank you for contributing to Techqueria, it is much appreciated! 😊 -->

<!-- Before creating a PR, make sure to verify the following. -->

> ✅️ By submitting this PR, I have verified the following

- [x] Checked to [see if a similar PR has already been opened](https://github.com/techqueria/website/pulls) 🤔️
- [x] Reviewed the [contributing guidelines](https://github.com/techqueria/website/blob/master/.github/CONTRIBUTING.md) 🔍️
- [x] Added my name to the bottom of the list under the **Contributors** section in the [README.md](https://github.com/techqueria/website/blob/master/README.md) with a link to my personal website or GitHub profile 👥️
```

### Checks

We use several GitHub integrations/bots to make it easy to catch errors for every new PR created.

> Here's an example of how that would look like for a great PR.

![GitHub Checks](https://imgur.com/RrYIKCK.png)

### GitHub Integrations

- [AccessLint](https://www.accesslint.com/)
  - tests accessibility
- [Codacy](https://www.codacy.com), [CodeFactor](http://codefactor.io/) amd [Codebeat](https://codebeat.co)
  - automated code reviews and code analytics
- [Netlify Deploy Previews](https://www.netlify.com/docs/continuous-deployment/)
  - see how your changes would look like in production

### Issue Tracker

[![Waffle.io - Columns and their card count](https://badge.waffle.io/techqueria/website.svg?columns=all)](https://waffle.io/techqueria/website)

We are using [Waffle.io](https://waffle.io/techqueria/website) to track open issues and progress being made.

There are 2 labels being used to track progress - these are used [Wafflebot](https://github.com/apps/wafflebot) to automate most of the process.

1. `in progress`

   Maintainers are responsible for adding the label `in progress` once someone has decided to take on an open issue.

2. `review`

   A PR has been opened and references a specific issue.

![Waffle.io Columns](https://i.imgur.com/UUh4glr.png)

### Stale Pull Requests

If after a week you haven't heard from any of the maintainers, please mention `@techqueria/admins` in the PR.

## Questions?

If you have any questions, comments, concerns or general feedback, we're happy to help!

### GitHub Mentions

Please make a comment mentioning `@techqueria/admins` in your issue or PR and one of us will get back to you ASAP.

### Slack

If you are part of the [Techqueria Slack workspace](https://techqueria.org/slack/), we also have a dedicated `#website` channel for discussion and a `#website-gh` for GitHub notifications.

### Email

If needed, there is also the option of emailing us using [organizers@techqueria.org](mailto:organizers@techqueria.org).

## Troubleshooting

### Error: Cannot find module

Try `rm -rf node_modules` and then `npm install` again.

### Not seeing changes live

> Outdated pages, service worker still loading on local development

Try running `npm run clean` - this will delete the `dist` directory.

You can then run `npm start` to spin up a local server.
