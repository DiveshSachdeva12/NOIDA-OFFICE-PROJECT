import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Import Leaflet
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

// Default center coordinates for New Delhi
const defaultCenter = [28.6139, 77.2090];

const MapPage = () => {
  return (
    <div style={{ height: '500px' }}>
      <MapContainer center={defaultCenter} zoom={13} style={{ width: '100%', height: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={defaultCenter}>
          <Popup>Welcome to New Delhi!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapPage;
