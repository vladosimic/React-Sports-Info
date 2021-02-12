import React from "react";
import usefetchCountries from "../Fetch/fetchCountries";
import useFetchLeageusInCountry from "../Fetch/fetchLeageusInCountry";
import useFetchSports from "../Fetch/fetchSports";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../ContextAPI/Context";
import Loading from "../Loading/Loading";
import "./css/League.css";

const LeaguesForm = () => {
  const { country } = usefetchCountries();
  const {
    setSportType,
    setCountryType,
    setLeague,
    loading,
  } = useGlobalContext();
  const { selected } = useFetchLeageusInCountry();
  const { data } = useFetchSports();

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="league-form container">
      <div className="form-card">
        <form>
          <label htmlFor="countries">Choose a Country</label>
          <br />
          <select
            defaultValue="Select value"
            name="countries"
            onChange={(e) => setCountryType(e.target.value)}
          >
            <option value="Select value">Select Value</option>
            {country
              .map((item, idx) => {
                return (
                  <option key={idx} value={item.name_en}>
                    {item.name_en}
                  </option>
                );
              })
              .sort((a, b) => a.props.value > b.props.value)}
          </select>
          <br />
          <label htmlFor="sports">Choose a Sport</label>
          <br />
          <select
            defaultValue="Select value"
            name="sports"
            onChange={(e) => setSportType(e.target.value)}
          >
            <option value="Select value">Select Value</option>
            {data.map((sport) => {
              return (
                <option key={sport.idSport} value={sport.strSport}>
                  {sport.strSport}
                </option>
              );
            })}
          </select>
        </form>

        <div className="form-results">
          {selected !== null ? (
            selected.map((item) => {
              return (
                <Link
                  key={item.idLeague}
                  to={`/league-details/${item.idLeague}`}
                  onClick={() => setLeague(item.strLeague)}
                >
                  <h4>{item.strLeague}</h4>
                </Link>
              );
            })
          ) : (
            <h3 style={{ color: "red" }}>No Match !!!</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeaguesForm;
