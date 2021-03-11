// Location
const stateLocationElInputEl = document.getElementById("stateInput");
const countryLocationElInputEl = document.getElementById("countryInput");

// Functions
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

window.addEventListener("DOMContentLoaded", () => {
  validateLocation(stateLocationElInputEl, countryLocationElInputEl);
});
