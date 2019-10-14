---
title: Submit Event Feedback
description: We want to hear your feedback so we can keep improving our logistics and content.
image: "/assets/img/about/event-feedback/_index.jpg"
noTimeEstimate: true
aliases:
  - /feedback/
  - /event-feedback/
  - /about/techqueria-event/feedback/
  - /about/event-feedback/
---

Thank you for participating!

We hope you had as much fun attending as we did organizing it.

We want to hear your feedback so we can keep improving our logistics and content.

Please fill out this quick survey and let us know your thoughts.

Your answers will be anonymous but you're welcome to [contact us](/contact/) if you'd like follow up.

## Submit event feedback

<form name="Event Feedback" method="POST" data-netlify-recaptcha="true" data-netlify="true" action="/success/" class="form--centered">
  <input type="hidden" aria-label="Subject" name="_subject" value="Techqueria - Event Feedback">
  {{< fields/message label="What was the name of the event?" placeholder="Put event name and any other relevant details here" name="event_name" required="true" >}}
  <div class="field">
    <label class="label">How satisfied were you with the event?*</label>
    <div class="control">
      <label class="radio">
        <input type="radio" aria-label="How satisfied were you with the event?" name="event_satisfaction" value="5" required>
        5 (Very much)
      </label>
      <br>
      <label class="radio">
        <input type="radio" aria-label="How satisfied were you with the event?" name="event_satisfaction" value="4" required>
        4
      </label>
      <br>
      <label class="radio">
        <input type="radio" aria-label="How satisfied were you with the event?" name="event_satisfaction" value="3" required>
        3
      </label>
      <br>
      <label class="radio">
        <input type="radio" aria-label="How satisfied were you with the event?" name="event_satisfaction" value="2" required>
        2
      </label>
      <br>
      <label class="radio">
        <input type="radio" aria-label="How satisfied were you with the event?" name="event_satisfaction" value="1" required>
        1 (Not at all)
      </label>
    </div>
  </div>
  {{< fields/message label="What went well? 🌻" name="event_what_went_well" >}}
  {{< fields/message label="What were your key takeaways from this event? 🧠" name="event_key_takeaways" >}}
  {{< fields/message label="What could have gone better? 🌵" name="event_gone_better" >}}
  {{< fields/message label="Any last comments?" name="event_last_comments" >}}
  {{< fields/submit label="Submit feedback" >}}
</form>
