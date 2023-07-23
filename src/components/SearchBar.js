import React from 'react'
import { data } from '../constants/albums-constant';

const SearchBar = ({ searchQuery, handleSearch }) => {
  return (
    <div className="search-box">
    <input
    className='outline-none p-1'
      type="text"
      placeholder={data.searchBarPlaceholder}
      value={searchQuery}
      onChange={(e) => handleSearch(e.target.value)}
    />
  </div>
  )
}

export default SearchBar;
