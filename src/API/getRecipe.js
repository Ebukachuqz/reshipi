import axios from "axios";

const getRecipe = async (param, setRecipe) => {
  try {
    let results = await axios.get(
      `https://api.spoonacular.com/recipes/${param}/information?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
    );
    return setRecipe(results.data);
  } catch (error) {
    console.log(error);
  }
};

export default getRecipe;
