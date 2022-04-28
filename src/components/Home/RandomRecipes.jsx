import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import getRandomRecipes from "../../API/getRandomRecipes";
import CardWrapper from "../CardWrapper";
import "@splidejs/splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";

const RandomRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRandomRecipes(setRecipes);
  }, []);

  return (
    <>
      <Typography variant="h6">Random Recipes</Typography>
      <Splide
        options={{
          perPage: 4,
          gap: "5rem",
          drag: "free",
          pagination: false,
        }}
      >
        {recipes.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <CardWrapper recipe={recipe} />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
};

export default RandomRecipes;
