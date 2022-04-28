import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import getSearch from "../API/getSearch";
import CardWrapper from "../components/CardWrapper";

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  const param = useParams();

  useEffect(() => {
    getSearch(param.term, setSearchResults);
  }, [param.term]);
  return (
    <>
      <Typography variant="h5">Search Results for "{param.term}"</Typography>
      <Grid container gap={1} justifyContent={"center"}>
        {searchResults.map((recipe) => (
          <Grid item key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <CardWrapper recipe={recipe} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SearchResults;
