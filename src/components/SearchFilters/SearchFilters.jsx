import React, {useState} from 'react'
import './filters.css';
const SearchFilters = () => {
    const [showDropdown, setShowDropdown] = useState(null); // State to track active filter
    const [checkedFilters, setCheckedFilters] = useState([]);

    const handleCheckboxChange = (event,filterName) => {
            if (event.target.checked) {
                // If the checkbox is checked, add the filter to the checkedFilters state
                setCheckedFilters([...checkedFilters, filterName]);
                console.log("checked", filterName)
              } else {
                // If the checkbox is unchecked, remove the filter from the checkedFilters state
                setCheckedFilters(checkedFilters.filter((filter) => filter !== filterName));
                console.log("unchecked", filterName)
              }
            }
            const displayCheckedFilters = () => {
                if (checkedFilters.length === 0) {
                  return ''; // Return an empty string if no filters are checked
                }
                // Join the checked filters using a comma and space
                return `showing results for: ${checkedFilters.join(', ')}`,
                console.log(checkedFilters);
                
              
              };
        
  return (
    <>
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
                <input type="checkbox" onChange={(event) => handleCheckboxChange(event, 'British')}
                    checked={checkedFilters.includes('British')}/> <p className='check-item'>British</p>
              </label>
              <label>
                <input type="checkbox"  onChange={(event) => handleCheckboxChange(event, 'Scandinavian')}
                    checked={checkedFilters.includes('Scandinavian')} /> <p className='check-item'>Scandinavian</p>
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
                <input type="checkbox"  onChange={(event) => handleCheckboxChange(event, '5 mins')}
                    checked={checkedFilters.includes('5 mins')}/> <p className='check-item'>5 mins</p>
              </label>
              <label>
                <input type="checkbox"  onChange={(event) => handleCheckboxChange(event, '10 mins')}
                    checked={checkedFilters.includes('10 mins')}/> <p className='check-item'>10 mins</p>
              </label>
              </div>
         )}
      </li>
      <li onMouseEnter={() => setShowDropdown('People')}
      onMouseLeave={()=> setShowDropdown(null)}>
        <label className='scaffold'>
            <p className='check-item'>No. of ppl</p>
            </label>
            {showDropdown === 'People' && (
            <div className="filter-menu">
              {/* Options for Region */}
              <label>
                <input type="checkbox"  onChange={(event) => handleCheckboxChange(event, 'Myself')}
                    checked={checkedFilters.includes('Myself')}/> <p className='check-item'>Myself</p>
              </label>
              <label>
                <input className="checkbox-pull"type="checkbox" onChange={(event) => handleCheckboxChange(event, '2 ppl')}
                    checked={checkedFilters.includes('2 ppl')} /> <p className='check-item'>2 ppl</p>
              </label>
              </div>
         )}
      </li>

    </ul>   
    
  </div>
  <div className='display-search-filters'>
  <p className='checked-filters'> Displaying search results for  {checkedFilters.join(', ')} </p>
  </div>
  </>
);
};


export default SearchFilters
