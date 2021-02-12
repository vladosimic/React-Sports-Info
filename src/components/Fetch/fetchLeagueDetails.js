import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../ContextAPI/Context";

const ENDPOINT =
  "https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=";

const useFetchLeagueDetails = () => {
  const { setLoading } = useGlobalContext();
  const [current, setCurrent] = useState();
  const { idLeague } = useParams();

  const fetchLeagueDetails = useCallback(async () => {
    const res = await fetch(`${ENDPOINT}${idLeague}`);
    const newData = await res.json();
    setCurrent(newData.leagues);
    setLoading(false);
  }, [idLeague, setLoading]);

  useEffect(() => {
    fetchLeagueDetails();
  }, [fetchLeagueDetails]);

  return { current };
};

export default useFetchLeagueDetails;
