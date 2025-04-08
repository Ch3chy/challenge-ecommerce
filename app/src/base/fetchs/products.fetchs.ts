export const fetchCountries = async (): Promise<string[]> => {
  return fetch("https://restcountries.com/v3.1/region/america")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((response) =>
      response.filter(
        (item: { subregion: string }) => item.subregion === "South America"
      )
    )
    .then((response) =>
      response.map((item: { name: { common: string } }) => item.name.common)
    );
};
