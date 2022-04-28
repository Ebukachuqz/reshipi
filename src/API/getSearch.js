import axios from "axios";

const getSearch = async (param, setSearchResults) => {
  try {
    let results = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&query=${param}`
    );
    return setSearchResults(results.data.results);
  } catch (error) {
    console.log(error);
  }
};

export default getSearch;
