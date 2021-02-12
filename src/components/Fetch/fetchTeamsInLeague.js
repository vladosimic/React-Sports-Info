import { useState, useEffect, useCallback } from "react";
import { useGlobalContext } from "../ContextAPI/Context";

const ENDPOINT =
  "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=";

const useFetchTeamsInLeague = () => {
  const { setLoading, league } = useGlobalContext();

  const [team, setTeam] = useState();

  const fetchTeam = useCallback(async () => {
    const res = await fetch(`${ENDPOINT}${league}`);
    const newData = await res.json();
    setTeam(newData.teams);
    setLoading(false);
  }, [setLoading, league]);

  useEffect(() => {
    fetchTeam();
  }, [fetchTeam]);

  return { team };
};

export default useFetchTeamsInLeague;
