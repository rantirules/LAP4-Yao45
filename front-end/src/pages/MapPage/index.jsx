import React, { useState } from 'react';
import { Map, SearchMap, Modal } from '../../components';
import axios from 'axios';
import './map-page.css';

const MapPage = () => {
  const [inputText, setInputText] = useState('');
  const [listPlace, setListPlace] = useState([]);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [isSearchClicked, SetIsSearchClicked] = useState(false);

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const handleClearInput = (e) => {
    e.preventDefault()
    SetIsSearchClicked(false);
    setInputText('');
    setListPlace([])
    setSelectedPosition(null)
  };

  const NOMINATIM_BASE_URL = 'https://nominatim.openstreetmap.org/search?';

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
      setListPlace(response.data);
      // Set isSearchClicked to true if listPlace is not empty, otherwise false
      SetIsSearchClicked(response.data.length > 0);
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const [isModalVisible, setIsModalVisible] = useState(true);

  // Function to open the modal
  const openModal = () => {
    setIsModalVisible(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div id='map-page-cont'>

<Modal show={isModalVisible} onClose={closeModal}>
        <div>
          <h3>Discover Local Ingredient Stores</h3> <br/>
          <p>Input your address or postcode, and watch as we unveil the nearest grocery stores, so you can work your culinary wonders.</p>
        </div>
      </Modal>

      <div id='map-cont'>
        <Map selectedPosition={selectedPosition} />
      </div>
      <div id='search-cont'>
        <SearchMap
          handleInput={handleInput}
          inputText={inputText}
          handleSubmit={handleSubmit}
          listPlace={listPlace}
          selectedPosition={selectedPosition}
          setSelectedPosition={setSelectedPosition}
          isSearchClicked={isSearchClicked}
          SetIsSearchClicked={SetIsSearchClicked}
          handleClearInput={handleClearInput}
        />
      </div>
    </div>
  );
};

export default MapPage;

