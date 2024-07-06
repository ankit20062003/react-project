// SortDropdown.js
import React from 'react';

const SortDropdown = ({ sortBy, onSortChange }) => {
  const handleSortChange = (e) => {
    onSortChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="sort">Sort By</label>
      <select id="sort" value={sortBy} onChange={handleSortChange}>
      <option value="popularity">popularity</option>
        <option value="relevancy">relevancy</option>
        <option value="publishedAt">publishedAt</option>
      </select>
    </div>
  );
};

export default SortDropdown;

