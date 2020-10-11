import React from "react";
import "./GPS.css";

import { ReactComponent as GoogleMapsIcon } from "../../../../Assets/Images/GoogleMapsIcon2.svg";

function GPS({ panTo }) {
  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      <GoogleMapsIcon height="25px" width="25px" />
    </button>
  );
}

export default GPS;
