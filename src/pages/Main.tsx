"use client";

import GeoSearchBar from "@/components/GeoSearchBar";
import { DragCloseDrawer } from "@/components/modal/SwipeModal";
import PolutantsSection from "@/sections/PolutantsSection";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { useState } from "react";

const MapSection = dynamic(() => import("@/sections/MapSection"), { ssr: false });

const MainPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen flex">
      <GeoSearchBar />
      <MapSection />
      <DragHandle onClick={() => setOpen(true)} />
      <DragCloseDrawer open={open} setOpen={setOpen}>
        <PolutantsSection />
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
      <div className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"></div>
    </button>
  );
};

export default MainPage;
