import axios from "axios";

const savePlayer = async player => {
  return axios("http://localhost:3100/players", {
    method: "POST",
    data: player
  });
};

export default savePlayer;
