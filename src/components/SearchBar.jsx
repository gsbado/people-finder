import { useState } from "react";

function SearchBar({ onSearch }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    onSearch(value);
  };

  return (
    <input
      className="search-input"
      type="text"
      placeholder="Search users..."
      value={text}
      onChange={handleChange}
    />
  );
}

export default SearchBar;