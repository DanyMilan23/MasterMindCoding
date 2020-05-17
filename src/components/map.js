import React from "react";
import { withGoogleMap, GoogleMap, withScriptjs } from "react-google-maps";

const {
  MarkerWithLabel
} = require("react-google-maps/lib/components/addons/MarkerWithLabel");

const Markers = props => {
  const labelSize = { width: 220 };
  const labelPadding = 8;

  return (
    <GoogleMap defaultZoom={props.zoom} defaultCenter={props.center}>
      {props.places.map(place => {
        return (
          <MarkerWithLabel
            labelStyle={{
              textAlign: "center",
              width: labelSize.width + "px",
              backgroundColor: "#ffff",
              fontSize: "14px",
              padding: labelPadding + "px"
            }}
            labelClass="map-label"
            labelAnchor={{ x: labelSize.width / 2 + labelPadding, y: 80 }}
            key={place.id}
            position={{ lat: place.lat, lng: place.lng }}
          >
            <span>{place.name}</span>
          </MarkerWithLabel>
        );
      })}
    </GoogleMap>
  );
};

export default withScriptjs(withGoogleMap(Markers));
