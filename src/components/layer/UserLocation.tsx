import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { Marker, useMap, useMapEvents } from "react-leaflet";

const UserLocation = () => {
  const map = useMap();

  const [userLocation, setUserLocation] = useState<[number, number] | null>(
    null
  );
  const [centeredOnUser, setCenteredOnUser] = useState<boolean>(false);

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition((position) => {
      console.log(position.coords);
      const { latitude, longitude } = position.coords;
      setUserLocation([latitude, longitude]);
    });

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);
  useMapEvents({
    moveend: () => {
      const center = map.getCenter();
      if (
        userLocation &&
        (center.lat !== userLocation[0] || center.lng !== userLocation[1])
      ) {
        setCenteredOnUser(false);
      } else {
        setCenteredOnUser(true);
      }
    },
  });

  const handleZoomToUser = () => {
    if (userLocation) {
      map.setView(userLocation);
    }
  };

  return (
    <div>
      {!centeredOnUser && (
        <button
          onClick={handleZoomToUser}
          className="absolute top-4 right-4 z-40  p-2 rounded shadow"
        >
          Zoom to My Location
        </button>
      )}
      {userLocation && <Marker position={userLocation} />}
    </div>
  );
};

export default UserLocation;
