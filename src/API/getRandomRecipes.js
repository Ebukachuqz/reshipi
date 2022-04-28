import axios from "axios";

const getRandomRecipes = async (setRecipes) => {
  // To prevent api calls every time the app rerenders check localstorage for
  // result/data stored from last api request
  const checkLocalStorage = localStorage.getItem("randomRecipes");

  try {
    if (checkLocalStorage) {
      return setRecipes(JSON.parse(checkLocalStorage));
    } else {
      let recipes = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&number=10`
      );

      // saving results to local storage to reduce and minimize number of API requests :)
      localStorage.setItem(
        "randomRecipes",
        JSON.stringify(recipes.data.recipes)
      );
      return setRecipes(recipes.data.recipes);
    }
  } catch (error) {
    console.log(error);
  }
};

export default getRandomRecipes;
