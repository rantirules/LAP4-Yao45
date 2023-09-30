// SearchMap.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';

import './search-map.css';

const SearchMap = ({
  handleInput,
  inputText,
  handleSubmit,
  listPlace,
  selectedPosition,
  setSelectedPosition,
  isSearchClicked,
  SetIsSearchClicked,
  handleClearInput,
}) => {
  return (
    <div id='search-map'>
      <form action='Search' id='search-bar-map'>
        <input
          type='text'
          placeholder='Enter your address'
          value={inputText}
          onChange={handleInput}
        />
        {isSearchClicked ? (
          <button id='search-btn' onClick={handleClearInput}>
            <FaTimes className='search-icon' />
          </button>
        ) : (
          <button id='search-btn' onClick={handleSubmit}>
            <FaSearch className='search-icon' />
          </button>
        )}
      </form>
      <div className='place-list'>
        {listPlace.map((place) => {
          return (
            <Link to='#' key={place?.osm_id} onClick={() => setSelectedPosition(place)}>
              <div className='place-item'>
                <span className='marker-icon'>
                  <FaMapMarkerAlt />
                </span>
                <span className='place-name'>{place?.display_name}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SearchMap;


