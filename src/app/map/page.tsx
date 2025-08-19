"use client";

import dynamic from "next/dynamic";

// dynamically import your Leaflet component
const MapView = dynamic(() => import("@/app/map/component/map"), {
  ssr: false, // ⛔ prevents "window is not defined"
});

const MapPage = () => {
  return (
    <div className="h-screen w-screen">
      <MapView />
    </div>
  );
};

export default MapPage;
