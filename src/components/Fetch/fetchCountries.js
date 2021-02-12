import { useState, useEffect } from "react";
import { useGlobalContext } from "../ContextAPI/Context";

const countriesUrl =
  "https://www.thesportsdb.com/api/v1/json/1/all_countries.php";

const useFetchCountries = () => {
  const { loading, setLoading } = useGlobalContext();
  const [country, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountryUrl = async () => {
      const res = await fetch(countriesUrl);
      const newCountry = await res.json();
      setCountries(newCountry.countries);
      setLoading(false);
    };
    fetchCountryUrl();
  }, [setLoading]);

  return { country, loading };
};

export default useFetchCountries;
