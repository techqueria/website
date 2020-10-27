---
title: "Become a Member"
description: "Apply to become a member of Techqueria's community. 🌮➕➕"
image: "/assets/img/join/_index.jpg"
noTimeEstimate: true
hideImage: true
sitemap: true
toc: true
url: /join/
aliases:
  - /become-a-member/
  - /communities/slack/join/
  - /communities/slack/join-slack/
  - /join-slack/
  - /slack/join/
  - /refer/
  - /referral/
---

## Member Benefits

By becoming a member of Techqueria, you will get access to our:

{{< member-benefits >}}

## Allies

{{< allies >}}

<div class="mt-4"></div>

## Apply to Become a Member

<form name="Become a Member" method="POST" data-netlify-recaptcha="true" data-netlify="true" action="/success/member/"
  class="form--centered form--max-width-unset no-ids" id="form_become_a_member">
  <input type="hidden" aria-label="Subject" name="_subject" value="Techqueria - Become a Member">
  <div class="columns is-multiline mb-0">
    <div class="column is-full-tablet is-half-desktop">
      <!-- 1. Name -->
      {{< fields/name help="Please include your first name and last name. Make sure to capitalize your name." >}}
      <!-- Organization -->
      {{< fields/organization label="Where do you currently work or study?" help="You can also put unemployed." >}}
      <!-- LinkedIn -->
      {{< fields/linkedin >}}
      <!-- Years of Experience -->
      {{< fields/yoe >}}
      <!-- Identify as Latinx -->
      {{< fields/latinx help="You will get an invite either way but our community supports Techqueria's mission of creating more Latinx leaders in Tech." >}}
      <!-- In Tech -->
      {{< fields/tech >}}
      <!-- Looking For -->
      {{< fields/looking_for >}}
      <!-- Referral -->
      {{< fields/referral >}}
      <!-- Agree to Community Guidelines -->
      {{< fields/slack_community_guidelines >}}
    </div>
    <div class="column is-full-tablet is-half-desktop">
      <!-- 2. Email -->
      {{< fields/email help="Use a personal email address to avoid being locked out if you lose access to your work or school email and make sure check for typos." >}}
      <!-- Location -->
      {{< fields/location >}}
      <!-- Title -->
      {{< fields/title label="What is your current role?" help="e.g. Software Engineer, UX Designer, Product Manager, Student, etc." >}}
      <!-- Gender Pronouns -->
      {{< fields/pronouns >}}
      <!-- Age -->
      {{< fields/age >}}
      <!-- Job Category -->
      {{< fields/job_category >}}
      <!-- COC -->
      {{< fields/coc >}}
    </div>
  </div>
  {{< fields/disclaimer >}}
  {{< fields/submit label="SUBMIT APPLICATION" classes="button is-primary  is-fullwidth is-size-5 has-text-weight-semibold" >}}
</form>
<script src="/assets/js/join.js"></script>

<div class="u-text--centered">
  <img src="/assets/img/join/success.png" alt="Techqueria Hurray" class="mt-2 mb-2 u-box-shadow--none" width="400">
  <p>You're ready to submit now, hurray!</p>
</div>

## Other Ways to Get Involved
