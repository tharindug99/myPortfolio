import React from 'react';
import htmlIcon from '../../src/assets/icons/html.png'; // Adjust the path based on your project structure

const Frontend = () => {
  const frameworks = [
    {
      name: 'React',
      icon: 'https://cdn.iconscout.com/icon/free/png-512/react-4-1175110.png',
    },
    {
      name: 'Html',
      icon: htmlIcon,
    },
    {
      name: 'Vue',
      icon: 'https://cdn.iconscout.com/icon/free/png-512/vue-282497.png',
    },
    {
      name: 'Vue',
      icon: 'https://cdn.iconscout.com/icon/free/png-512/vue-282497.png',
    },
    // Add more frameworks as needed
  ];

  return (
    <div className="container mx-auto py-10 items-center">
      <h2 className="text-3xl font-bold mb-6 text-white text-center">Frontend</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-md gap-4 mx-auto">
        {frameworks.map((framework) => (
          <div
            key={framework.name}
            className="bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105 text-center"
          >
            <img
              src={framework.icon}
              alt={`${framework.name} Icon`}
              className="w-12 h-12 mx-auto mb-1"
            />
            {/* <p className="text-center font-semibold">{framework.name}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frontend;
