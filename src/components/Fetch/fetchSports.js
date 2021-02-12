import { useState, useEffect, useCallback } from "react";
import { useGlobalContext } from "../ContextAPI/Context";

const sportsURL = "https://www.thesportsdb.com/api/v1/json/1/all_sports.php";

const useFetchSports = () => {
  const { setLoading } = useGlobalContext();
  const [data, setData] = useState([]);

  const fetchAllsports = useCallback(async () => {
    const res = await fetch(sportsURL);
    const newData = await res.json();
    setData(newData.sports);
    setLoading(false);
  }, [setLoading]);

  useEffect(() => {
    fetchAllsports();
  }, [fetchAllsports]);
  return { data };
};

export default useFetchSports;
