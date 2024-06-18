"use client";

import GeoSearchBar from "@/components/GeoSearchBar";
import PollutantDropDown from "@/components/PollutantDropdown";
import { DragCloseDrawer } from "@/components/modal/SwipeModal";
import PolutantsSection from "@/sections/PolutantsSection";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import SettingsModal from "@/components/modal/SettingsModal";
import { useState } from "react";
import { Location, GetRelevantMonitors } from "@/components/Location";
const MapSection = dynamic(() => import("@/sections/MapSection"), {
  ssr: false,
});

type PollutantOptions = {
  [key: string]: {
    lowValue: number;
    midValue: number;
    highValue: number;
    standardValue: number;
  };
};

const pollutantOptions = {
  "PM2.5": {
    lowValue: 20,
    midValue: 50,
    highValue: 90,
    standardValue: 20,
  },
  "PM10.0": {
    lowValue: 30,
    midValue: 75,
    highValue: 125,
    standardValue: 30,
  },
  "NO2.0": {
    lowValue: 30,
    midValue: 75,
    highValue: 125,
    standardValue: 30,
  },
  "O3.0": {
    lowValue: 40,
    midValue: 100,
    highValue: 180,
    standardValue: 40,
  },
};

const MainPage = () => {
  const currentLocation = Location();
  const [currentFocus, setCurrentFocus] = useState(currentLocation);
  const currentMonitorInfo = GetRelevantMonitors(currentLocation);

  const [openPollutants, setOpenPollutants] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const [currentPollutant, setCurrentPollutant] = useState("PM2.5");
  return (
    <div className="h-screen flex">
      <GeoSearchBar
        setCurrentFocus={setCurrentFocus}
        currentFocus={currentLocation}
      />
      <MapSection
        currentLocation={currentLocation}
        currentFocus={currentFocus}
      />

      <DragHandle onClick={() => setOpenPollutants(true)} />
      <DragCloseDrawer open={openPollutants} setOpen={setOpenPollutants}>
        <PolutantsSection
          setCurrentPollutant={setCurrentPollutant}
          pollutantOptions={pollutantOptions}
          setOpenModal={setOpenModal}
          setOpenDrawer={setOpenPollutants}
        />
      </DragCloseDrawer>
      <PollutantDropDown />

      <SettingsModal
        open={openModal}
        setOpen={setOpenModal}
        pollutantName={currentPollutant}
        pollutantSpecifics={pollutantOptions[currentPollutant]}
      />
    </div>
  );
};

const DragHandle = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-0 right-0 bottom-0 z-10 flex justify-center bg-neutral-900 p-4"
    >
      <div className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"></div>
    </button>
  );
};

export default MainPage;
