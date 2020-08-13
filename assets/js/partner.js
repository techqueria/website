// Variables

const formEl = document.getElementById("form_partner_with_techqueria");

// Partnership Goals
const partnershipGoalsCheckboxesEls = document.getElementsByName("partnership_goals");
const partnershipGoalsEl = document.getElementById("partnership_goals");
const partnershipGoalsOtherCheckboxEl = document.getElementById("partnership_goals_other_checkbox");
const partnershipGoalsOtherInputEl = document.getElementById("partnership_goals_other_input");

// How to Partner
const howToPartnerCheckboxesEls = document.getElementsByName("how_to_partner");
const howToPartnerEl = document.getElementById("how_to_partner");
const howToPartnerOtherCheckboxEl = document.getElementById("how_to_partner_other_checkbox");
const howToPartnerOtherInputEl = document.getElementById("how_to_partner_other_input");

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
  // Partnership Goals

  validateOtherTextInput(partnershipGoalsEl, partnershipGoalsOtherCheckboxEl, partnershipGoalsOtherInputEl);

  // How to Partner

  validateOtherTextInput(howToPartnerEl, howToPartnerOtherCheckboxEl, howToPartnerOtherInputEl);

  // Referral

  validateOtherTextInput(referralEl, referralOtherRadioEl, referralOtherInputEl);

  formEl.addEventListener("submit", () => {
    getTextValuesForMultipleCheckboxes(partnershipGoalsCheckboxesEls, "partnership_goals_text_value");
    getTextValuesForMultipleCheckboxes(howToPartnerCheckboxesEls, "how_to_partner_text_value");
  });
});
