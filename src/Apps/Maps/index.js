import React, { useState, useCallback, useRef } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { GCP_API_KEY } from "../../keys";
import "./Maps.css";

import SearchBar from "./Components/SearchBar/SearchBar";
import mapStyles from "./mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 43.6532,
  lng: -79.3832,
};

function Maps() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GCP_API_KEY,
    libraries,
  });

  const [markers, setMarkers] = useState([]);

  // eslint-disable-next-line
  const [selected, setSelected] = useState(null);

  const onMapClick = useCallback((e) => {
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  const mapRef = useRef();

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(15);
    console.log(lat, lng);
    setMarkers(() => [
      {
        lat: lat,
        lng: lng,
      },
    ]);
  }, []);

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <div className="SearchBar">
        <SearchBar panTo={panTo} />
      </div>

      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map((marker) => (
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
          />
        ))}
      </GoogleMap>
    </div>
  );
}

export default Maps;
