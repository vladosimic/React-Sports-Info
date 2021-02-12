import React from "react";
import useFetchSports from "../Fetch/fetchSports";
import { Link } from "react-router-dom";
import "./css/sport.css";
import { useGlobalContext } from "../ContextAPI/Context";
import Loading from "../Loading/Loading";

const Home = () => {
  const { data } = useFetchSports();
  const { loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="container">
      <h1>Sports Description</h1>
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

export default Home;
