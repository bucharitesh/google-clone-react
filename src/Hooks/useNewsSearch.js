import { useState, useEffect } from "react";
import { NEWS_SEARCH_API_KEY } from "../keys";

const useNewsSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://gnews.io/api/v4/search?q=${term}&token=${NEWS_SEARCH_API_KEY}&lang=en`
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

export default useNewsSearch;
