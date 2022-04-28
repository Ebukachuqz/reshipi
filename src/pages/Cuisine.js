import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import getCuisine from "../API/getCuisine";
import CardWrapper from "../components/CardWrapper";

const Cuisine = () => {
  const param = useParams();
  const [cuisines, setCuisines] = useState([]);

  useEffect(() => {
    getCuisine(param.type, setCuisines);
  }, [param.type]);
  return (
    <>
      <Grid container gap={2} justifyContent={"center"}>
        {cuisines.map((cuisine) => (
          <Grid item key={cuisine.id}>
            <Link to={`/recipe/${cuisine.id}`}>
              <CardWrapper recipe={cuisine} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Cuisine;
