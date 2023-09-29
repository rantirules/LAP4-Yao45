import React, { useState } from 'react'
import { Map, SearchMap } from '../../components'
import axios from 'axios'

const MapPage = () => {
  const [inputText, setInputText] = useState('')
  const [listPlace, setListPlace] = useState([])
  const [selectedPosition, setSelectedPosition] = useState(null)
  
  const handleInput = (e) => {
    setInputText(e.target.value)
  }
  
  const NOMINATIM_BASE_URL = 'https://nominatim.openstreetmap.org/search?'

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const params = {
      q: inputText,
      format: 'json',
      addressdetails: 1,
      polygon_geojson: 0,
    };
  
    try {
      const response = await axios.get(NOMINATIM_BASE_URL, {
        params: params,
      });
  
      console.log(response.data);
      setListPlace(response.data)
    } catch (error) {
      console.error('Error:', error);
    }
  }; 

  // console.log('selectedPosition after selection, in MapPage.jsx', selectedPosition)

  return (
    <div id='map-page-cont'>
      <div id='map-cont'>
        <Map selectedPosition={selectedPosition}/>
      </div>
      <div id='search-cont'>
        {/* <SearchMap 
          handleInput={handleInput} 
          inputText={inputText} 
          handleSubmit={handleSubmit} 
          listPlace={listPlace} 
          selectedPosition={selectedPosition}
          setSelectedPosition={setSelectedPosition}
          /> */}
      </div>
    </div>
  )
}

export default MapPage

