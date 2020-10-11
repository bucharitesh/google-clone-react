import React, { useState } from "react";
import "./Direction.css";

import SideDrawer from "../SideDrawer";

import { actionTypes } from "../../../../reducer";
import { useStateValue } from "../../../../StateProvider";

import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";

function DirectionSearch() {
  const [{}, dispatch] = useStateValue();
  const [m, setM] = useState("");
  const [o, setO] = useState("");
  const [d, setD] = useState("");

  const handleOriginInput = (e) => {
    setO(e.target.value);
  };

  const handleDestinationInput = (e) => {
    setD(e.target.value);
  };

  const DirectionSearch = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_DIRECTION,
      destination: d,
      origin: o,
      mode: m,
    });
  };

  return (
    <div className="Direction__header">
      <SideDrawer className="SideDrawer__s" />
      <div className="Direction__htmlForm">
        <input
          type="text"
          className="Direction__input"
          placeholder="Origin"
          value={o}
          onChange={handleOriginInput}
        />
        <input
          type="text"
          className="Direction__input"
          placeholder="Destination"
          value={d}
          onChange={handleDestinationInput}
        />
        <div className="Direction__radioGroup">
          <input
            className="checkbox-tools"
            type="radio"
            name="tools"
            id="tool-1"
            checked={m === "DRIVING"}
            onChange={() => {
              setM("DRIVING");
            }}
          />
          <label className="htmlFor-checkbox-tools" htmlFor="tool-1">
            <DirectionsCarIcon />
            Driving
          </label>
          <input
            className="checkbox-tools"
            type="radio"
            name="tools"
            id="tool-2"
            checked={m === "BICYCLING"}
            onChange={() => {
              setM("BICYCLING");
            }}
          />
          <label className="htmlFor-checkbox-tools" htmlFor="tool-2">
            <DirectionsBikeIcon />
            Cycling
          </label>
          <input
            className="checkbox-tools"
            type="radio"
            name="tools"
            id="tool-3"
            checked={m === "WALKING"}
            onChange={() => {
              setM("WALKING");
            }}
          />
          <label className="htmlhtmlFor-checkbox-tools" htmlFor="tool-3">
            <DirectionsWalkIcon />
            Walking
          </label>
        </div>
        <div className="SearchButton__Container">
          <button
            className="Direction__SearchButton"
            type="button"
            onClick={DirectionSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default DirectionSearch;
