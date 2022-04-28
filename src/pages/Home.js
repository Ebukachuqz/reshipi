import { motion } from "framer-motion";
import React from "react";
import RandomDeserts from "../components/Home/RandomDeserts";
import RandomRecipes from "../components/Home/RandomRecipes";

const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <RandomDeserts />
      <RandomRecipes />
    </motion.div>
  );
};

export default Home;
