import React from "react";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import { Box, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <Box
        sx={{
          position: "static",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "none",
          marginBottom: "30px",
        }}
      >
        <FoodBankIcon sx={{ fontSize: 50 }} />
        <Typography variant="h4" fontFamily={"'Princess Sofia', cursive;"}>
          Reshipi
        </Typography>
      </Box>
    </>
  );
};

export default Navbar;
