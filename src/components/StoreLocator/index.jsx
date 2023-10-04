import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet'



const StoreLocator = ({ selectedPosition }) => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    // console.log('selectedPosition from storeLocator page:', selectedPosition)

    const latitude = selectedPosition?.lat || 51.4967;
    const longitude = selectedPosition?.lon || -0.1352;


    const overpassQuery = `
      [out:json];
      (
  node["shop"="supermarket"](around:3000,${latitude},${longitude});
  node["shop"="grocery"](around:3000,${latitude},${longitude});
  node["shop"="convenience"](around:3000,${latitude},${longitude});
  node["shop"="international"](around:3000,${latitude},${longitude});
  node["shop"="asian"](around:3000,${latitude},${longitude});
  node["shop"="african"](around:3000,${latitude},${longitude});
  node["shop"="indian"](around:3000,${latitude},${longitude});


  way["shop"="supermarket"](around:3000,${latitude},${longitude});
  way["shop"="grocery"](around:3000,${latitude},${longitude});
  way["shop"="convenience"](around:3000,${latitude},${longitude});
  way["shop"="international"](around:3000,${latitude},${longitude});
  way["shop"="asian"](around:3000,${latitude},${longitude});
  way["shop"="african"](around:3000,${latitude},${longitude});


  relation["shop"="supermarket"](around:3000,${latitude},${longitude});
  relation["shop"="grocery"](around:3000,${latitude},${longitude});
  relation["shop"="convenience"](around:3000,${latitude},${longitude});
  relation["shop"="international"](around:3000,${latitude},${longitude});
  relation["shop"="asian"](around:3000,${latitude},${longitude});
  relation["shop"="african"](around:3000,${latitude},${longitude});

  nwr["shop"="supermarket"](around:3000,${latitude},${longitude});
  nwr["shop"="grocery"](around:3000,${latitude},${longitude});
  nwr["shop"="convenience"](around:3000,${latitude},${longitude});
  nwr["shop"="international"](around:3000,${latitude},${longitude});
  nwr["shop"="asian"](around:3000,${latitude},${longitude});
  nwr["shop"="african"](around:3000,${latitude},${longitude});
  nwr["shop"="japanese"](around:3000,${latitude},${longitude});
  nwr["shop"="chinese"](around:3000,${latitude},${longitude});
  nwr["shop"="indian"](around:3000,${latitude},${longitude});
  nwr["shop"="italian"](around:3000,${latitude},${longitude});
  nwr["shop"="jamaican"](around:3000,${latitude},${longitude});
  nwr["shop"="thai"](around:3000,${latitude},${longitude});
  nwr["shop"="authentic"](around:3000,${latitude},${longitude});


      );
      out center;
    `;

    axios
      .get(`https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`)
      .then((response) => {
        setStores(response.data.elements);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching store data:', error);
        setLoading(false);
      });
  }, [selectedPosition]);


  const customIcon = new Icon({
    iconUrl: 'location.png', 
    iconSize: [45, 45], 
  });

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        stores.map((store) => {

          if (typeof store.lat === 'number' && typeof store.lon === 'number') {
            return (
              <Marker key={store.id} position={[store.lat, store.lon]} icon={customIcon} >
                <Popup>
                  <h3>{store.tags.name}</h3>
                </Popup>
              </Marker>
            );
          }
          return null;
        })
      )}
    </>
  );
};

export default StoreLocator;
