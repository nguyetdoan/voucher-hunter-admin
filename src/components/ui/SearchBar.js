import React from "react";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <i className="bi bi-search-heart"></i>
      <input
        type="text"
        className="form-control"
        placeholder="Search for vouchers..."
      />
    </div>
  );
};

export default SearchBar;
