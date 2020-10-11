import React, { useState, useCallback, useRef } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./Maps.css";

import SearchBar from "./Components/SearchBar";
import GPS from "./Components/GPS/GPS";
import Direction from "./Direction";
import DirectionSearch from "./Components/DirectionSearch";
import mapStyles from "./Components/mapStyles";

import {
  BicyclingLayer,
  TrafficLayer,
  TransitLayer,
  KmlLayer,
} from "@react-google-maps/api";

import { Switch, Route } from "react-router-dom";

const API_KEY = process.env.REACT_APP_GCP_API_KEY;

const libraries = [
  "places",
  "visualization",
  "localContext",
  "geometry",
  "drawing",
];
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

function Maps({ match }) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: API_KEY,
    libraries,
    preventGoogleFontsLoading: false,
  });

  const [markers, setMarkers] = useState([]);

  // eslint-disable-next-line
  const [selected, setSelected] = useState(null);

  const onMapClick = useCallback((e) => {
    setMarkers(() => [
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

  if (loadError)
    return `Error Loading maps please check your internet connection`;
  if (!isLoaded) return `Loading Maps please wait...`;

  return (
    <div>
      <div className="SearchBar">
        <Switch>
          <Route path={`${match.url}/direction`}>
            <DirectionSearch />
          </Route>
          <Route path={`${match.url}`}>
            <SearchBar panTo={panTo} />
          </Route>
        </Switch>
      </div>

      <GPS panTo={panTo} />

      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
        hover
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

        <Switch>
          <Route exact path={`${match.url}/bicycle`}>
            <BicyclingLayer />
          </Route>
          <Route exact path={`${match.url}/traffic`} component={TrafficLayer} />
          <Route exact path={`${match.url}/transit`}>
            <TransitLayer />
          </Route>
          <Route exact path={`${match.url}/kml`}>
            <KmlLayer />
          </Route>
          <Route exact path={`${match.url}/direction`}>
            <Direction />
          </Route>
        </Switch>
      </GoogleMap>
    </div>
  );
}

export default Maps;
