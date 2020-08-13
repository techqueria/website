// Variables

const jobCategoryEl = document.getElementById("job_category");
const jobCategoryOtherInputEl = document.getElementById("job_category_other_input");
const jobCategoryOtherRadioEl = document.getElementById("job_category_other_radio");

// Functions

const validateOtherTextInput = (element, elementRadio, elementOtherInput) => {
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

// Form Fields
window.addEventListener("DOMContentLoaded", () => {
  validateOtherTextInput(jobCategoryEl, jobCategoryOtherRadioEl, jobCategoryOtherInputEl);
});
