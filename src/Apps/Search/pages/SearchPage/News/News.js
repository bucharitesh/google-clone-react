import React from "react";
import "./News.css";

import { useStateValue } from "../../../../../StateProvider";
import { useNewsSearch } from "../../../../../Hooks";

function News() {
  const [{ term }] = useStateValue();
  const { data } = useNewsSearch(term);

  return (
    <div className="NewsPage__results">
      <p className="NewsPage__resultCount">
        About {data?.totalArticles} results for <strong>{term}</strong>
      </p>

      {data?.articles.map((article) => (
        <div className="NewsPage__result">
          <a className="searchPage__resultLink" href={article.source.url}>
            <img
              className="searchPage__resultImage"
              src={article.image}
              alt=""
            />
            {article.source.name}
          </a>
          <div className="NewsPage__body">
            <a className="NewsPage__resultLink" href={article.url}>
              <img className="NewsPage__image" src={article.image} alt="" />
            </a>
            <div className="NewsPageContent">
              <a href={article.url}>
                <h4>{article.title}</h4>
              </a>
              <p>{article.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default News;
