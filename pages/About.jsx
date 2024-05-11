import React, { useState } from 'react';
import WorkExperience from '../components/header/WorkExperience';
import VolunteerExperience from '../components/header/VolunteerExperience';
import Footer from '../components/footer';

const About = () => {
  const [activeTab, setActiveTab] = useState('work');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div id="about" 
           className="m-0 flex flex-col sm:flex-row">
        {/* Render tabs in the right-hand corner */}
        <div className="flex-none bg-transparent px-4 py-2  
        w-full sm:w-1/4 h-auto sm:h-full flex justify-center items-center">
          <div className="block-tabs flex flex-col">
            <div
              className={`tabs text-center py-3 cursor-pointer rounded-lg ${
                activeTab === 'work'
                  ? 'text-black bg-white rounded-lg px-4 py-2'
                  : 'text-blue-50 hover:bg-white hover:text-black rounded-lg'
              }`}
              onClick={() => handleTabClick('work')}
            >
              Work Experience
            </div>
            <div
              className={`tabs text-center py-3 cursor-pointer rounded-lg ${
                activeTab === 'volunteer'
                  ? 'text-black bg-white rounded-lg px-4 py-2'
                  : 'text-blue-50 hover:bg-white hover:text-black'
              }`}
              onClick={() => handleTabClick('volunteer')}
            >
              Volunteering
            </div>
          </div>
        </div>

        {/* Render corresponding content in the left */}
        <div className="flex-grow">
          {/* Corresponding content for each tab */}
          {activeTab === 'work' && (
            <div>
              <WorkExperience />
            </div>
          )}
          {activeTab === 'volunteer' && (
            <div>
              <VolunteerExperience />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default About;
