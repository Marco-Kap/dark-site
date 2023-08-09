import { useRef, useEffect } from "react";
import L from "leaflet";

const Map = () => {
  const locationMap = useRef(null);
  
  useEffect(() => {
    const myMap = L.(locationMap.current).setView([0,0], 13);
    // rest of your map code here
  }, []);

  return <div className="map-container" ref={locationMap} />
};

export default Map;