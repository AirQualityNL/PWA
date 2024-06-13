"use client";

import { PollutantLayer } from "@/components/layer/PollutantLayer";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";

const SetViewOnFocus = ({ currentPos }: { currentPos: [number, number] }) => {
  const map = useMap();

  useEffect(() => {
    if (currentPos) {
      map.setView(currentPos, map.getZoom());
    }
  }, [currentPos, map]);

  return null;
};

type MapSectionProps = {
  currentLocation: {
    Latitude: number;
    Longitude: number;
  };
  currentFocus: {
    Latitude: number;
    Longitude: number;
  };
};

const MapSection = ({ currentLocation, currentFocus }: MapSectionProps) => {
  const currentPos = currentFocus ? currentLocation : currentFocus;

  return (
    <MapContainer
      className="z-0 w-full h-full"
      center={[currentPos.Latitude, currentPos.Longitude]}
      zoom={12}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <PollutantLayer />
      <Marker position={[currentPos.Latitude, currentPos.Longitude]}></Marker>
      <SetViewOnFocus
        currentPos={[currentPos.Latitude, currentPos.Longitude]}
      />
    </MapContainer>
  );
};

export default MapSection;
