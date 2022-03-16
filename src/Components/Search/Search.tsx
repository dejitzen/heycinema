import React, { useState } from "react";
import "./Search.scss";
import { FaSearch } from "react-icons/fa";

export default function Search({ handleSearch }: any) {
  const [search, setSearch] = useState<string>("");
  const handleEnterPress = (event: any) => {
    if (event.key === "Enter") {
      handleSearch(search);
    }
  };

  return (
    <div className="search-wrapper">
      <div className="search-input">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={handleEnterPress}
        />
      </div>
      <div className="search-icon" onClick={() => handleSearch(search)}>
        <FaSearch />
      </div>
    </div>
  );
}
