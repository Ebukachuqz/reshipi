import { Grid, styled, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import CakeIcon from "@mui/icons-material/Cake";

const Link = styled(NavLink)(`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 20px;
  padding: 0 5px;
  background: linear-gradient(14deg, rgba(0,0,0,1) 0%, rgba(60,19,7,1) 90%);
  transition: 1000ms all;

  &.active {
    background: linear-gradient(189deg, rgba(255,211,0,1) 0%, rgba(233,58,11,1) 100%);  }
`);

const Categories = () => {
  return (
    <>
      <Grid container gap={3} justifyContent={"center"} alignItems={"center"}>
        <Grid item>
          <Link to={"/cuisine/italian"}>
            <LocalPizzaIcon fontSize="small" />
            <Typography variant="caption">Italian</Typography>
          </Link>
        </Grid>

        <Grid item>
          <Link to={"/cuisine/american"}>
            <FastfoodIcon fontSize="small" />
            <Typography variant="caption">American</Typography>
          </Link>
        </Grid>

        <Grid item>
          <Link to={"/cuisine/thai"}>
            <SoupKitchenIcon fontSize="small" />
            <Typography variant="caption">Thai</Typography>
          </Link>
        </Grid>

        <Grid item>
          <Link to={"/cuisine/japanese"}>
            <CakeIcon fontSize="small" />
            <Typography variant="caption">Japanese</Typography>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Categories;
