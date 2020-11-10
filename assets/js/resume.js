// Variables
const jobCategoryEl = document.getElementById("job_category");
const jobCategoryOtherInputEl = document.getElementById("job_category_other_input");
const jobCategoryOtherSelectedEl = document.getElementById("job_category_other_selected");
const referralEl = document.getElementById("referral");
const referralOtherInputEl = document.getElementById("referral_other_input");
const referralOtherRadioEl = document.getElementById("referral_other_radio");

// Functions
const validateOtherTextInputWithRadio = (element, elementRadio, elementOtherInput) => {
  if (element) {
    elementOtherInput.disabled = true;

    element.addEventListener("change", () => {
      if (elementRadio.checked) {
        elementOtherInput.required = true;
        elementOtherInput.disabled = false;
      } else {
        elementOtherInput.required = false;
        elementOtherInput.disabled = true;
      }
    });
  }
};

const validateOtherTextInputWithSelected = (element, elementSelect, elementOtherInput) => {
  if (element) {
    elementOtherInput.disabled = true;

    element.addEventListener("change", () => {
      if (elementSelect.selected) {
        elementOtherInput.required = true;
        elementOtherInput.disabled = false;
      } else {
        elementOtherInput.required = false;
        elementOtherInput.disabled = true;
      }
    });
  }
};

// Form Fields
window.addEventListener("DOMContentLoaded", () => {
  validateOtherTextInputWithRadio(referralEl, referralOtherRadioEl, referralOtherInputEl);
  validateOtherTextInputWithSelected(jobCategoryEl, jobCategoryOtherSelectedEl, jobCategoryOtherInputEl);
});
