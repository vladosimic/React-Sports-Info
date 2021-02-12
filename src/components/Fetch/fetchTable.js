import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../ContextAPI/Context";

const ENDPOINT = "https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=";

const useFetchTable = () => {
  const { setLoading } = useGlobalContext();
  const [table, setTable] = useState();
  const { idLeague } = useParams();

  const fetchTable = useCallback(async () => {
    const res = await fetch(`${ENDPOINT}${idLeague}&s=2020-2021`);
    const newTable = await res.json();
    setTable(newTable.table);
    setLoading(false);
  }, [idLeague, setLoading]);

  useEffect(() => {
    fetchTable();
  }, [fetchTable]);

  return { table };
};

export default useFetchTable;
