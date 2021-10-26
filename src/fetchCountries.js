const BASE_URL = `https://restcountries.com/v2/name/`;

export default function fetchCountry(searchQuery) {
  const url = `${BASE_URL}${searchQuery}`;
  return fetch(url).then((response) => {
    return response.json();
  });
}
