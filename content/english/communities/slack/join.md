---
title: "Request an Invite"
description: "Request an invitation to Techqueria's Slack community. 🌮"
image: "/assets/img/communities/slack/join-to-slack.jpg"
noTimeEstimate: true
hideImage: true
toc: true
aliases:
  - /slack/join/
  - /join-slack/
  - /communities/slack/join-slack/
---

## Aftermath

Anyone who signs up will also be subscribed to our mailing list which you can opt out of at any time.

You should get an invite within 2 weeks.

If you don't get an invite by then, please [contact us](/contact).

## Best Practices

As you are waiting for your Slack invite, feel free to read through our [Slack Community Guidelines](/slack/community-guidelines/).

You can also view the latest metrics about our Slack community [using Slofile](https://slofile.com/slack/techqueria).

## Allies

If you do not identify as Latinx, you will still receive an invitation as a multi-channel guest with access to `#announcements`, `#meta`, `#jobs` and `#allies` where you are welcome to share resources or job postings.

## Request an Invite

<form name="Join Slack" method="POST" data-netlify-recaptcha="true" data-netlify="true" action="/success/slack/" class="form--centered">
  <input type="hidden" aria-label="Subject" name="_subject" value="Techqueria - Join Slack">
  {{< fields/name help="Please include your first name and last name. Make sure to capitalize your name." >}}
  {{< fields/email help="When signing up, please use a personal email address to avoid being locked out if you lose access to your work or school email. Make sure to check for typos in your email as this is usually the main reason someone doesn't receive an invite." >}}
  {{ fields/pronouns }}
  {{< fields/title label="What is your current role?" help="e.g. Software Engineer, Recruiter, Product Designer, Student, etc." >}}
  {{< fields/organization label="Where do you currently work or study?" >}}
  {{< fields/member >}}
  {{< fields/linkedin >}}
  {{< fields/location >}}
  {{< fields/latinx_in_tech help="You will get an invite either way." >}}
  {{< fields/message label="Why are you interested in joining Techqueria?" help="Just a brief 1 to 2 sentence blurb on why you want to join our Latinx in Tech community." name="why_techqueria" required="true" >}}
  {{< fields/referral >}}
  {{< fields/submit label="Request an invite" >}}
</form>
