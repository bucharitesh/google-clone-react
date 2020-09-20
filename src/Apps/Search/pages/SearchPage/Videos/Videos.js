import React from "react";
import "./Videos.css";

import { useStateValue } from "../../../../../StateProvider";
import { useYoutubeSearch } from "../../../../../Hooks";

function Videos() {
  const [{ term }] = useStateValue();
  const { data } = useYoutubeSearch(term);

  return (
    <div className="VideoPage__results">
      <p className="VideoPage__resultCount">
        About {data?.pageInfo.totalResults} results for {term}
      </p>

      {data?.items.map((item) => (
        <div className="VideoPage__result">
          <img
            className="videoPage__thumbnail"
            src={item.snippet.thumbnails.default.url}
            alt=""
          />
          <div className="videoPage_Body">
            <h4>{item.snippet.title}</h4>
            <a
              className="video__channelTitle"
              href="href=https://bucharitesh.in"
            >
              <h2>{item.snippet.channelTitle}</h2>
            </a>
            <p className="VideoPage__description">{item.snippet.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

{
  /* <a className="VideoPage__resultLink" href="https://bucharitesh.in">
            <img
              className="videoPage__thumbnail"
              src={item.snippet.thumbnails.default.url}
              alt=""
            />

            {item.snippet.title}
          </a>
          <a className="" href="href=https://bucharitesh.in">
            <h2>{item.snippet.channelTitle}</h2>
          </a>
          <p className="VideoPage__resultSnippet">{item.snippet.description}</p> */
}

export default Videos;
