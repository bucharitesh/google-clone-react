import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../../../../StateProvider";

import All from "./Tabs/All";

import SearchHeader from "../../components/SearchHeader/SearchHeader";

function SearchPage() {
  const [{ term }] = useStateValue();
  return (
    <div className="searchPage">
      <SearchHeader />
      {term && <All />}
    </div>
  );
}

export default SearchPage;
