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
- Subscription to our monthly email newsletter with org updates, events, event discounts, job postings and more
- (Future) Access to our member only portal with a dedicated job board & career resources

## Aftermath

Anyone who signs up will also be subscribed to our mailing list which you can opt out of at any time.

If you don't get an invite within 2 weeks, please [contact us](/contact) and let us know so we can check why you haven't received an invite yet.

## Best Practices

As you are waiting for your invite, feel free to read through our [Slack Community Guidelines](/slack/community-guidelines/).

You can also view the latest metrics about our Slack community [using Slofile](https://slofile.com/slack/techqueria).

## Allies

If you do not identify as Latinx, you will still receive an invitation as a multi-channel guest with access to `#announcements`, `#meta`, `#jobs` and `#allies` where you are welcome to share resources or job postings.

## Apply to become a member

<form name="Become a Member" method="POST" data-netlify-recaptcha="true" data-netlify="true" action="/success/member/" class="form--centered mt-2 no-ids" id="form_become_a_member">
  <input type="hidden" aria-label="Subject" name="_subject" value="Techqueria - Become a Member">
  {{< fields/name help="Please include your first name and last name. Make sure to capitalize your name." >}}
  {{< fields/email help="When signing up, please use a personal email address to avoid being locked out if you lose access to your work or school email. Make sure to check for typos in your email as this is usually the main reason someone doesn't receive an invite." >}}
  {{< fields/pronouns >}}
  {{< fields/title label="What is your current role?" help="e.g. Software Engineer, Recruiter, Product Designer, Student, etc." >}}
  {{< fields/organization label="Where do you currently work or study?" >}}
  {{< fields/job_category >}}
  {{< fields/yoe >}}
  {{< fields/linkedin >}}
  {{< fields/age >}}
  {{< fields/location >}}
  {{< fields/latinx help="You will get an invite either way but our community primarily serves Latinx in Tech." >}}
  {{< fields/tech >}}
  {{< fields/message label="Why are you interested in joining Techqueria?" help="Just a brief 1 to 2 sentence blurb on why you want to join our Latinx in Tech community." placeholder="Add your blurb here" name="why_techqueria" required="true" >}}
  {{< fields/looking_for >}}
  {{< fields/referral >}}
  {{< fields/coc >}}
  {{< fields/submit label="SUBMIT APPLICATION" classes="button is-primary is-large is-fullwidth is-size-5 has-text-weight-semibold" >}}
</form>
<script src="/assets/js/join.js"></script>
