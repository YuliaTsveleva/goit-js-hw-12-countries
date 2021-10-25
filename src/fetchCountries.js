import countryTemplate from "./templates/country.hbs";

fetch("https://restcountries.com/v2/name/ukraine")
  .then((response) => {
    return response.json();
  })
  .then((country) => {
    console.log(country);
    const markup = countryTemplate(country);
  })
  .catch((error) => {
    console.log(error);
  });
