import React, { useState } from 'react';
import WorkExperience from '../components/header/WorkExperience';
import VolunteerExperience from '../components/header/VolunteerExperience';
import Footer from '../components/footer'


const About = () => {
  const [activeTab, setActiveTab] = useState('work');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
    <div className="m-0">
      
      <div className="bg-slate-600 bg-opacity-100 w-full h-20">
        <div className="block-tabs grid md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2">
          <div
            className={`tabs flex flex-col items-center justify-center px-5 pt-7 pb-7 mb-0 cursor-pointer ${
              activeTab === 'work'
                ? 'text-black bg-white'
                : 'text-blue-50 hover:bg-white hover:text-black'
            }`}
            onClick={() => handleTabClick('work')}
          >
            Work Experience
          </div>
          <div
            className={`tabs flex flex-col items-center justify-center px-5 pt-7 pb-7 cursor-pointer ${
              activeTab === 'volunteer'
                ? 'text-black bg-white'
                : 'text-blue-50 hover:bg-white hover:text-black'
            }`}
            onClick={() => handleTabClick('volunteer')}
          >
            Volunteering
          </div>
        </div>
      </div>

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

    
    </>
  );
};

export default About;
