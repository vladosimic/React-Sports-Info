import { useState, useEffect, useCallback } from "react";
import { useGlobalContext } from "../ContextAPI/Context";

const ENDPOINT =
  "https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=";

const useFetchPlayers = () => {
  const { player, setLoading } = useGlobalContext();
  const [currentPlayer, setCurrentPlayer] = useState("");

  const fetchPlayers = useCallback(async () => {
    const res = await fetch(`${ENDPOINT}${player}`);
    const newPlayer = await res.json();
    setCurrentPlayer(newPlayer.player);
    setLoading(false);
  }, [setLoading, player]);

  useEffect(() => {
    fetchPlayers();
  }, [fetchPlayers]);

  return { currentPlayer };
};

export default useFetchPlayers;
