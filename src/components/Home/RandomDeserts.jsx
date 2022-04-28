import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import getRandomDeserts from "../../API/getRandomDeserts";
import CardWrapper from "../CardWrapper";
import "@splidejs/splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";

const RandomDeserts = () => {
  const [deserts, setDeserts] = useState([]);

  useEffect(() => {
    getRandomDeserts(setDeserts);
  }, []);

  return (
    <>
      <Typography variant="h6">Deserts</Typography>
      <Splide
        options={{
          perPage: 3,
          drag: "free",
          pagination: false,
        }}
      >
        {deserts.map((desert) => (
          <SplideSlide key={desert.id}>
            <Link to={`/recipe/${desert.id}`}>
              <CardWrapper recipe={desert} />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
};

export default RandomDeserts;
