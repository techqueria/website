# Contributing

<!-- TOC -->

- [1. Setting Up](#1-setting-up)
  - [Ways to Contribute](#ways-to-contribute)
    - [Benefits of Contributing](#benefits-of-contributing)
      - [GitHub Profile](#github-profile)
      - [LinkedIn](#linkedin)
      - [Credibility](#credibility)
  - [Fork the repo](#fork-the-repo)
  - [Installation](#installation)
- [2. Local Development](#2-local-development)
  - [Live Server](#live-server)
  - [Branding](#branding)
  - [Service Workers](#service-workers)
  - [Tools](#tools)
  - [Platforms](#platforms)
  - [Languages](#languages)
  - [Coding Guidelines](#coding-guidelines)
    - [File Size](#file-size)
  - [Adding Images](#adding-images)
  - [Content Updates](#content-updates)
    - [People](#people)
      - [Team](#team)
      - [Patreon Supporters](#patreon-supporters)
    - [Companies](#companies)
    - [Blog Posts](#blog-posts)
    - [Resources](#resources)
  - [Translations](#translations)
    - [How to translate content](#how-to-translate-content)
      - [Option 1. Replace individual strings from the HTML templates in the `layouts` folder.](#option-1-replace-individual-strings-from-the-html-templates-in-the-layouts-folder)
      - [Option 2. Create a separate Markdown file with the language code extension](#option-2-create-a-separate-markdown-file-with-the-language-code-extension)
  - [Directory Structure](#directory-structure)
  - [Available Commands](#available-commands)
  - [Audits](#audits)
  - [Deployment](#deployment)
- [3. Opening a Pull Request](#3-opening-a-pull-request)
  - [A Good PR](#a-good-pr)
  - [Checks](#checks)
  - [GitHub Integrations](#github-integrations)
  - [GitHub Bots](#github-bots)
    - [Adding a contributor](#adding-a-contributor)
    - [Remind yourself to tackle an issue](#remind-yourself-to-tackle-an-issue)
  - [Issue Tracker](#issue-tracker)
  - [Stale Pull Requests](#stale-pull-requests)
- [Troubleshooting](#troubleshooting)
  - [Error: Cannot find module](#error-cannot-find-module)
  - [Not seeing changes live](#not-seeing-changes-live)
  - [Recently Merged Changes](#recently-merged-changes)
- [Questions?](#questions)
  - [GitHub](#github)
  - [Slack](#slack)
  - [Gitter](#gitter)
  - [Email](#email)

<!-- /TOC -->

## 1. Setting Up

### Ways to Contribute

> If you are new to open source, we recommend reading [GitHub's open source guide](https://opensource.guide/how-to-contribute/) and their [Hello World tutorial](https://guides.github.com/activities/hello-world/).

Feel free to contribute to the Techqueria website in one or more of the following ways and thank you for being willing to help out! 😊

- Tackle any of the [open issues](https://github.com/techqueria/website/issues) that are labeled `help wanted`, `good first issue` or `hacktoberfest`.
  - If an issue has the label `in progress`, someone is already working on it.
  - If an issue has the label `admin`, an admin probably needs to get involved since it requires admin access.
  - **Even if an issue has someone assigned, it still might need extra help so check it out if it appeals to you!**
- [Open a new issue](https://github.com/techqueria/website/issues/new/choose)
- [Report a bug](https://github.com/techqueria/website/issues/new?template=bug-report.md)
- [Request a new feature](https://github.com/techqueria/website/issues/new?template=feature-request.md)
- Improve our [contributing guidelines](https://github.com/techqueria/website/blob/master/.github/CONTRIBUTING.md) (this file) or other documentation
- Fix typos or grammar errors on pages or across the code base
- Refactor code
- Anything else you can think of! 😆

#### Benefits of Contributing

##### GitHub Profile

You can ask to be added to our GitHub organization.

After you are added you to our Techqueria GitHub organization as a contibutor, you can let the world you've helped us by displaying our organization avatar on your GitHub profile (see screenshot below).

![GitHub Organizations](https://i.imgur.com/DpZcMFl.jpg)

By default, this is made private but you [can easily make it public.](https://help.github.com/en/articles/publicizing-or-hiding-organization-membership).

##### LinkedIn

Showcase your contributions through LinkedIn with Techqueria's company profile: https://linkedin.com/company/techqueria.

Just make sure to use the description below and you can briefly describe what you did as well.

```txt
Techqueria is a 501c3 nonprofit representing the largest community for Latinx in Tech.

- Contributed to their open source website through translations and bug fixes
```

Here's an example of how that can be done by posting under "Experience" or "Volunteering" on your LinkedIn profile.

![LinkedIn Contributions](https://i.imgur.com/t01auIB.jpg)

##### Credibility

- You can tell people you've contributed to an open source project - [not that many developers do](https://www.digitalocean.com/currents/october-2018/)!
- You can tell people you have contributed to the largest community for Latinx in Tech
- You can also tell people you've worked on a project that uses one of the [most popular static site generators in the world](https://www.staticgen.com/) - [Hugo](https://gohugo.io/)

> And there are [many more reasons](https://opensource.guide/how-to-contribute/) why contributing to open source is great!

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

### Coding Guidelines

#### File Size

For files longer than 200 lines, we recommend breaking it out into multiple files by referencing partials like this: `{{ partial "custom/breadcrumbs.html" . }}`.

If you see existing files longer than 200 lines (excluding Markdown files), feel free to break them down further.

### Adding Images

All images should be added to `assets/img` within the relevant folder.

If there is not a relevant directory, please create one.

We do have automated image optimization but feel free to compress the image locally as well.

### Content Updates

If there is a special character in the text, make sure to use double quotes.

#### People

When adding a new person, make sure to use their LinkedIn profile as the URL and download their LinkedIn profile picture so we can host it locally.

##### Team

> `content/english/team/frances-coronel.md`

```markdown
---
title: Frances Coronel
description: Software Engineer at Slack
image: "/assets/img/team/frances-coronel.jpg"
linkedin: fvcproductions
locations:
  - austin
  - bay-area
  - los-angeles
  - nyc
roles:
  - board-member
  - ceo
  - co-founder
  - cto
  - current-organizer
  - past-board-member
  - past-organizer
---
```

##### Patreon Supporters

> `content/english/donate/patreon-supporters/liliana-a-monge.md`

```markdown
---
title: Liliana A Monge
description: Co-Founder & CEO
image: "/assets/img/team/liliana-a-monge.jpg"
linkedin: lilianamonge
tier: "Core - $25 or more per month"
---
```

> Tier Options for Patreon

- Friend - \$1 or more per month
- Supporter - \$5 or more per month
- Advocate - \$10 or more per month
- Core - \$25 or more per month
- Patron - \$50 or more per month
- Champion - \$100 or more per month

#### Companies

When adding a new company, make sure to link their careers site and download an appropriate logo image so we can host it locally.

> `content/english/support-us/supporters/braintree.md`

```markdown
---
title: "Braintree"
description: "All-in-one solution to accept, process, and split payments in your mobile app or online"
image: "/assets/img/companies/braintree.png"
link: https://www.braintreepayments.com/careers
---
```

#### Blog Posts

Make sure to always turn comments on and add or reference a person as the author.

> `content/english/blog/2016-07-19-community-building.md`

```markdown
---
title: "Community-Building and Mentorship: Notes on Techqueria's Latest Event"
comments: true
date: 2016-07-19
authors:
  - CJ Joulain
---
```

#### Resources

You can add a new resource to a bunch of different categories like career, nonprofits, healthcare, immigration, etc.

> `content/english/resources/nonprofits/slack-for-non-profits.md`

```markdown
---
title: "Slack for Nonprofits"
image: "/assets/img/resources/nonprofits/slack.png"
description: "The Slack for Nonprofits program offers eligible organizations a free or discounted upgrade of one workspace to a paid plan."
link: https://get.slack.help/hc/en-us/articles/204368833-Slack-for-Nonprofits
---
```

### Translations

The language dropdown is located at `layouts/partials/footer/language-dropdown.html` which is referenced at `layouts/partials/footer/who-we-are.html`. It is currently disabled until parent pages are translated.

Language names are configured using `data/i18n/languages.toml`. For now, these only have English and Español but more can be added.

Translated strings can be located at `i18n/en.toml` and `i18n/es.toml`

#### How to translate content

##### Option 1. Replace individual strings from the HTML templates in the `layouts` folder.

Here's an example of translating one string from the `who-we-are.html` layout template.

The syntax for translated strings in the HTML is `{{ i18n "translation_id" }}`.

> `layouts/partials/base/footer/who-we-are.html`, L7

```html
<p>{{ i18n "who_we_are_nonprofit" }}</p>
```

The translation IDs must be the same in both `en.toml` and `es.toml`.

> `site/i18n/es.toml`

```toml
# layouts/partials/base/footer/who-we-are.html

[who_we_are_nonprofit]
other = "Techqueria is a 501(c)(3) nonprofit serving the largest community for Latinx professionals in the tech industry."
```

> `site/i18n/es.toml`

```toml
# layouts/partials/base/footer/who-we-are.html

[who_we_are_nonprofit]
other = "Techqueria es una organización sin fines de lucro 501 (c) (3) que representa una de las comunidades más grandes para profesionales de Latinx en la industria tecnológica."
```

##### Option 2. Create a separate Markdown file with the language code extension

Here's an example of translating the "Brand" page in Markdown.

So for Markdown pages to be translated in Spanish, add an identical file within the `content/espanol` directory.

‼️ For pages like this, **do not copy over the urls or aliases** as this will break the page and redirect users to the Spanish version always even if they don't want it.

> `content/english/about/brand.md`

```markdown
title: Brand 🎨
description: Download our assets and discover our style guide.
```

> `content/espanol/about/brand.es.md`

```markdown
title: Marca 🎨
description: Descarga nuestros recursos y descubre nuestra guía de estilo.
```

### Directory Structure

```txt
├── .github
|  ├──  ISSUE_TEMPLATE             // folder with issue template files
|  ├──  CODE_OF_CONDUCT.md         // code of conduct
|  ├──  CODEOWNERS                 // automatic reviewers for certain files and directories
|  ├──  config.yml                 // configuration for various 3rd party GitHub bots
|  ├──  invite-contributors.yml    // configuration for invite contributors bot
|  ├──  CONTRIBUTING.md            // how to contribute - what you are reading
|  ├──  ISSUE_TEMPLATE.md          // template for new issues
|  ├──  PULL_REQUEST_TEMPLATE.md   // template for new pull requests
|  ├──  stale.yml                  // configuration for Stale bot
|  └──  topissuebot.yml            // configuration for Top Issue bot
├── .vscode
|  └──  settings.json              // VS Code workspace settings
├── CNAME                          // configuring domain
├── LICENSE                        // repo license
├── README.md                      // overview of project
├── assets                         // folder of assets handled by Gulp/Webpack
|  ├── img                         // images are optimized through Gulp
|  ├── js                          // compressed and transpiled to a single JS file
|  └── sass                        // compressed and compiled to a single CSS file
├── config.toml                    // configuration file (Hugo)
├── content                        // content goes here (Markdown files with posts and pages)
|  ├── english                     // content in English
|  └── espanol                     // mostly same content from English folder translated to Spanish
├── data
|  └── i18n
|     └── languages.toml           // configuring internationalization settings
├── drafts                         // files not ready for prime time
├── gulpfile.babel.js              // configuration for Gulp
├── i18n                           // where translations of strings live
|  ├── en.toml                     // strings translated in English
|  └── es.toml                     // strings trnaslated in Español
├── layouts                        // HTML Liquid templates for pages
├── netlify.toml                   // configuration for Netlify deployment
├── package-lock.json              // don't delete or modify this
├── package.json                   // managing NPM packages
├── renovate.json                  // configuration for Renovate bot
├── static                         // files that go into root of dist directory
|  ├── _redirects                  // handle redirected URLs
|  ├── browserconfig.xml           // configuration for Windows tiles
|  ├── favicon.ico                 // main favicon image
|  └── manifest.json               // configuration for Progressive Web App
├── webpack.dev.js                 // Webpack build configuration for local development
└── webpack.prod.js                // Webpack build configuration for production
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
Adds a contact form to the website using Bulma

- Fixes #92

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

![GitHub Checks](https://i.imgur.com/6gvqgkc.jpg)

### GitHub Integrations

- [AccessLint](https://www.accesslint.com/) tests accessibility
- [Codacy](https://www.codacy.com) automatically identify issues through static code analysis
- [Codebeat](https://codebeat.co) allows you to get instant feedback on your code
- [CodeFactor](http://codefactor.io/) provides automated code review
- [Hound](https://houndci.com/) comments on code quality and style issues, allowing our team to better review and maintain a clean codebase
- [LGTM](https://lgtm.com/) allows us to find and prevent zero-days and other critical bugs, with customizable alerts and automated code review
- [Netlify Deploy Previews](https://www.netlify.com/docs/continuous-deployment/) lets you see how your changes would look like in production
- [Pull Reminders](https://pullreminders.com/) lets you review and merge pull requests faster with Slack reminders and notifications
- [Synk](https://snyk.io/) is a developer-first solution that automates finding & fixing vulnerabilities in our dependencies

### GitHub Bots

We take advantage of GitHub bots to make reviewing PRs and recognizing contributors easier.

- [All Contributors](https://allcontributors.org/) helps us recognize all contributors, not just the ones who push code
- [Background Check](https://probot.github.io/apps/background-check/) notifies maintainers when new contributors who have been toxic in the past join the project
- [Delete Merged Branch](https://probot.github.io/apps/delete-merged-branch/) automatically deletes merged branches
- [First Timers](https://probot.github.io/apps/first-timers/) creates starter issues to help onboard new open source contributors
- [Invite Contributors](https://probot.github.io/apps/invite-contributors/) invites authors of merged pull requests to our organization
- [Reminders](https://probot.github.io/apps/reminders/) set reminders on issues and pull requests
- [Request Info](https://github.com/apps/request-info) requests more info from PRs/Issues with either the default title or a blank body
- [Sentiment Bot](https://probot.github.io/apps/sentiment-bot/) replies to toxic comments with a maintainer designated reply and a link to the repo's code of conduct
- [Stale](https://github.com/apps/stale) closes abandoned issues after a period of inactivity
- [Todo](https://github.com/apps/todo) creates new issues based on actionable comments in your code
- [Top Issues](https://probot.github.io/apps/topissues/) labels issues with the most "+1" emoji reactions
- [Unfurl Links](https://probot.github.io/apps/unfurl-links/) adds context to the links shared in discussions
- [Welcome](https://probot.github.io/apps/welcome/) welcomes new users
- [Work In Progress](https://probot.github.io/apps/wip/) prevents merging of pull requests with "WIP" in the title

#### Adding a contributor

See https://allcontributors.org

```txt
@all-contributors please add @awesomeContributor for infrastructure, tests and code
```

![Adding a contributor](https://d33wubrfki0l68.cloudfront.net/fb5b8bea253987f2e06b259398fcf78ae8ae824c/1eec9/img/add-contributors.png)

#### Remind yourself to tackle an issue

Use the `/remind` slash command to set a reminder on any comment box on GitHub and you'll get a ping about it again when the reminder is due.

Use any form of /remind me [what][when], such as:

- `/remind me to deploy on Oct 10`
- `/remind me next Monday to review the requirements`
- `/remind me that the specs on the rotary girder need checked in 6 months`

![Remind me](https://user-images.githubusercontent.com/173/30673997-505a993a-9e77-11e7-8f0f-d5a606816e8e.png)

### Issue Tracker

There are 2 labels being used to track progress.

1. `in progress`

   Maintainers & contributors are responsible for adding the label `in progress` once someone has decided to take on an open issue.

2. `review`

   A PR has been opened and references a specific issue.

### Stale Pull Requests

If after a week you haven't heard from any of the maintainers, please mention `@techqueria/owners` in the PR.

## Troubleshooting

### Error: Cannot find module

Try `rm -rf node_modules` and then `npm install` again.

### Not seeing changes live

> Outdated pages, service worker still loading on local development

Try running `npm run clean` - this will delete the `dist` directory.

You can then run `npm start` to spin up a local server.

### Recently Merged Changes

If there were changes recently merged that involved a lot of changes, you first want to pull the master branch, resolve any merge conflicts correctly and then make sure to run both `npm run clean`, `npm install` and `npm start` in that order before opening a new issue.

## Questions?

If you have any questions, comments, concerns or general feedback, we're happy to help!

### GitHub

Please make a comment mentioning `@techqueria/admins` in your issue or PR and one of us will get back to you ASAP.

### Slack

If you are part of the [Techqueria Slack workspace](https://techqueria.org/slack/), we also have a dedicated `#website` channel for discussion and a `#website-gh` for GitHub notifications.

### Gitter

If you are not part of our Slack community and want to use something besides GitHub, we also have [a Gitter lobby](https://gitter.im/techqueria/Lobby).

### Email

If needed, there is also the option of emailing us using [organizers@techqueria.org](mailto:organizers@techqueria.org).
