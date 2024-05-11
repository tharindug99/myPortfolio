import React from 'react';
import express from '../../src/assets/icons/express.png'

const BackendFrameworks = () => {
  const frameworks = [
    {
      name: 'Node.js',
      icon: 'https://cdn.iconscout.com/icon/free/png-512/node-js-1174925.png',
    },
    {
      name: 'Node.js',
      icon: express,
    },
    
    // Add more backend frameworks as needed
  ];

  return (
    <div className="container mx-auto py-10 items-center">
      <h2 className="text-3xl font-bold mb-6 text-white text-center">Back-end</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-md gap-4 mx-auto justify-center">
  {frameworks.map((framework) => (
    <div
      key={framework.name}
      className="bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105 text-center"
    >
      <img
        src={framework.icon}
        alt={`${framework.name} Icon`}
        className="w-12 h-12 mx-auto "
      />
      {/* <p className="text-center font-semibold">{framework.name}</p> */}
    </div>
  ))}
</div>

    </div>
  );
};

export default BackendFrameworks;
