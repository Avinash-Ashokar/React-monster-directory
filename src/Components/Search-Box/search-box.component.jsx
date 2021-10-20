import React from "react";

export const SearchBox = ({ handleChange, placeHolder }) => (
  <div>
    <input type="search" placeholder={placeHolder} onChange={handleChange} />
  </div>
);
