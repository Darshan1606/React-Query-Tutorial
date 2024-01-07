import axios from "axios";

export const getHeros = () => {
  return axios.get("http://localhost:4000/superheroes");
};
