import React, { useCallback, useRef } from "react";
import "./SearchBar.css";

import SearchInput from "./SearchInput/SearchInput";
import SideDrawer from "./SideDrawer/SideDrawer";

function Search({ panTo }) {
  return (
    <div className="Search__header">
      <SideDrawer />
      <SearchInput panTo={panTo} />
    </div>
  );
}

export default Search;
