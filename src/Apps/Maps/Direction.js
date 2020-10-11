import React, { useState } from "react";

import { DirectionsService, DirectionsRenderer } from "@react-google-maps/api";

import { useStateValue } from "../../StateProvider";

function Direction() {
  const [response, setResponse] = useState(null);
  const [{ destination, origin, mode }] = useStateValue();

  function directionsCallback(response) {
    if (response !== null) {
      if (response.status === "OK") {
        setResponse(response);
      } else {
        console.log("response: ", response);
      }
    }
  }
  return (
    <>
      {origin && destination && (
        <DirectionsService
          // required
          options={{
            // eslint-disable-line
            destination: destination,
            origin: origin,
            travelMode: mode,
          }}
          // required
          callback={directionsCallback}
          // optional
          onLoad={(directionsService) => {
            console.log(
              "DirectionsService onLoad directionsService: ",
              directionsService
            );
          }}
          // optional
          onUnmount={(directionsService) => {
            console.log(
              "DirectionsService onUnmount directionsService: ",
              directionsService
            );
          }}
        />
      )}
      {response !== null && (
        <DirectionsRenderer
          // required
          options={{
            // eslint-disable-line
            directions: response,
          }}
          // optional
          onLoad={(directionsRenderer) => {
            console.log(
              "DirectionsRenderer onLoad directionsRenderer: ",
              directionsRenderer
            );
          }}
          // optional
          onUnmount={(directionsRenderer) => {
            console.log(
              "DirectionsRenderer onUnmount directionsRenderer: ",
              directionsRenderer
            );
          }}
        />
      )}
    </>
  );
}

export default Direction;
