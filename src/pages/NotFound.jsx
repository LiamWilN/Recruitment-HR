import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-7xl font-bold text-gray-800">404</h1>
      <p className="text-2xl text-gray-600 mt-4">Page Not Found</p>
      <a
        href="/home"
        className="mt-6 text-lg text-blue-500 hover:text-blue-700 transition-colors"
      >
        Go to Home
      </a>
    </div>
  );
};

export default NotFound;
