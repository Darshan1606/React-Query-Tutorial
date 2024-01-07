import { useQuery } from "react-query";
import { getHeros } from "../services/apis";

export const useGetHeros = (onSuccess, onError, config) => {
  return useQuery("super-heroes", getHeros, config);
};
