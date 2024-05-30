"use client";

import { DragCloseDrawer } from "@/components/modal/SwipeModal";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { PollutantLayer } from "./layer/PollutantLayer";

const MainMap = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen flex">
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
      <DragHandle onClick={() => setOpen(true)} />
      <DragCloseDrawer open={open} setOpen={setOpen}>
        modal content
      </DragCloseDrawer>
    </div>
  );
};

const DragHandle = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-0 right-0 bottom-0 z-10 flex justify-center bg-neutral-900 p-4"
    >
      <button className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"></button>
    </button>
  );
};

export default MainMap;
