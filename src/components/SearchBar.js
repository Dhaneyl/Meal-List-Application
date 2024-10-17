import React from 'react';

function SearchBar({ onSearch, onSort, sortAlphabetically }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search meals..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <button onClick={onSort}>
        {sortAlphabetically ? 'Unsort' : 'Sort A-Z'}
      </button>
    </div>
  );
}

export default SearchBar;