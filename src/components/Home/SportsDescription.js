import React, { useEffect, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import useFetchSports from "../Fetch/fetchSports";
import Loading from "../Loading/Loading";

const SportsDescription = () => {
  const { id } = useParams();
  const { data } = useFetchSports();
  const [newData, setNewData] = useState();

  const matchData = useCallback(() => {
    const findData = data.find((item) => item.idSport === id);
    setNewData(findData);
  }, [data, id]);

  useEffect(() => {
    matchData();
  }, [matchData]);

  if (newData === undefined) {
    return <Loading />;
  }
  const { strSport, strSportDescription, strFormat } = newData;

  return (
    <div className="container">
      <h1>{strSport}</h1>
      <h5>Format: {strFormat}</h5>
      <p>{strSportDescription}</p>

      <Link className="btn" to="/">
        Back Home
      </Link>
    </div>
  );
};

export default SportsDescription;
