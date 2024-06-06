"use client";
import { useState, useEffect } from "react";

const Location = () => {
  const [location, setLocation] = useState({
    latitude: Number(),
    longitude: Number(),
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
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
  console.log(location);
  return location;
};

export default Location;
