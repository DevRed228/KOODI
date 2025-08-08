import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { School } from '../types';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapViewProps {
  schools: School[];
  selectedSchool: School | null;
  onSchoolSelect: (school: School) => void;
}

// Component to handle map updates
const MapController: React.FC<{ schools: School[] }> = ({ schools }) => {
  const map = useMap();
  
  useEffect(() => {
    if (schools.length > 0) {
      const group = new L.featureGroup(
        schools.map(school => L.marker(school.coordinates))
      );
      map.fitBounds(group.getBounds().pad(0.1));
    }
  }, [schools, map]);

  return null;
};

export const MapView: React.FC<MapViewProps> = ({ schools, selectedSchool, onSchoolSelect }) => {
  return (
    <div className="h-full w-full bg-gray-100 rounded-lg overflow-hidden">
      <MapContainer
        center={[12.0, -2.0]} // Center of West Africa
        zoom={5}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapController schools={schools} />
        {schools.map((school) => (
          <Marker
            key={school.id}
            position={school.coordinates}
            eventHandlers={{
              click: () => onSchoolSelect(school)
            }}
          >
            <Popup>
              <div className="max-w-xs">
                <img
                  src={school.images[0]}
                  alt={school.name}
                  className="w-full h-24 object-cover rounded mb-2"
                />
                <h3 className="font-semibold text-sm mb-1">{school.name}</h3>
                <p className="text-xs text-gray-600 mb-2">{school.description}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-orange-600 font-medium">{school.domain}</span>
                  <span className="flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1">{school.rating}</span>
                  </span>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};