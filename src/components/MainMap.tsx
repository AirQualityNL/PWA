"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import { useState } from "react";
import { OptionsButton } from "./OptionsButton";
import "leaflet/dist/leaflet.css";
import { PollutantLayer } from "./layer/PollutantLayer";
import { RadioButton } from "./RadioButton";

const MainMap = () => {
  const [displayPollutants, setDisplayPollutants] = useState<boolean>(false);
  const [displayPM1] = useState<boolean>(true);
  const [displayPM25] = useState<boolean>(true);
  const [displayPM10] = useState<boolean>(true);
  const [displayNO2] = useState<boolean>(true);
  const [selectedPollutant, setSelectedPollutant] = useState<string>("PM1");

  return (
    <div className="h-screen flex">
      <div className="w-1/5 bg-gray-100 p-3">
        <h2 className="text-lg font-semibold mb-4">Options</h2>
        <OptionsButton
          id="display pollutants"
          display_name="display pollutants"
          get={displayPollutants}
          set={setDisplayPollutants}
        />

        {displayPollutants && (
          <>
            <h3 className="text-sm font-semibold mt-4">Pollutants</h3>
            <RadioButton
              id="display PM1"
              display_name="display PM1"
              value="PM1"
              selectedValue={selectedPollutant}
              onChange={setSelectedPollutant}
            />
            <RadioButton
              id="display PM2.5"
              display_name="display PM2.5"
              value="PM2.5"
              selectedValue={selectedPollutant}
              onChange={setSelectedPollutant}
            />
            <RadioButton
              id="display PM10"
              display_name="display PM10"
              value="PM10"
              selectedValue={selectedPollutant}
              onChange={setSelectedPollutant}
            />
            <RadioButton
              id="display NO2"
              display_name="display NO2"
              value="NO2"
              selectedValue={selectedPollutant}
              onChange={setSelectedPollutant}
            />
          </>
        )}
      </div>
      <div className="w-4/5">
        <MapContainer className="h-full" center={[51.4416, 5.4697]} zoom={12}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {displayPollutants && (
            <PollutantLayer
              displayPM1={selectedPollutant === "PM1" ? displayPM1 : false}
              displayPM25={selectedPollutant === "PM2.5" ? displayPM25 : false}
              displayPM10={selectedPollutant === "PM10" ? displayPM10 : false}
              displayNO2={selectedPollutant === "NO2" ? displayNO2 : false}
            />
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default MainMap;
