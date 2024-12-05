import React, { useState } from 'react';
import '../App.css'

const SearchBox = ({ onSearch }) => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(search, category);
  };

  return (
    <form onSubmit={handleSubmit} className="search-box">
      <input
        type="text"
        placeholder="Search blogs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Technology">Technology</option>
        <option value="Lifestyle">Lifestyle</option>
        <option value="Education">Education</option>
      </select>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;
