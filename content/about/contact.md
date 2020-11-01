---
title: "Contact Us"
description: "Get in touch with a Techqueria team member via email, Slack or social media. 📨"
hideImage: true
image: "/assets/img/about/contact.jpg"
noTimeEstimate: true
sitemap: true
toc: true
url: /contact/
aliases:
  - /about/contact-us/
  - /about/contact/
  - /contact-us/
  - /contact/
  - /message-us/
---

## Chat

You can <a onclick="Beacon('open')">chat with us directly</a> through our website.

## Slack

Within [our Slack community](/slack/), you can reach out to us via the `#meta` channel.

For technical support questions related to Slack, please contact [Slack support](https://slack.com/help).

## Social Media

You can message us via [Twitter](https://twitter.com/Techqueria ) or [Instagram](https://instagram.com/techqueriaorg).

We are less responsive to direct messages on other social media platforms so it may take longer to get back to you.

## Job Postings

You can [purchase a marketing package for jobs, events or programs](/partner) for job opportunities.

You're also welcome to join [our Slack](/slack/) and share job postings for free in the `#jobs` channel.

## Partnerships

If you're **interested in partnerships**, please fill out [this form](/partner/) or email us at `partnerships@techqueria.org`

We're always looking for [partners and sponsors](/supporters/) to help move our mission forward!

## In-Person

As of Spring 2020, we are no longer having in-person events due to the pandemic but we have plenty of [upcoming virtual events](https://events.techqueria.org/virtual-events/) and once it's safe again...

You're more than welcome to meet local chapter directors in person through one of our in-person events that take place across our various chapters.

You can also check out our different [communities](/communities/) to keep informed on what we're doing.

## Email

Filling out the form below sends an email to our national team leads.

<form name="Contact" method="POST" data-netlify-recaptcha="true" data-netlify="true" action="/success/" class="form--max-width-unset form--centered no-ids">
  <input type="hidden" aria-label="Subject" name="_subject" value="Techqueria - New Contact Message">
  <div class="columns mb-0">
    <div class="column pb-0 pt-0">
      {{< fields/name >}}
      {{< fields/organization >}}
    </div>
    <div class="column pb-0 pt-0">
      {{< fields/email >}}
      {{< fields/title >}}
    </div>
  </div>
  {{< fields/message required="true" help="Please provide any useful context so we can reply accordingly." label="Your message" >}}
  {{< fields/referral >}}
  {{< fields/submit >}}
</form>
