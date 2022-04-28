import axios from "axios";

const getRandomDeserts = async (setDeserts) => {
  // To prevent api calls every time the app rerenders check localstorage for
  // result/data stored from last api request
  const checkLocalStorage = localStorage.getItem("randomDeserts");

  try {
    if (checkLocalStorage) {
      return setDeserts(JSON.parse(checkLocalStorage));
    } else {
      let deserts = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&number=10&tags=dessert`
      );

      // saving results to local storage to reduce and minimize number of API requests :)
      localStorage.setItem(
        "randomDeserts",
        JSON.stringify(deserts.data.recipes)
      );
      return setDeserts(deserts.data.recipes);
    }
  } catch (error) {
    console.log(error);
  }
};

export default getRandomDeserts;
