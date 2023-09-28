import React, {useState} from 'react'
import './filters.css';
const SearchFilters = () => {
    const [showDropdown, setShowDropdown] = useState(null); // State to track active filter

    const filterDropdowns = {
        'Region': [
          'British ',
          'Scandinavian',
          'Mediterranean',
          'South Asian'
          // Add more options as needed for Region
        ],
        'Cooking Time': [
          '5-10 mins',
          '~20 mins',
          '+30 mins'
          // Add more options as needed for Cooking Time
        ],
        'No. of ppl': [
            'Myself',
            '2',
            '3-5',
            '7+'
        ]
      };
  return (
    <div className="filter-bar">
    <ul>
      <li onMouseEnter={() => setShowDropdown('Region')}
      onMouseLeave={()=> setShowDropdown(null)}>
        <label className='scaffold'>
          Region
        </label>
        {showDropdown === 'Region' && (
            <div className="filter-menu">
              {/* Options for Region */}
              <label>
                <input type="checkbox" /> British
              </label>
              <label>
                <input type="checkbox" /> Scandinavian
              </label>
              {/* Add more options as needed for Region */}
            </div>
          )}
      </li>
      <li onMouseEnter={() => setShowDropdown('Cooking')}
      onMouseLeave={()=> setShowDropdown(null)}>
        <label className='scaffold'>
         Cooking Time 
         </label>
         {showDropdown === 'Cooking' && (
            <div className="filter-menu">
              {/* Options for Region */}
              <label>
                <input type="checkbox" /> 5 mins
              </label>
              <label>
                <input type="checkbox" /> 10 mins
              </label>
              </div>
         )}
      </li>
      <li onMouseEnter={() => setShowDropdown('People')}
      onMouseLeave={()=> setShowDropdown(null)}>
        <label className='scaffold'>
            No. of ppl
            </label>
            {showDropdown === 'People' && (
            <div className="filter-menu">
              {/* Options for Region */}
              <label>
                <input type="checkbox" /> Myself
              </label>
              <label>
                <input type="checkbox" /> 2 ppl
              </label>
              </div>
         )}
      </li>

      {/* Add more filters as needed */}
    </ul>
  </div>
);
};

export default SearchFilters
