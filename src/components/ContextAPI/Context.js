import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const Context = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [sportType, setSportType] = useState("");
  const [countryType, setCountryType] = useState("");
  const [teamId, setTeamId] = useState();
  const [league, setLeague] = useState("");
  const [player, setPlayer] = useState("Nicklas Bendtner");

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        sportType,
        countryType,
        setSportType,
        setCountryType,
        teamId,
        setTeamId,
        league,
        setLeague,
        player,
        setPlayer,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { Context, AppContext };
