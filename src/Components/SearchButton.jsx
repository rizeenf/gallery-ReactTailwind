import React from "react";

const SearchButton = ({ changeTerm }) => {
  return (
    <div className="container my-10 flex justify-center">
      <div className=" text-purple-500 p-2 w-full font-bold text-4xl container mx-auto">
        Gallery Splash
      </div>
      <input
        onChange={changeTerm}
        className="shadow-lg rounded border p-2 w-full mobile:my-5"
        placeholder="Search images .."
      />
    </div>
  );
};

export default SearchButton;
