"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { PollutantLayer } from "./layer/PollutantLayer";

const MainMap = () => {
  return (
    <div className="h-screen flex">
      <MapContainer className="w-full h-full" center={[51.4416, 5.4697]} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <PollutantLayer
          displayPM1={true}
          displayPM25={true}
          displayPM10={true}
          displayNO2={true}
        />
      </MapContainer>
    </div>
  );
};

export default MainMap;
