import { useState, useEffect, useCallback } from "react";

import { useGlobalContext } from "../ContextAPI/Context";

const ENDPOINT = "https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=";

const useFetchTeamDetails = () => {
  const { setLoading, teamId } = useGlobalContext();
  const [teamDetails, setTeamDetails] = useState();

  const fetchTeamDetails = useCallback(async () => {
    const res = await fetch(`${ENDPOINT}${teamId}`);
    const newTeam = await res.json();
    setTeamDetails(newTeam.teams);
    setLoading(false);
  }, [setLoading, teamId]);

  useEffect(() => {
    fetchTeamDetails();
  }, [fetchTeamDetails]);

  return { teamDetails };
};

export default useFetchTeamDetails;
