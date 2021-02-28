# Contributing

<!-- TOC -->

- [Contributing](#contributing)
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
    - [File Size](#file-size)
    - [Special Characters](#special-characters)
    - [Images](#images)
    - [Team Members](#team-members)
    - [Events](#events)
    - [Companies](#companies)
    - [Adding news updates](#adding-news-updates)
      - [Blog updates](#blog-updates)
      - [Press articles](#press-articles)
    - [Resources](#resources)
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
  - [4. Getting Paid for Bounty Issues](#4-getting-paid-for-bounty-issues)
    - [Priorities](#priorities)
    - [Quality](#quality)
    - [Workflow](#workflow)
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

After you are added you to our Techqueria GitHub organization as a contibutor, you can let the world know you've helped us by displaying our organization avatar on your GitHub profile (see screenshot below).

![GitHub Organizations](https://i.imgur.com/DpZcMFl.jpg)

By default, this is made private but you [can easily make it public.](https://help.github.com/en/articles/publicizing-or-hiding-organization-membership).

##### LinkedIn

Showcase your contributions through LinkedIn with Techqueria's company profile: https://linkedin.com/company/techqueria.

Just make sure to use the description below and you can briefly describe what you did as well.

```txt
Techqueria is a 501c3 nonprofit serving the largest community for Latinx in Tech.

- Contributed to their open source website through content updates and bug fixes
```

Here's an example of how that can be done by posting under "Experience" or "Volunteering" on your LinkedIn profile.

![LinkedIn Contributions](https://i.imgur.com/t01auIB.jpg)

##### Credibility

- You can tell people you've contributed to an open source project - [not many developers do](https://www.digitalocean.com/currents/october-2018/)!
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

### File Size

For files longer than 200 lines, we recommend breaking it out into multiple files by referencing partials like this: `{{ partial "content/custom/breadcrumbs.html" . }}`.

If you see existing files longer than 200 lines (excluding Markdown files), feel free to break them down further.

### Special Characters

If there is a special character in the text, make sure to use double quotes.

However, "#" is not allowed in titles under any circumstances. 🤷🏽‍♂️

### Images

All images should be added to `assets/img` within the relevant folder.

If there is not a relevant directory, please create one.

We do have automated image optimization but feel free to compress the image locally as well.

While it is easier to just link images, we highly recommend downloading images and adding them locally.

For optimal display, we recommend making images 1000px wide and 500px high.

### Team Members

When adding a new person, make sure to use their LinkedIn profile as the URL and find a high-res photo of them so we can host it locally.

> Example: `content/english/team/frances-coronel.md`

```markdown
---
title: Frances Coronel
image: "/assets/img/team/frances-coronel.jpg"
description: "Software Engineer, Slack"
linkedin: fvcproductions
twitter: fvcproductions
github: fvcproductions
flag: 🇵🇪
categories:
  - staff
  - san-francisco
---
```

Note that you only need usernames for LinkedIn, Twitter & GitHub profiles.

The flag identifies the heritage of the member and is optional.

Location can be `san-francisco`, `nyc`, `los-angeles`, `austin` and `chicago`.

### Events

Techqueria has hosted quite a lot of events!

Once we finalize the date for an event, that's a good time to add it in.

> Example: `content/english/events/2019-06-19-lyft.md`

Please format file name as `year-month-day-event-name.md`.

```markdown
---
title: "Techqueria @ Lyft"
description: Join us for an evening with Lyft and Techqueria! We'll be talking about skills to advance into senior & leadership roles.
date: 2019-06-19
link: https://lyftxtechqueria.splashthat.com/
image: "/assets/img/events/2019-06-19-lyft.jpg"
photos: https://photos.app.goo.gl/5Ye8FhbV1B1SrxFH6
categories:
  - "san-francisco"
aliases:
  - /events/2019/06/19/techqueria-lyft/
organizations:
  - "Lyft"
organizers:
  - "Felipe Ventura"
  - "Frances Coronel"
  - "Dulce Villarreal"
  - "Jonathan De la Paz"
articles:
  - "Techqueria: Building a community for Latinos in tech industry"
---
```

The important keys to note here are `companies`, `organizers` and `articles`.

Each coincides with the title of another Markdown file representing said entity.

This makes it easy to relate an organizer with an event, a company with an event, an event with a press article and so on.

### Companies

When adding a new company, make sure to link their careers site and download an appropriate logo image so we can host it locally.

The image for companies **MUST be** 1000px wide and 500 px high in order to display correctly.

> Example: `content/english/support-us/supporters/braintree.md`

```markdown
---
title: Slack
description: Slack is where work happens.
image: "/assets/img/supporters/slack.png"
link: https://slack.com/careers
---
```

### Adding news updates

#### Blog updates

Make sure to always turn comments on and reference the author so they can get proper credit.

> Example: `content/english/news/2016-07-19-community-building.md`

```markdown
---
title: "Techqueria is now officially a 501c3 nonprofit!"
date: 2019-03-07
description: "This incorporation is part of a larger push to better serve our growing Latinx in Tech community."
image: "/assets/img/news/2019-03-07-nonprofit.png"
---
```

#### Press articles

> Example: `content/english/news/2019-07-18-el-tecolote.md`

```txt
---
title: "Techqueria: Building a community for Latinos in tech industry"
date: 2019-07-18
description: "Techqueria, an organization for Latinos in tech, was founded in Berkeley back in November 2015 with the purpose of serving those who were studying or pursuing a career in tech."
publication: "El Tecolote"
image: "/assets/img/news/2019-07-18-el-tecolote.jpg"
link: http://eltecolote.org/content/en/features/techqueria-building-a-community-for-latinos-in-tech-industry/
featuring:
  - Felipe Ventura
---
```

You can add which team members are featured in the press article.

TODO: In the future, we would like to set up the publications so we can display them in a cool way like with the companies.

### Resources

You can add a new resource to a bunch of different categories like career, nonprofits, healthcare, immigration, etc.

> Example: `content/english/resources/nonprofits/slack-for-non-profits.md`

```markdown
---
title: Slack for Nonprofits
image: "/assets/img/resources/slack.png"
description: The Slack for Nonprofits program offers eligible organizations a free or discounted upgrade of one workspace to a paid plan.
link: https://get.slack.help/hc/en-us/articles/204368833-Slack-for-Nonprofits
---
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
├── drafts                         // files not ready for prime time
├── gulpfile.babel.js              // configuration for Gulp
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

## 4. Getting Paid for Bounty Issues

You can _get paid to contribute to Techqueria_!

Our nonprofit team is small and we're always looking for new contributors for our website.

We have a bounty program in order to build and maintain our member portal where contributers can be rewarded financially.

### Priorities

Our bounty program is about creating opportunities for our community to contribute to Techqueria's Casa member portal, to make it their own. It also gives us an opportunity to get to know developers who we could potentially work with more in the future. We celebrate making open source contributions
more sustainable by paying, but money alone shouldn't be the primary motivation for participation.

### Quality

We're not able to accept pull requests that aren't completed to a high standard in a reasonable timeframe. Please only pick up bounties that you are confident you can complete at your current knowledge and skill level. We will not accept pull requests or pay bounties for code that's not up to the
standard we need to maintain for our members who rely on this platform. Our dev team is happy to answer questions and provide some limited support, but we don't have capacity to mentor junior developers through the bounty program.

We want to attract quality contributions. The issue will only be considered complete and approved for payment if the pull request is merged by a core team member.

### Workflow

1. Search for issues with attached bounties: [Bounties for all repositories](https://github.com/opencollective/opencollective/issues?utf8=✓&q=is%3Aissue+is%3Aopen+label%3Abounty) which will have the bounty amount set
2. Express interest by commenting on the issue and ask to be assigned
3. You'll be assigned and given an expected timeframe to deliver \(if you aren't able to meet the deadline, the issue may be assigned to someone else\)
4. Create your solution
5. Open a Pull Request to get your code reviewed
6. Incorporate any feedback from [Core Contributors](https://github.com/orgs/opencollective/teams/core-contributors)
7. PR is reviewed, approved, and merged by a [Core Contributor](https://github.com/orgs/opencollective/teams/core-contributors)
8. [Submit your invoice as an expense](../expenses/submitting-expenses.md) to [Open Collective Engineering](https://opencollective.com/engineering)\*
9. Get paid!

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

If you are part of the [Techqueria Slack workspace](https://techqueria.org/slack/), we also have a dedicated `#meta-website` channel for discussion and a `#meta-website-alerts` for GitHub notifications.

### Gitter

If you are not part of our Slack community and want to use something besides GitHub, we also have [a Gitter lobby](https://gitter.im/techqueria/Lobby).

### Email

If needed, there is also the option of contacting us using [https://techqueria.org/contact](https://techqueria.org/contact)
