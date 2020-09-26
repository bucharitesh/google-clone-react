import React, { useState } from "react";
import "./Direction.css";

import SideDrawer from "../SideDrawer";

// import { ReactComponent as BikeIcon } from "./Bike.svg";
// import { ReactComponent as CarIcon } from "./Car.svg";

import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";

function DirectionSearch() {
  const [mode, setMode] = useState("Driving");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const handleOriginInput = (e) => {
    setOrigin(e.target.origin);
  };

  const handleDestinationInput = (e) => {
    setDestination(e.target.destination);
  };

  return (
    <div className="Direction__header">
      <SideDrawer className="SideDrawer__s" />
      <div className="Direction__htmlForm">
        <input
          type="text"
          className="Direction__input"
          placeholder="Origin"
          value={origin}
          onChange={handleOriginInput}
        />
        <input
          type="text"
          className="Direction__input"
          placeholder="Destination"
          value={destination}
          onChange={handleDestinationInput}
        />
        <div className="Direction__radioGroup">
          <input
            className="checkbox-tools"
            type="radio"
            name="tools"
            id="tool-1"
            checked={mode === "Driving"}
            onChange={() => {
              setMode("Driving");
            }}
          />
          <label className="htmlFor-checkbox-tools" htmlFor="tool-1">
            {/* <CarIcon height="20px" width="20px" /> */}
            <DirectionsCarIcon />
            Driving
          </label>
          <input
            className="checkbox-tools"
            type="radio"
            name="tools"
            id="tool-2"
            checked={mode === "Cycling"}
            onChange={() => {
              setMode("Cycling");
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
            checked={mode === "Walking"}
            // onChange={setMode("Walking")}
            onChange={() => {
              setMode("Walking");
            }}
          />
          <label className="htmlhtmlFor-checkbox-tools" htmlFor="tool-3">
            <DirectionsWalkIcon />
            Walking
          </label>
        </div>
        <button type="button">Search</button>
      </div>
    </div>
  );
}

export default DirectionSearch;
