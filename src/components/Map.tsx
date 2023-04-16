"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

export default function Map({}) {
  const mapContainer = useRef<any>(null);
  const map = useRef<mapboxgl.Map | any>(null);

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: [15.4542, 18.7322], // center map on Chad
      zoom: 1.8,
    });
  }, []);

  return (
    <main>
      <div className="map-container" ref={mapContainer} />
    </main>
  );
}
