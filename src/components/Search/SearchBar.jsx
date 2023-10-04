import React, { useState, useRef} from 'react'
import './search.css'
import {useNavigate} from 'react-router-dom'
import { FaSearch} from 'react-icons/fa'

const SearchBar = ({ onSearch }) => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        query:''
    }); // State to track input value
    const [showPlaceholder, setShowPlaceholder] = useState(true); // State to track placeholder visibility
    const inputRef = useRef(null);


    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          onSearch(e.target.value); // Trigger the search when Enter is pressed
          if(inputValue.query.trim() === '') {
           
            console.log("failed execution")
            return;
          }
          navigate('/search')
          console.log("Search executed --> ", e.target.value)
          setInputValue({ query: '' });

          // Clear the input field
          inputRef.current.value = '';
    
          // Show the placeholder text
          setShowPlaceholder(true);
        }
      };
      const handleInputChange = (e) => {
        const newValue = e.target.value;
        setInputValue((prevInputValue) => {
            // Use the previous state to update the new state
            
            console.log(newValue); // Log the updated value
            return {
              ...prevInputValue,
              query: newValue,
            };
          });
          setShowPlaceholder(newValue.trim() === '');

        };
    
      const handleInputFocus = () => {
        setShowPlaceholder(false); // Hide the placeholder when the input is focused
      };
    
      const handleInputBlur = () => {
        // Show the placeholder if the input is blurred and no text is entered
        setShowPlaceholder(true);
      };
        return (
          <div className="search-bar">
            <input
              type="text"
              value={inputValue.query}
              placeholder={showPlaceholder ? 'What are you in the mood for today?' : ''}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              ref={inputRef}
              data-testid="search-input-field"
            />
            <button type="button">
              <FaSearch className='search-icon'/> {/* Render the search icon */}
            </button>
          </div>
        );
      };
      
  
export default SearchBar
