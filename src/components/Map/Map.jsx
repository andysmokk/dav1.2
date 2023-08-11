import React, { useState, useEffect } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useContextShops } from "../../hooks/useContextShops";

export const Map = () => {
  const [map, setMap] = useState(null);

  const { marker, onMapClick } = useContextShops();

  const onMapLoad = (map) => {
    setMap(map);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        if (map) {
          map.panTo(userPosition);
        }
      },
      (error) => {
        console.error("Error getting user location:", error);
      }
    );
  }, [map]);

  return (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "400px" }}
      zoom={15}
      onLoad={onMapLoad}
      center={marker ? marker : undefined}
      onClick={onMapClick}
    >
      {marker && <Marker position={{ lat: marker.lat, lng: marker.lng }} />}
    </GoogleMap>
  );
};
