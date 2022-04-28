import axios from "axios";

const getCuisine = async (param, setCuisines) => {
  const checkLocalStorage = localStorage.getItem(param);

  try {
    if (checkLocalStorage) {
      return setCuisines(JSON.parse(checkLocalStorage));
    } else {
      let cuisines = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&cuisine=${param}`
      );

      // saving results to local storage to reduce and minimize number of API requests :)
      localStorage.setItem(`${param}`, JSON.stringify(cuisines.data.results));
      return setCuisines(cuisines.data.results);
    }
  } catch (error) {
    console.log(error);
  }
};

export default getCuisine;
