import React from "react";
import { useGlobalContext } from "../ContextAPI/Context";
import useFetchPlayers from "../Fetch/fetchPlayers";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

const Player = () => {
  const { player, setPlayer, loading } = useGlobalContext();
  const { currentPlayer } = useFetchPlayers();

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="container players-search" style={{ textAlign: "center" }}>
      <h2>Search player from any sports</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={player}
          onChange={(e) => setPlayer(e.target.value)}
        />
        <div>
          {currentPlayer !== "" &&
            currentPlayer !== null &&
            currentPlayer.map((result) => {
              return (
                <Link
                  key={result.idPlayer}
                  to={`/player-details/${result.idPlayer}`}
                >
                  <h2>{result.strPlayer}</h2>
                </Link>
              );
            })}
        </div>
      </form>
    </div>
  );
};

export default Player;
