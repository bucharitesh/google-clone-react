import React from "react";
import "./SearchBar.css";

import SearchInput from "./SearchInput";
import SideDrawer from "../SideDrawer";

function Search({ panTo }) {
  return (
    <div className="Search__header">
      <SideDrawer />
      <SearchInput panTo={panTo} />
    </div>
  );
}

export default Search;
