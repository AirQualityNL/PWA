"use client";
import { useState, useEffect } from "react";
import pollutants from "../data/pollutants.json";

interface MonitorInfoProps {
  Station: string;
  Latitude: number;
  Longitude: number;
  PM1: number;
  "PM2.5": number;
  PM10: number;
  NO2: number;
}

interface CoordinateProps {
  Latitude: number;
  Longitude: number;
}
export const Location = () => {
  const [location, setLocation] = useState<CoordinateProps>({
    Latitude: 0,
    Longitude: 0,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            Latitude: position.coords.latitude,
            Longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);
  return location;
};

function calculateDistance(
  userLocation: CoordinateProps,
  targetLocation: CoordinateProps
) {
  return Math.sqrt(
    (userLocation.Latitude - targetLocation.Latitude) ** 2 +
      (userLocation.Longitude - targetLocation.Longitude) ** 2
  );
}
export const GetRelevantMonitors = (userLocation: CoordinateProps) => {
  // Algorithm should be updated later to return more then 1 monitor
  // so we can give a more accurate predictions of the user location's substance concentraiton values

  let curDist = 100;
  let curMonitor: MonitorInfoProps = {
    Station: "None",
    Latitude: 0,
    Longitude: 0,
    PM1: 0,
    "PM2.5": 0,
    PM10: 0,
    NO2: 0,
  };
  let curLocation = null;
  pollutants.forEach((element) => {
    const dist = calculateDistance(userLocation, {
      Longitude: element.Longitude,
      Latitude: element.Latitude,
    });

    if (dist < curDist) {
      curDist = dist;
      curMonitor = {
        Station: element.Station,
        Latitude: element.Latitude,
        Longitude: element.Longitude,
        PM1: element["PM1 Average"],
        "PM2.5": element["PM2.5 Average"],
        PM10: element["PM10 Average"],
        NO2: element["NO2 Average"],
      };
      curLocation = [element.Longitude, element.Latitude];
    }
  });

  return curMonitor;
};
