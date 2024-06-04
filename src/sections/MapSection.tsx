"use client";

import { PollutantLayer } from "@/components/layer/PollutantLayer";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

const MapSection = () => {
  return (
    <MapContainer
      className="z-0 w-full h-full"
      center={[51.4416, 5.4697]}
      zoom={12}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <PollutantLayer />
    </MapContainer>
  );
};

export default MapSection;
