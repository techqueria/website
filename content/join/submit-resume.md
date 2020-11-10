---
title: "Submit Your Resume"
description: "By submitting your resume info, you'll be added to Techqueria's resume bank to be considered for jobs that match your skills and experience. 📝"
image: "/assets/img/join/_index.jpg"
noTimeEstimate: true
hideImage: true
url: /submit-resume/
aliases:
  - /submit-your-resume/
---

If you're actively job searching and want to share your resume with recruiters, you can submit your info here.

After submitting, your resume will be shared directly with recruiters within Techqueria's network.

If there's a fit, they'll reach out directly!

<h2 class="u-text--left-mobile-only">Submit Your Resume</h2>
<form name="Submit Resume" method="POST" data-netlify-recaptcha="true" data-netlify="true" action="/success/resume/"
  class="form--centered no-ids" id="form_submit_resume">
  <input type= "hidden" aria-label="Subject" name="_subject" value="Techqueria - Submit Resume">
  <!-- Name -->
  {{< fields/name help="Please include your first name and last name. Make sure to capitalize your name." >}}
  <!-- Email -->
  {{< fields/email help="Use a personal email address to avoid being locked out if you lose access to your work or school email and make sure to check for typos." >}}
  <!-- Title -->
  {{< fields/title label="What is your current role?" help="e.g. Product Manager, Software Engineer, Product Designer" >}}
  <!-- Org -->
  {{< fields/organization label="Where do you currently work or study?" help="You can also put N/A if you're unemployed." >}}
  <!-- Location -->
  {{< fields/location >}}
  <!-- Years of Experience -->
  {{< fields/yoe >}}
  <!-- LinkedIn -->
  {{< fields/linkedin >}}
  <!-- Resume -->
  {{< fields/resume help="Please upload a 1-page PDF file." >}}
  <!-- Category -->
  {{< fields/job_category >}}
  <!-- Job Searching Status -->
  {{< fields/job_searching >}}
  <!-- Identify as Latinx -->
  {{< fields/latinx >}}
  <!-- Gender Pronouns -->
  {{< fields/pronouns >}}
  <!-- Age -->
  {{< fields/age >}}
  <!-- Disclaimer -->
  {{< fields/disclaimer >}}
  <!-- Submit form -->
  {{< fields/submit label="Submit resume" classes="button is-primary  is-fullwidth is-size-5 has-text-weight-semibold" >}}
</form>
<script src="/assets/js/resume.js"></script>

<div class="u-text--centered">
  <img src="/assets/img/join/success.png" alt="Techqueria Hurray" class="mt-2 mb-2 u-box-shadow--none" width="400">
  <p>You're ready to submit now, hurray!</p>
</div>
