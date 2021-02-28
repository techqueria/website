---
title: "Jekyll on github pages and service workers. Progressive web apps and offline mode for your blog"
date: 2016-11-14
description: "I attended the chrome dev summit 2016 last week, and Google has been pushing Progressive web apps pretty hard. They’re basically a new way..."
image: "/assets/img/news/2016-11-14-hacker-noon.jpg"
---

I attended the chrome dev summit 2016 last week, and Google has been pushing [Progressive web apps](https://developers.google.com/web/progressive-web-apps/) pretty hard. They’re basically a new way to deliver amazing experiences to users in the web, by making websites more reliable, fast and
engaging; by adding [offline experiences](https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/), periodic background syncs and push notifications.

One key aspect of this is **service workers**. A service worker is a script that runs separate of your page, it can intercept network requests, write to a cache, it can’t manipulate the DOM but you can use post messages to get and send data, and they use extensive use of promises. A lot of things
which are super cool and you should de definitely be looking into, but I won’t go a lot into them since there’s already much better content out there than I can produce.

![](https://hackernoon.com/hn-images/1*-fdqJBudDivDeEf_ERQXeQ.png)

### Getting Started

During the summit I turned one of my websites into a progressive web app, [https://techqueria.org/](https://techqueria.org/). (It doesn’t work in safari or iOs). Take a look at how fast it changes pages, at your network tab, and how it works even if you turn on airplane mode.

There are some important requisites for service workers:

1.  You must use HTTPS.
2.  The file must be in the root of the application.

Lucky both these things are easy to accomplish using github pages!

**HTTPS**

If you’re not using a custom domain, your page is already serve using HTTPS. If you want to use a custom domain, try [Cloudflare](https://www.cloudflare.com/), they offer a DNS service that comes with free https. You will point your NS to Cloudflare and they will automatically load your current DNS
settings. To activate simple SSL you just have to toggle an option [https://www.cloudflare.com/ssl/](https://www.cloudflare.com/ssl/)

If you’re not using github pages, but something else like digital ocean, then use [LetsEncrypt](https://letsencrypt.org/), they offer free SSL certificates.

**SW.js**

The biggest problem I had when I was creating my application was that I failed with the location of the file. The service worker will have a scope and it can’t be a directory above it’s location, it has to be in the root. It took me a while to debug until some
[friendly person](https://twitter.com/salvadelapuente) from Mozilla caught my error. You can simply leave the sw file in the root of your jekyll project and it will be available for the visitors.  The error was hard to find because we saw the service worker being active, but no requests where being
intercepted and offline mode wasn’t working.

You can take a look at all the code it github, you can basically copy my sw.js and just replace the paths to your files and it should work.

[**techqueria/site** \_Website for the latinxs in tech community_github.com](http://github.com/techqueria/site "http://github.com/techqueria/site")[](http://github.com/techqueria/site)

We also included a manifest.json, so that in Android it will display the users an option to show in homepage, which adds a pretty icon and an app-like experience.

Other than that the steps I follow are the same steps that are in any tutorial.  I recommend the following ones if you want to get more information:

- [Live coding a progressive web app](https://www.youtube.com/watch?v=X8EQSy-ajo4): In this shortish video you can see Surma and Paul demonstrate adding a Service Worker to a site during the break.
- [Your first progressive web app](https://developers.google.com/web/fundamentals/getting-started/codelabs/your-first-pwapp/): Is an introduction that uses a sample application to introduce the concepts.
- [Offline we applications course](https://www.udacity.com/course/offline-web-applications--ud899): Is an Udacity class that goes more in depth into the possibilities for offline web applications, like caching your user data in IndexedDB.
- [Future Progressive Web Apps](https://www.youtube.com/watch?v=J2dOTKBoTL4&t=600s): Jake (one of the originators of Service Workers) shares the future of the web app model, with Foreign Fetch, Streams and more.

Originally written here: https://hackernoon.com/jekyll-on-github-pages-and-service-workers-progressive-web-apps-and-offline-mode-for-your-blog-b1cf9e87a6d1

Written by David Silva
