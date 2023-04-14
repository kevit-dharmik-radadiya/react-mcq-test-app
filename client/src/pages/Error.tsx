import React from "react";

const Error = () => {
  let title = "An error occurred!";
  let message = "Something went wrong!";

  return (
    <div>
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  );
};

export default Error;
