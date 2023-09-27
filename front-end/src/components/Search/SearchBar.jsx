import React, { useState} from 'react'
import './search.css'
import { FaSearch} from 'react-icons/fa'

const SearchBar = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState(''); // State to track input value
  const [showPlaceholder, setShowPlaceholder] = useState(true); // State to track placeholder visibility

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          onSearch(e.target.value); // Trigger the search when Enter is pressed
        }
      };
      const handleInputChange = (e) => {
        setInputValue(e.target.value);
      };
    
      const handleInputFocus = () => {
        setShowPlaceholder(false); // Hide the placeholder when the input is focused
      };
    
      const handleInputBlur = () => {
        // Show the placeholder if the input is blurred and no text is entered
        setShowPlaceholder(inputValue === '');
      };
        return (
          <div className="search-bar">
            <input
              type="text"
              placeholder={showPlaceholder ? 'What are you in the mood for today?' : ''}
              onChange={(e) => onSearch(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            <button type="button">
              <FaSearch className='search-icon'/> {/* Render the search icon */}
            </button>
          </div>
        );
      };
      
  
export default SearchBar
