import React from 'react';

const CircularProgressBar = ({ percentage }) => {
  return (
    <div className="relative w-20 h-20">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-white rounded-full"></div>
          <div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full"
            style={{ clipPath: `polygon(0 0, 100% 0, 100% ${100 - percentage}%, 0 100%)` }}
          ></div>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 bg-white rounded-full shadow-md ring-4 ring-cyan-500 animate-pulse"></div>
      </div>
    </div>
  );
};

export default CircularProgressBar;
