import { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_GCP_API_KEY;

const useYoutubeSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/youtube/v3/search?q=${term}&part=snippet&maxResults=12&key=${API_KEY}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData();
  }, [term]);

  return { data };
};

export default useYoutubeSearch;
