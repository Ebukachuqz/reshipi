import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = styled("form")(`
  position: relative;
  margin: 20px auto;
  width: 60%;
  height: 35px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  `);

const InputBar = styled("input")(`
  width: 100%;
  height: 100%;
  border: none;
  top: 0;
  left: 0;
  outline: none;
  font-size: 16px;
  border-radius: 15px;
  padding: 0 1.8rem;
  color: white;
  background: linear-gradient(35deg, #494949, #313131);
  transition: all 0.3s ease;
  
  &:focus{
    border: 1px solid #eb480d;
    box-shadow: 1px 4px 15px 1px rgba(0,0,0,0.75);
    -webkit-box-shadow: 1px 4px 15px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 4px 15px 1px rgba(0,0,0,0.75);
  }
`);

const Searchicon = styled(SearchIcon)(`
    position: absolute;
    left: 0;
    margin: 0 5px;
    color: white;
`);

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const submitHandle = (e) => {
    e.preventDefault();
    setSearchTerm("");
    navigate(`/search/${searchTerm}`);
  };
  return (
    <>
      <SearchBar onSubmit={submitHandle}>
        <InputBar
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Searchicon />
      </SearchBar>
    </>
  );
};

export default Search;
