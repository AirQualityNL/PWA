"use client";

import { PollutantLayer } from "@/components/layer/PollutantLayer";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

const MapSection = ({ currentLocation }: any) => {
  const currentPos = [currentLocation.Latitude, currentLocation.Longitude];

  return (
    <MapContainer className="z-0 w-full h-full" center={currentPos} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <PollutantLayer />
      <Marker
        position={[currentLocation.Latitude, currentLocation.Longitude]}
      ></Marker>
    </MapContainer>
  );
};

export default MapSection;
