import React from "react";
import { Route, Routes } from "react-router-dom";
import Cuisine from "./Cuisine";
import Home from "./Home";
import Recipe from "./Recipe";
import SearchResults from "./SearchResults";

const Pages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cuisine/:type" element={<Cuisine />}></Route>
        <Route path="/search/:term" element={<SearchResults />}></Route>
        <Route path="/recipe/:id" element={<Recipe />}></Route>
      </Routes>
    </>
  );
};

export default Pages;
