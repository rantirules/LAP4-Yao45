import React, { useState } from 'react';
import { Map } from '@googlemaps/react-wrapper';




function MapHighlighter() {

    
  const [location, setLocation] = useState('');
  const [map, setMap] = useState(null);
  const [geocoder, setGeocoder] = useState(null);

  // Initialize the map
  const initMap = () => {
    const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 0, lng: 0 }, // Default center
      zoom: 2, // Default zoom level
    });

    setMap(mapInstance);
    setGeocoder(new window.google.maps.Geocoder());
  };

  const searchLocation = () => {
    geocoder.geocode({ address: location }, (results, status) => {
      if (status === 'OK' && results[0]) {
        // Center the map on the geocoded location
        map.setCenter(results[0].geometry.location);
        map.setZoom(10); // Adjust the zoom level as needed

        // Highlight the region (e.g., by drawing a polygon)
        const region = results[0].geometry.viewport;
        const regionBounds = new window.google.maps.Polygon({
          paths: region,
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35,
        });
        regionBounds.setMap(map);
      } else {
        alert('Location not found');
      }
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={searchLocation}>Search</button>
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
    </div>
  );
}

export default MapHighlighter;
