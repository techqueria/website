---
title: "Join Us"
description: "Apply to become a member of Techqueria's community. 🌮➕➕"
image: "/assets/img/join/_index.jpg"
noTimeEstimate: true
hideImage: true
toc: true
sitemap: true
url: /join/
aliases:
  - /become-a-member/
  - /communities/slack/join/
  - /communities/slack/join-slack/
  - /email-newsletter/
  - /join-slack/
  - /newsletter/
  - /slack/join/
  - /subscribe/
  - /refer/
  - /referral/
---

## Member Benefits

- Access to our online Slack community where you can network with thousands of other Latinx in Tech
- Access to our dedicated events platform where you can automatically get notified of upcoming local and partner events
- Access to to our monthly email newsletter where you can get updated on national announcements, job postings and more
- (Future) Access to our member only portal with a dedicated job board, career resources and partner discounts

## Aftermath

Anyone who signs up will be automatically subscribed to our mailing list, sent an invite to our Slack community and automatically subscribed to our events platform for virtual webinars with the ability to opt in to local city chapters.

If you don't get an invite to our Slack community within 2 weeks, please [contact us](/contact) and let us know so we can check why you haven't received an invite yet.

## Slack Community Guidelines

As you are waiting for your invite, feel free to read through our [Slack Community Guidelines](/slack/community-guidelines/).

You can also view the latest metrics about our Slack community [using Slofile](https://slofile.com/slack/techqueria).

## Allies

We value you being a part of the Techqueria community and your interest in being an ally! To facilitate allyship, we are implementing best practices from other orgs that have been doing this type of work for a long time and adapting them to our organizational structure.

This organization exists as a space **for Latinx in tech folks** to feel included. Generally allyship in underrepresented communities is there to support the community, not the other way around. And so, while this structure is new for us as the community matures, we are firm in this policy of not allowing allies to get additional access to channels beyond the ones outlined below.

If you do not identify as Latinx, you will still receive an invitation as a multi-channel guest with access to `#announcements`, `#meta`, `#jobs` and `#allies` where you are welcome to share resources or job postings.

## Apply to become a member

<form name="Become a Member" method="POST" data-netlify-recaptcha="true" data-netlify="true" action="/success/member/" class="form--centered mt-2 no-ids" id="form_become_a_member">
  <input type="hidden" aria-label="Subject" name="_subject" value="Techqueria - Become a Member">
  {{< fields/name help="Please include your first name and last name. Make sure to capitalize your name." >}}
  {{< fields/email help="When signing up, please use a personal email address to avoid being locked out if you lose access to your work or school email. Make sure to check for typos in your email as this is usually the main reason someone doesn't receive an invite." >}}
  {{< fields/linkedin >}}
  {{< fields/location >}}
  {{< fields/organization label="Where do you currently work or study?" >}}
  {{< fields/title label="What is your current role?" help="e.g. Software Engineer, Recruiter, Product Designer, Student, etc." >}}
  {{< fields/yoe >}}
  {{< fields/job_category >}}
  {{< fields/pronouns >}}
  {{< fields/age >}}
  {{< fields/latinx help="You will get an invite either way but our community primarily serves Latinx in Tech." >}}
  {{< fields/tech >}}
  {{< fields/message label="Why are you interested in joining Techqueria?" help="Just a brief 1 to 2 sentence blurb on why you want to join our Latinx in Tech community." placeholder="Add your blurb here" name="why_techqueria" required="true" >}}
  {{< fields/looking_for >}}
  {{< fields/referral >}}
  {{< fields/coc >}}
  {{< fields/submit label="SUBMIT APPLICATION" classes="button is-primary is-large is-fullwidth is-size-5 has-text-weight-semibold" >}}
</form>
<script src="/assets/js/join.js"></script>
