import React from 'react'
import { Link } from 'react-router-dom'

const SearchMap = ({handleInput, inputText, handleSubmit, listPlace, selectedPosition, setSelectedPosition}) => {

  return (
    <div>
        <form action="Search">
            <input type="text"
                placeholder='Enter your postcode'
                value={inputText}
                onChange={handleInput}
            />
            <button onClick={handleSubmit}>Submit</button>
        </form>
        {listPlace.map((place) => {
            return (
                <div> 
                    <ul>
                        <Link to='#' key={place?.osm_id} onClick={() => {setSelectedPosition(place)}}>
                            <li>{place?.display_name}</li>
                        </Link>
                        
                    </ul>
                </div>
            )
        })}
    </div>
  )
}

export default SearchMap
