import React from "react";
import "./Images.css";

import { useStateValue } from "../../../../../StateProvider";
import { useGoogleSearch } from "../../../../../Hooks";

function Images() {
  const [{ term }] = useStateValue();
  const { data } = useGoogleSearch(term);

  return (
    <div className="Image__resultsContainer">
      {data?.items.map((item) => (
        <div className="Images__Container">
          {item.pagemap?.cse_image?.length > 0 &&
            item.pagemap?.cse_image[0]?.src && (
              <img
                className="Images__results"
                src={item.pagemap?.cse_image[0]?.src}
                alt=""
              />
            )}
        </div>
      ))}
    </div>
  );
}

export default Images;
