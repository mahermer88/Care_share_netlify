import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { FaMapMarkerAlt } from "react-icons/fa";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 52.359728,
    longitude: 5.207607,
    width: "35rem",
    height: "25rem",
    zoom: 12,
  });
  return (
    <div className="map-info">
      <div className="map">
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          onViewportChange={(viewport) => {
            setViewport(viewport);
          }}
        >
          <Marker key="1" latitude={52.369863} longitude={5.214334}>
            <div>
              <FaMapMarkerAlt fill={"var(--clr-yellow-3"} />
            </div>
          </Marker>
        </ReactMapGL>
      </div>
    </div>
  );
};

export default Map;
