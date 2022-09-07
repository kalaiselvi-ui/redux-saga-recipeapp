import axios from "axios";

const YOUR_APP_ID = "1b58cbe6";
const YOUR_APP_KEY = "0e8375e9b074b0142a7a971c82a307ca";

const getRecipes = async (query) => {
  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
  return await axios.get(url);
};

export default getRecipes;
