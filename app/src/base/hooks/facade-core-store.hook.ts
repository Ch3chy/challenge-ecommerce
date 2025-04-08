import { useEffect } from "react";
import { useCoreStore } from "../stores/useCoreStore";
import { fetchCountries } from "../fetchs/products.fetchs";

export const useFacadeCoreStore = () => {
  const countries = useCoreStore((store) => store.countries);
  const setCountries = useCoreStore((store) => store.setCountries);

  const loadCountries = () => {
    fetchCountries().then((response) => {
      setCountries(response.sort());
    });
  };

  useEffect(() => {
    if (countries.length === 0) {
      loadCountries();
    }
  }, [countries]);

  return { countries };
};
