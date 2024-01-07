import React from "react";
import { useGetHeros } from "../hooks/useGetHeros";

const GetDataOnButtonClick = () => {
  const onSuccess = (data) => {
    // for display toast notification
    console.log("Data fetched successfully", data);
  };

  const onError = (error) => {
    // for display toast notification
    console.log("Error in fetching data", error);
  };

  const { isLoading, isFetching, data, isError, error, refetch } = useGetHeros(
    onSuccess,
    onError,
    {
      enabled: false,
    }
  );

  console.log("data", data);
  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      <button type="button" onClick={refetch}>
        Fetch Data{" "}
      </button>
      {data?.data?.map((superhero) => (
        <div key={superhero.id}>
          <h2>{superhero.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default GetDataOnButtonClick;
