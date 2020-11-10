---
title: "Report Code of Conduct Violation"
description: "Filling out this form notifies Techqueria's Trust & Safety Committee in order to start an investigation."
noTimeEstimate: true
hideImage: true
aliases:
  - /report-violation/
  - /report-coc-violation/
---

Filling out this form notifies [Techqueria's Trust & Safety Committee](/trust-and-safety/) in order to start an investigation.

Members must submit a report in order to start an investigation.

If you have any screenshots, please note that and we can reach out to get those from you during the investigation.

Directly messaging an admin or member of the Techqueria team does not start an investigation

Please refer to [Techqueria's Code of Conduct](/code-of-conduct/) before submitting a report.

<form name="Code of Conduct Violation Report" method="POST" data-netlify-recaptcha="true" data-netlify="true" action="/success/coc-violation/" class="form--max-width-unset form--centered no-ids">
  <input type="hidden" aria-label="Subject" name="_subject" value="Techqueria - New Code of Conduct Violation Report">
  <div class="columns mb-0">
    <div class="column pb-0 pt-0">
      {{< fields/name >}}
    </div>
    <div class="column pb-0 pt-0">
      {{< fields/email >}}
    </div>
  </div>
  {{< fields/message required="true" label="Which rule was violated?" help="Please explicity call out which which rule was violated and which platform it was on." name="violation_type" placeholder="Please elaborate here" >}}
  {{< fields/message required="true" label="Who violated that rule?" help="Please include their full name and email, if known." name="who_violated_coc" placeholder="Please elaborate here" >}}
  {{< fields/message required="true" label="Please elaborate on this COC violation." help="Any information would be helpful." name="elaborate_on_violation" placeholder="Please elaborate here" >}}
  {{< fields/submit label="Submit report" >}}
</form>
