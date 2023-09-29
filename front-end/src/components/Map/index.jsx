import React, {useEffect} from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import StoreLocator from '.';

const Map = ({selectedPosition}) => {
    // console.log('the lat value from the map page is:', latValue)
    // console.log('is this component being re rendered????????')

    const location = [selectedPosition?.lat, selectedPosition?.lon]

    const position = [51.5072, -0.1276]

    function ResetCenterView({selectedPosition}) {
      const map = useMap()

      useEffect(() => {
        if (selectedPosition) {
          map.setView(
            L.latLng(selectedPosition?.lat, selectedPosition?.lon),
            map.getZoom(),
            {
              animate: true
            }
          )
        }
      }, [selectedPosition])

      return null;
    }


  return (
    <div style={{height: '60vh'}}>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '60vh' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=ZKQ4muTT8XYkrSt11Kw0"
        />
      {selectedPosition && (
        // <Marker position={location}>

        // </Marker>
        <StoreLocator selectedPosition={selectedPosition}/>
      )}
      
        

        <ResetCenterView selectedPosition={selectedPosition}/>
      </MapContainer>
    </div>
  );
};

export default Map;
