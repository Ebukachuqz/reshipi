import React from "react";
import Pages from "./pages/Pages";
import { Container } from "@mui/material";
import Categories from "./components/Home/Categories";
import Search from "./components/Home/Search";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <Container>
      <Link
        style={{
          textDecoration: "none",
          color: "black",
        }}
        to={"/"}
      >
        <Navbar />
      </Link>
      <Search />
      <Categories />
      <Pages />
    </Container>
  );
};

export default App;
