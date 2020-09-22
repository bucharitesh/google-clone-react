import { useState, useEffect } from "react";
import { GCP_API_KEY } from "../keys";

const useYoutubeSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/youtube/v3/search?q=${term}&part=snippet&maxResults=12&key=${GCP_API_KEY}`
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
