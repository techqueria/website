---
title: "Submit a Testimonial"
description: "Has Techqueria helped you feel supported, empowered or connected? Share your story with us here! 💞"
image: "/assets/img/testimonials/_index.jpg"
hideImage: true
noTimeEstimate: true
url: /submit-testimonial/
aliases:
  - /submit-testimonials/
  - /submit-testimonial/
---

<h2 class="u-text--left-mobile-only" id="submit-your-testimonial">Submit Your Testimonial</h2>

<form name="Testimonial" method="POST" data-netlify-recaptcha="true" data-netlify="true" action="/success/testimonial/" class="form--max-width-unset form--centered no-ids">
  <input type="hidden" aria-label="Subject" name="_subject" value="Techqueria - New Testimonial Submission">
  <div class="columns mb-0">
    <div class="column pb-0">
      {{< fields/name >}}
      {{< fields/organization >}}
    </div>
    <div class="column pb-0">
      {{< fields/email >}}
      {{< fields/title >}}
    </div>
  </div>
  {{< fields/message required="true" label="Your testimonial" >}}
  {{< fields/referral >}}
  <!-- Disclaimer -->
  {{< fields/disclaimer >}}
  {{< fields/submit label="Submit testimonial" >}}
</form>
