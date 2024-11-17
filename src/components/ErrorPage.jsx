import React from "react";

const ErrorPage = ({ message }) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-xl mb-3">404</h1>
      <h1 className="text-3xl font-bold text-center">{message || "No Data"}</h1>
    </div>
  );
};

export default ErrorPage;
