import React from "react";
import { useGetHeros } from "../hooks/useGetHeros";

const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    // for display toast notification
    console.log("Data fetched successfully", data);
  };

  const onError = (error) => {
    // for display toast notification
    console.log("Error in fetching data", error);
  };
  const config = {
    //   cacheTime: 10000, //# 5 min default
    staleTime: 9000, //# 0s default
    onSuccess: onSuccess,
    onError: onError,
    // refetchOnMount: true, //# true default
    // refetchOnWindowFocus: true, //# true default
    // refetchInterval: false, //# false default
    // refetchIntervalInBackground: false, //# false, even if browser is not in focus

    //# here in select we can use filter data
    select: (data) => {
      return data.data?.map((hero) => hero.name);
    },
  };
  const { isLoading, data, isError, error } = useGetHeros(
    onSuccess,
    onError,
    config
  );

  console.log("data", data);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      {/* {data?.data?.map((superhero) => (
        <div key={superhero.id}>
          <h2>{superhero.name}</h2>
        </div>
      ))} */}
      {data?.map((superhero, index) => {
        return <div key={index}>{superhero}</div>;
      })}
    </div>
  );
};

export default RQSuperHeroesPage;
