import axios from "axios";

const getPlayers = async (url = 'http://localhost:3100/players') => {
  const result = await axios.get(url);
  return result.data;
};

export default getPlayers;
