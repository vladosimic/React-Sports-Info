import React from "react";
import useFetchSports from "../Fetch/fetchSports";
import { Link } from "react-router-dom";
import "./css/sport.css";

const Sports = () => {
  const { data } = useFetchSports();

  return (
    <div className="container">
      <div className="grid-4">
        {data.map((item) => {
          return (
            <div
              className="sport-list"
              key={item.idSport}
              style={{ backgroundImage: `url("${item.strSportThumb}")` }}
            >
              <div className="overlay-sports">
                <Link to={`/description/${item.idSport}`}>
                  <h4>{item.strSport}</h4>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sports;
