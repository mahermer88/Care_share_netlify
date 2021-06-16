import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [notification, setNotification] = useState("");
  const [dataResponse, setDataResponse] = useState([]);

  const getDataResponse = useCallback(async () => {
    setNotification("loading...");
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.err);
      } else {
        setNotification("");
        setDataResponse(data);
      }
    } catch (err) {
      setNotification(err);
      setDataResponse();
      console.log(err);
    }
  }, [url]);

  useEffect(() => {
    getDataResponse();
  }, [url, getDataResponse]);
  return { notification, dataResponse };
};
