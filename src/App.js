import React from "react";
import Pages from "./pages/Pages";
import { Container } from "@mui/material";
import Categories from "./components/Home/Categories";
import Search from "./components/Home/Search";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Container>
      <Navbar />
      <Search />
      <Categories />
      <Pages />
    </Container>
  );
};

export default App;
