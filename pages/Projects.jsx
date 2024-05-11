import React from 'react';
import { useState } from 'react';
import FrontEndProjects from '../components/Projects/FrontEndProjects';
import BackEndProjects from '../components/Projects/BackEndProjects';
import FullStackProjects from '../components/Projects/FullStackProjects';
import UI_UXProjects from '../components/Projects/UI_UXProjects';
import MobileAppProjects from '../components/Projects/MobileAppProjects';
import Footer from '../components/footer'


export default function Projects() {
  const [activeTab, setActiveTab] = useState('uiux');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div 
           className="bg-slate-600 bg-opacity-100 w-full h-20">
        <div className="block-tabs grid md:grid-cols-5 sm:grid-cols-3 ">
          <div
            className={`tabs flex flex-col items-center justify-center px-5 pt-7 pb-7 cursor-pointer ${
              activeTab === 'uiux'
                ? 'text-black bg-white'
                : 'text-blue-50 hover:bg-white hover:text-black'
            }`}
            onClick={() => handleTabClick('uiux')}
          >
            UI/UX projects
          </div>
          <div
            className={`tabs flex flex-col items-center justify-center px-5 pt-7 pb-7 cursor-pointer ${
              activeTab === 'frontend'
                ? 'text-black bg-white'
                : 'text-blue-50 hover:bg-white hover:text-black'
            }`}
            onClick={() => handleTabClick('frontend')}
          >
            FrontEnd Projects
          </div>
          <div
            className={`tabs flex flex-col items-center justify-center px-5 pt-7 pb-7 cursor-pointer ${
              activeTab === 'backend'
                ? 'text-black bg-white'
                : 'text-blue-50 hover:bg-white hover:text-black'
            }`}
            onClick={() => handleTabClick('backend')}
          >
            BackEnd Projects
          </div>
          <div
            className={`tabs flex flex-col items-center justify-center px-5 pt-7 pb-7 cursor-pointer ${
              activeTab === 'mobile'
                ? 'text-black bg-white'
                : 'text-blue-50 hover:bg-white hover:text-black'
            }`}
            onClick={() => handleTabClick('mobile')}
          >
            Mobile App Projects
          </div>
          <div
            className={`tabs flex flex-col items-center justify-center px-5 pt-7 pb-7 cursor-pointer ${
              activeTab === 'fullstack'
                ? 'text-black bg-white'
                : 'text-blue-50 hover:bg-white hover:text-black'
            }`}
            onClick={() => handleTabClick('fullstack')}
          >
            FullStack Projects
          </div>
        </div>
      </div>

      {/* Corresponding content for each tab */}
      {activeTab === 'frontend' && (
        <div className="bg-white">
          <FrontEndProjects />
        </div>
      )}
      {activeTab === 'backend' && (
        <div>
          <BackEndProjects />
        </div>
      )}
      {activeTab === 'uiux' && (
        <div className="bg-white">
          <UI_UXProjects />
        </div>
      )}
      {activeTab === 'mobile' && (
        <div>
          <MobileAppProjects />
        </div>
      )}
      {activeTab === 'fullstack' && (
        <div>
          <FullStackProjects />
        </div>
      )}


      
    </>
  );
}
