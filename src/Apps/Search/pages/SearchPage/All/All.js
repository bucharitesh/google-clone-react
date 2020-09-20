import React from "react";
import "./All.css";

import { useStateValue } from "../../../../../StateProvider";
import { useGoogleSearch } from "../../../../../Hooks";

function All() {
  const [{ term }] = useStateValue();
  const { data } = useGoogleSearch(term);

  return (
    <div className="searchPage__results">
      <p className="searchPage__resultCount">
        About {data?.searchInformation.formattedTotalResults} results (
        {data?.searchInformation.formattedSearchTime} seconds) for {term}
      </p>

      {data?.items.map((item) => (
        <div className="searchPage__result">
          <a className="searchPage__resultLink" href={item.link}>
            {item.pagemap?.cse_image?.length > 0 &&
              item.pagemap?.cse_image[0]?.src && (
                <img
                  className="searchPage__resultImage"
                  src={item.pagemap?.cse_image[0]?.src}
                  alt=""
                />
              )}

            {item.displayLink}
          </a>
          <a className="searchPage__resultTitle" href={item.link}>
            <h2>{item.title}</h2>
          </a>
          <p className="searchPage__resultSnippet">{item.snippet}</p>
        </div>
      ))}
    </div>
  );
}

export default All;
