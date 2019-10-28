// Variables

const formEl = document.getElementById("form_become_a_member");
const jobCategoryEl = document.getElementById("job_category");
const jobCategoryOtherInputEl = document.getElementById("job_category_other_input");
const jobCategoryOtherRadioEl = document.getElementById("job_category_other_radio");
const lookingForCheckboxesEls = document.getElementsByName('looking_for');
const lookingForEl = document.getElementById("looking_for");
const lookingForOtherCheckboxEl = document.getElementById("looking_for_other_checkbox");
const lookingForOtherInputEl = document.getElementById("looking_for_other_input");
const referralEl = document.getElementById("referral");
const referralOtherInputEl = document.getElementById("referral_other_input");
const referralOtherRadioEl = document.getElementById("referral_other_radio");

// Functions

const getTextValuesForMultipleCheckboxes = (checkboxEls, elementID) => {
  const textArrayEl = [];
  let parsedTextEl = '';

  for (let i = 0, l = checkboxEls.length; i < l; i++) {
    if (checkboxEls[i].checked) {
      textArrayEl.push(checkboxEls[i].value);
    }
  }

  parsedTextEl = textArrayEl.join(';');
  document.getElementById(elementID).value = parsedTextEl;
};

const validateOtherTextInput = (element, elementRadio, elementOtherInput) => {
  if (element) {
    element.addEventListener('change', () => {
      if (elementRadio.checked) {
        elementOtherInput.required = true;
      } else {
        elementOtherInput.required = false;
      }
    });
  }
};

// Form Fields
window.addEventListener('DOMContentLoaded', () => {
  validateOtherTextInput(lookingForEl, lookingForOtherCheckboxEl, lookingForOtherInputEl);
  validateOtherTextInput(referralEl, referralOtherRadioEl, referralOtherInputEl);
  validateOtherTextInput(jobCategoryEl, jobCategoryOtherRadioEl, jobCategoryOtherInputEl);

  formEl.addEventListener('submit', () => {
    getTextValuesForMultipleCheckboxes(
      lookingForCheckboxesEls,
      'looking_for_text_value'
    );
  });
});
