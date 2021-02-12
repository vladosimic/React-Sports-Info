import useFetchLeagueDetails from "../Fetch/fetchLeagueDetails";
import useFetchTeamsInLeague from "../Fetch/fetchTeamsInLeague";
import LeagueTeams from "./LeagueTeams";
import "./css/League.css";
import { Link } from "react-router-dom";
import useFetchTable from "../Fetch/fetchTable";
import Table from "../Tables/Table";
import Loading from "../Loading/Loading";

import { useGlobalContext } from "../ContextAPI/Context";

const LeagueDetails = () => {
  const { current } = useFetchLeagueDetails();
  const { team } = useFetchTeamsInLeague();
  const { table } = useFetchTable();
  const { sportType } = useGlobalContext();

  if (current === undefined) {
    return <Loading />;
  }

  return (
    <div className="container">
      {current.map((item) => {
        const {
          idLeague,
          strLeague,
          intFormedYear,
          strCurrentSeason,
          strDescriptionEN,
          strBadge,
          strGender,
        } = item;
        return (
          <div className="league-details" key={idLeague}>
            <h1>{strLeague}</h1>
            <img src={strBadge} alt={strLeague} />
            <p>
              <strong>Formed:</strong>
              <br />
              {intFormedYear}
            </p>
            <p>
              <strong>Gender:</strong>
              <br />
              {strGender}
            </p>
            <p>
              <strong>Season:</strong>
              <br />
              {strCurrentSeason}
            </p>
            <p>{strDescriptionEN}</p>
          </div>
        );
      })}

      <div>
        <h2 style={{ textAlign: "center" }}>Teams in this league :</h2>
        <div className="grid-3 teamsLeague">
          {team !== undefined ? (
            team.map((teams) => {
              if (teams.idLeague === current[0].idLeague) {
                return <LeagueTeams key={teams.idTeam} {...teams} />;
              }
              return null;
            })
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
        <div>
          {table !== undefined && sportType === "Soccer" ? (
            <Table table={table} />
          ) : null}
        </div>
      </div>
      <Link className="btn" to="/leagues/">
        Back
      </Link>
    </div>
  );
};

export default LeagueDetails;
