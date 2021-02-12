// Variables

// Form
const formEl = document.getElementById("form_become_a_member");
// Location
const stateLocationElInputEl = document.getElementById("stateInput");
const countryLocationElInputEl = document.getElementById("countyInput");
// Job Category
const jobCategoryEl = document.getElementById("job_category");
const jobCategoryOtherInputEl = document.getElementById("job_category_other_input");
const jobCategoryOtherSelectedEl = document.getElementById("job_category_other_selected");
// Looking For
const lookingForCheckboxesEls = document.getElementsByName("looking_for");
const lookingForEl = document.getElementById("looking_for");
const lookingForOtherCheckboxEl = document.getElementById("looking_for_other_checkbox");
const lookingForOtherInputEl = document.getElementById("looking_for_other_input");
// Referral
const referralEl = document.getElementById("referral");
const referralOtherInputEl = document.getElementById("referral_other_input");
const referralOtherRadioEl = document.getElementById("referral_other_radio");

// Functions

const getTextValuesForMultipleCheckboxes = (checkboxEls, elementID) => {
  const textArrayEl = [];
  let parsedTextEl = "";

  for (let i = 0, l = checkboxEls.length; i < l; i++) {
    if (checkboxEls[i].checked) {
      textArrayEl.push(checkboxEls[i].value);
    }
  }

  parsedTextEl = textArrayEl.join(";");
  document.getElementById(elementID).value = parsedTextEl;
};

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

const validateLocation = (stateElement, countryElement) => {
  countryElement.addEventListener("change", () => {
    if (countryElement.value !== "US") {
      stateElement.value = "N/A";
    }
  });

  stateElement.addEventListener("change", () => {
    if (stateElement.validity.patternMismatch) {
      stateElement.value = stateElement.value.toUpperCase();
    }
  });
};

// Form Fields
window.addEventListener("DOMContentLoaded", () => {
  validateOtherTextInputWithRadio(lookingForEl, lookingForOtherCheckboxEl, lookingForOtherInputEl);
  validateOtherTextInputWithRadio(referralEl, referralOtherRadioEl, referralOtherInputEl);
  validateOtherTextInputWithSelected(jobCategoryEl, jobCategoryOtherSelectedEl, jobCategoryOtherInputEl);
  validateLocation(stateLocationElInputEl, countryLocationElInputEl);
  formEl.addEventListener("submit", () => {
    getTextValuesForMultipleCheckboxes(lookingForCheckboxesEls, "looking_for_text_value");
  });
});
