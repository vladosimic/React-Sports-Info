import React from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import useFetchTeamDetails from "../Fetch/fetchTeamDetails";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./css/teamDetails.css";

const TeamDetails = () => {
  const { idTeam } = useParams();
  const history = useHistory();

  const { teamDetails } = useFetchTeamDetails();

  if (teamDetails === undefined) {
    return <h1>Loading...</h1>;
  }

  if (teamDetails === "Invalid Team ID passed") {
    return (
      <div>
        <h4>Error...</h4>
        <Link className="btn" to="/leagues/">
          back to Leagues
        </Link>
      </div>
    );
  }

  if (teamDetails[0].idTeam === idTeam) {
    const {
      intFormedYear,
      strDescriptionEN,
      strGender,
      strStadium,
      strTeamBadge,
      strTeam,
      strStadiumDescription,
      strTeamJersey,
      strFacebook,
      strWebsite,
      strTwitter,
      strInstagram,
    } = teamDetails[0];

    return (
      <div className="container team-cont">
        <h2>{strTeam}</h2>
        <div className="grid-2">
          <div>
            <img src={strTeamBadge} alt={strTeam} />
          </div>
          <div>
            <p>
              <strong>Stadium:</strong>
              <br /> {strStadium}
            </p>
            <p>
              <strong>Stadium Description:</strong> <br />
              {strStadiumDescription}
            </p>
            <p>
              <strong>Gender:</strong>
              <br /> {strGender}
            </p>
            <p>
              <strong>Formed:</strong>
              <br /> {intFormedYear}
            </p>
          </div>
        </div>
        <p>
          <strong>About: </strong>
          <br /> {strDescriptionEN}
        </p>
        <h4>Jersey:</h4>
        <img src={strTeamJersey} alt="N/A" />
        <div className="social-media">
          <a href={`https://${strWebsite}`} target="_blank" rel="noreferrer">
            {strWebsite}
          </a>
          <a href={`https://${strFacebook}`} target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>

          <a href={`https://${strTwitter}`} target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href={`https://${strInstagram}`} target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>
        <button className="btn" onClick={() => history.goBack()}>
          Back to league
        </button>
      </div>
    );
  }
};

export default TeamDetails;
