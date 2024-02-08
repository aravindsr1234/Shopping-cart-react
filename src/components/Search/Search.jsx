import React from "react";
import "./search.css";
import { setSearchValue, setCurrentPage } from "../../features/signupUserSlice/signupUserSlice";
import { useDispatch } from "react-redux";

const SearchInput = () => {

  const dispatch = useDispatch();

  const search = (e) => {
    console.log(e.target.value);
    dispatch(setSearchValue(e.target.value));
    dispatch(setCurrentPage(1));
  };

  return <input type="search" className="input-search" placeholder="search" onChange={(e) => search(e)}/>;
};

export default SearchInput;
