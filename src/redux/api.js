import axios from "axios";

YOUR_APP_ID = "1b58cbe6";
YOUR_APP_KEY = "0e8375e9b074b0142a7a971c82a307ca";

export const getRecipes = async (query) => {
  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
  await axios.get(url);
};
