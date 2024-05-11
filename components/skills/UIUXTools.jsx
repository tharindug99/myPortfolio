import React from 'react';
import figmaIcon from '../../src/assets/icons/figma.png'

const UIUXTools = () => {
  const tools = [
    {
      name: 'Figma',
      icon: figmaIcon,
    },
    
    // Add more UI/UX tools as needed
  ];

  return (
    <div className="container mx-auto py-10 items-center">
      <h2 className="text-3xl font-bold mb-6 text-white text-center">UI/UX Tools</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-md gap-4 mx-auto">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105 text-center"
          >
            <img
              src={tool.icon}
              alt={`${tool.name} Icon`}
              className="w-12 h-12 mx-auto"
            />
            {/* <p className="text-center font-semibold">{tool.name}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UIUXTools;
