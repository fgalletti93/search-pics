import React, { useState } from "react";

export const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  return (
    <div className="ui segment">
      <form onSubmit={handleFormSubmit} className="ui form">
        <div className="field">
          <label>Image Search</label>
          <input
            placeholder="type here!"
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
