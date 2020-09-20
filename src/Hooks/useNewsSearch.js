import { useState, useEffect } from "react";

const API_KEY = "32497a859568bbb9962303a165288996";

const useNewsSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(`https://gnews.io/api/v4/search?q=${term}&token=${API_KEY}&lang=en`)
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
