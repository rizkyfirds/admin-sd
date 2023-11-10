// SearchBar.js
import React from "react";

const SearchBar = ({ onSearch }) => {
    return (
        <div>
            <span className="mr-4">
                Search
            </span>
            <input
                className="bg-[#D9D9D9] px-1"
                type="text"
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
