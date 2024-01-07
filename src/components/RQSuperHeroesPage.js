import React from "react";
import { useQuery } from "react-query";
import { getHeros } from "../services/apis";

const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error } = useQuery("superheroes", getHeros);
  console.log("data", data);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      {data?.data?.map((superhero) => (
        <div key={superhero.id}>
          <h2>{superhero.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default RQSuperHeroesPage;
