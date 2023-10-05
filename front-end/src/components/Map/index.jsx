import React, {useEffect} from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import StoreLocator from '../StoreLocator';
import { Icon } from 'leaflet'


const Map = ({selectedPosition}) => {
    // console.log('the lat value from the map page is:', latValue)
    // console.log('is this component being re rendered????????')

    const location = [selectedPosition?.lat, selectedPosition?.lon]

    const position = [51.5072, -0.1276]

    function ResetCenterView({ selectedPosition }) {
        const map = useMap();
      
        useEffect(() => {
          if (selectedPosition && selectedPosition.lat && selectedPosition.lon) {
            map.setView(
              [selectedPosition.lat, selectedPosition.lon],
              map.getZoom(),
              {
                animate: true,
              }
            );
          }
        }, [selectedPosition, map]);
      
        return null;
      }
    
      const customIcon = new Icon({
        iconUrl: 'home1.png', 
        iconSize: [45, 45], 
      });


  return (
    <div>
      <MapContainer center={position} zoom={15} scrollWheelZoom={true} style={{ height: '94vh' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=ZKQ4muTT8XYkrSt11Kw0"
        />
      {selectedPosition && (
        <>
        <Marker position={location} icon={customIcon}/>
        <StoreLocator selectedPosition={selectedPosition}/>
        </>
      )}
      
        

        <ResetCenterView selectedPosition={selectedPosition}/>
      </MapContainer>
    </div>
  );
};

export default Map;
