import React from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetchPlayers from "../Fetch/fetchPlayers";
import Loading from "../Loading/Loading";
import "./css/player.css";

const PlayerDetails = () => {
  const { currentPlayer } = useFetchPlayers();
  const { idPlayer } = useParams();
  const history = useHistory();

  if (currentPlayer === "") {
    return <Loading />;
  }

  return (
    <div>
      {currentPlayer.map((itemPlayer) => {
        const {
          strPlayer,
          strBirthLocation,
          strDescriptionEN,
          strNationality,
          strPosition,
          strTeam,
          strThumb,
          strHeight,
          strWage,
          dateBorn,
          strWeight,
        } = itemPlayer;
        if (itemPlayer.idPlayer === idPlayer) {
          return (
            <div key={itemPlayer.idPlayer} className="container player-cont">
              <div className="grid-2">
                <div>
                  <h1>{strPlayer}</h1>
                  <img src={strThumb} alt={strPlayer} />
                  <p>
                    <strong>Nationality:</strong>
                    <br />
                    {strNationality}
                  </p>
                  <p>
                    <strong>Birth location:</strong>
                    <br />
                    {strBirthLocation}
                  </p>
                  <p>
                    <strong>Date born:</strong>
                    <br />
                    {dateBorn}
                  </p>
                  <p>
                    <strong>Height:</strong>
                    <br />
                    {strHeight}
                  </p>
                  <p>
                    <strong>Weight:</strong>
                    <br />
                    {strWeight}
                  </p>
                  <p>
                    <strong>Team:</strong>
                    <br />
                    {strTeam}
                  </p>
                  <p>
                    <strong>Wage:</strong>
                    <br />
                    {strWage}
                  </p>
                  <p>
                    <strong>Position:</strong>
                    <br />
                    {strPosition}
                  </p>
                </div>
                <div>
                  <p style={{ marginTop: "100px" }}>
                    <strong>About:</strong>
                    <br />
                    {strDescriptionEN}
                  </p>
                </div>
              </div>
              <button className="btn" onClick={() => history.goBack()}>
                Back
              </button>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default PlayerDetails;
