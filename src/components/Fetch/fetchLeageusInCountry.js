import { useState, useEffect, useCallback } from "react";

import { useGlobalContext } from "../ContextAPI/Context";

const ENDPOINT =
  "https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php";

const useFetchLeageusInCountry = () => {
  const {
    setLoading,
    countryType,
    setCountryType,
    sportType,
    setSportType,
  } = useGlobalContext();

  const [selected, setSelected] = useState([]);

  const fetchSportCountry = useCallback(async () => {
    const res = await fetch(`${ENDPOINT}?c=${countryType}&s=${sportType}`);
    const newData = await res.json();
    setSelected(newData.countrys);
    setLoading(false);
  }, [setLoading, countryType, sportType]);

  useEffect(() => {
    fetchSportCountry();
  }, [fetchSportCountry]);

  return {
    sportType,
    setSportType,
    countryType,
    setCountryType,
    selected,
    fetchSportCountry,
  };
};

export default useFetchLeageusInCountry;
