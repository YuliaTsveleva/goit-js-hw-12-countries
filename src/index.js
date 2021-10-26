import fetchCountry from "./fetchCountries.js";
import getRefs from "./refs.js";
import countryTemplate from "./templates/country.hbs";
import countriesListTemplate from "./templates/countries-list.hbs";
import debounce from "lodash.debounce";
import { onNotice } from "./pnotify.js";
import { onError } from "./pnotify.js";

const refs = getRefs();
refs.input.addEventListener("input", debounce(searchCountry, 500));

function searchCountry(e) {
  e.preventDefault();
  const data = refs.input.value;
  fetchCountry(data)
    .then(toMakeMarkup)
    .catch(onFetchError)
    .finally(() => {
      refs.input.value = "";
    });
}

function toMakeMarkup(country) {
  if (country.length === 1) {
    markupCountry(country);
  } else if (country.length > 1 && country.length <= 10) {
    markupCountriesList(country);
  } else if (country.length > 10) {
    onNotice();
  } else if (country.length === 0 || !country.length) {
    onError();
  }
}

function markupCountry(country) {
  refs.countryContainer.innerHTML = countryTemplate(country);
}

function markupCountriesList(country) {
  refs.countryContainer.innerHTML = countriesListTemplate(country);
  document
    .querySelector(".countries-list")
    .addEventListener("click", toFollowLink);
}

function onFetchError(error) {
  alert("The request failed!");
}

function toFollowLink(e) {
  const linkName = e.target.textContent;
  fetchCountry(linkName).then(toMakeMarkup);
}
