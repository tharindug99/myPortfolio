import React from 'react';
import htmlIcon from '../../src/assets/icons/html.png'; 

const Technologies = () => {
  const frameworks = [
    {
      name: 'React',
      icon: 'https://cdn.iconscout.com/icon/free/png-512/react-4-1175110.png',
    },
    {
      name: 'Html',
      icon: 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg',
    },
    {
      name: 'CSS',
      icon: 'https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg',
    },
    {
      name: 'Tailwind CSS',
      icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
    },
    {
      name: 'MongoDB',
      icon: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg',
    },
    {
      name: 'POSTGRE SQL',
      icon: 'https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg',
    },
    {
      name: 'Node.js',
      icon: 'https://cdn.iconscout.com/icon/free/png-512/node-js-1174925.png',
    },
    {
      name: 'Express.js',
      icon: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg',
    },
    {
      name: 'PostMan API',
      icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
    },
    {
      name: 'Java',
      icon: 'https://www.vectorlogo.zone/logos/java/java-icon.svg',
    },
    {
      name: 'Python',
      icon: 'https://www.vectorlogo.zone/logos/python/python-icon.svg',
    },
    {
      name: 'php',
      icon: 'https://www.vectorlogo.zone/logos/php/php-icon.svg',
    },
    {
      name: 'git',
      icon: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
    },
    {
      name: 'figma',
      icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg',
    },
    {
      name: 'trello',
      icon: 'https://www.vectorlogo.zone/logos/trello/trello-icon.svg',
    },
    {
      name: 'AI',
      icon: 'https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg',
    },
    {
      name: 'Linux',
      icon: 'https://www.vectorlogo.zone/logos/linux/linux-icon.svg',
    },
    {
      name: 'GitHub',
      icon: 'https://www.vectorlogo.zone/logos/github/github-tile.svg',
    },
  ];

  return (
    <div className="container py-10 px-20 items-center">
      <h2 className="text-3xl font-bold lg:mb-20 text-white text-center">Tools and Technologies I use..</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-8">
        {frameworks.map((framework) => (
          <div
            key={framework.name}
            className="bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105 text-center lg:w-[140px]"
          >
            <img
              src={framework.icon}
              alt={`${framework.name} Icon`}
              className="lg:w-20 lg:h-20 
                         md:w-20 md:h-20
                         sm:w-18 sm:h-18    mx-auto mb-1"
            />
            {/* <p className="text-center font-semibold">{framework.name}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
