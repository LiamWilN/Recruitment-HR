import React from "react";
import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const errorcode = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-7xl font-bold text-gray-800">404</h1>
      <p className="text-2xl text-gray-600 mt-4">Page Not Found</p>
      <p className="text-2xl text-gray-600 mt-4">{errorcode}</p>
      <a className="mt-6 text-lg text-blue-500 hover:text-blue-700 transition-colors">
        Go to Home
      </a>
    </div>
  );
};

export default NotFound;
