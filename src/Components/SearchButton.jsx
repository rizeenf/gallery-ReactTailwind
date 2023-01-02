import React from "react";

const SearchButton = ({ changeTerm }) => {
  return (
    <div className="container my-10 flex justify-center">
      <input
        onChange={changeTerm}
        className="shadow-lg rounded border p-2"
        placeholder="Search images .."
      />
    </div>
  );
};

export default SearchButton;
