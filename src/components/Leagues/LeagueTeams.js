import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../ContextAPI/Context";
import Loading from "../Loading/Loading";
import "./css/League.css";

const LeagueTeams = (teams) => {
  const { setTeamId, loading } = useGlobalContext();
  const { strTeam } = teams;

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="teamsDetails">
      <Link
        to={`/team-details/${teams.idTeam}`}
        onClick={() => setTeamId(teams.idTeam)}
      >
        <h4>{strTeam}</h4>
      </Link>
    </div>
  );
};

export default LeagueTeams;
