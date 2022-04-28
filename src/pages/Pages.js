import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Cuisine from "./Cuisine";
import Home from "./Home";
import Recipe from "./Recipe";
import SearchResults from "./SearchResults";

const Pages = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cuisine/:type" element={<Cuisine />}></Route>
        <Route path="/search/:term" element={<SearchResults />}></Route>
        <Route path="/recipe/:id" element={<Recipe />}></Route>
      </Routes>
    </AnimatePresence>
  );
};

export default Pages;
