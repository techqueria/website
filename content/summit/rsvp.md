---
title: "RSVP to #LHM Summit"
description: "Attend Techqueria's first virtual summit and celebrate the thriving Latinx in tech community."
image: "/assets/img/summit/rsvp/rsvp.png"
noTimeEstimate: true
hideImage: true
aliases:
  - /summit/rsvp/
  - /summit/tickets/
---

<form name="RSVP to #LHM Summit" method="POST" data-netlify-recaptcha="true" data-netlify="true" action="/success/summit/" class="form--centered mt-2 no-ids" id="form_become_a_member">
  <input type="hidden" aria-label="Subject" name="_subject" value="Techqueria - RSVP to #LHM Summit">
  <!-- First Name + Last Name -->
  <div class="field mt-0 mb-1">
    <div class="columns mb-0">
      <div class="column pb-0">
        <!-- First Name -->
        {{ partial "content/fields/first-name.html" . }}
      </div>
      <div class="column pb-0">
        <!-- Last Name -->
        {{ partial "content/fields/last-name.html" . }}
      </div>
    </div>
  </div>
  {{< fields/email help="When signing up, please use a personal email address to avoid being locked out if you lose access to your work or school email. Make sure to check for typos in your email as this is usually the main reason someone doesn't receive an invite." >}}
  {{< fields/linkedin >}}
  {{< fields/latinx help="You will get an invite either way but our community primarily serves Latinx in Tech." >}}
  {{< fields/location >}}
  {{< fields/organization label="Where do you currently work or study?" >}}
  {{< fields/title label="What is your current role?" help="e.g. Software Engineer, UX Designer, Product Manager, Student, etc." >}}
  {{< fields/yoe >}}
  {{< fields/job_category >}}
  {{< fields/pronouns >}}
  {{< fields/referral >}}
  {{< fields/submit label="RSVP" classes="button is-primary is-fullwidth is-size-5 has-text-weight-semibold" >}}
</form>
