import React from 'react'
import img1 from '../images/ProjectIcons/CyclePlus.jpg';
import img2 from '../images/ProjectIcons/Tag.png';
import img3 from '../images/ProjectIcons/serpentsID.png';

export default function UI_UXProjects() {
  const CyclePlus = img1;

  // Tag--------------------------------------------
  const Tag = img2;
  const handleSeeMoretag = () => {
    const url = 'https://www.figma.com/proto/QWEChKFHvuO40KiQJ4LHWa/Tag?type=design&scaling=scale-down&page-id=0%3A1&node-id=4-144&starting-point-node-id=2%3A2&show-proto-sidebar=1';
    window.open(url,'_blank');
  };


  // SerpentsID--------------------------------------------
  const SerpentsID = img3;          
  const handleSeeMoreSerpentsID = () => {
    const url = 'https://www.figma.com/proto/0KwikUto2lfFBWehBgwlXm/Surpent-App---copy?type=design&node-id=17-35&scaling=scale-down&page-id=0%3A1&starting-point-node-id=17%3A5';
    window.open(url, '_blank');
  };



  const FullStackimg = "https://img.freepik.com/free-vector/app-development-concept-illustration_114360-5164.jpg?w=740&t=st=1699794043~exp=1699794643~hmac=c1ccba2fb9f47129e0dcc716016151330cf178aba670a4064b329dd040f62810"

  return (
    <div>
      <div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900 via-teal-600 to-emerald-900 text-teal-500">
        <h2 class="text-3xl text-center text-white  pt-10 pb-10 ">UI/UX Projects</h2>
        <div class="grid md:grid-cols-4 sm:grid-cols-2 py-5 ">

        <div data-aos="fade-up" data-aos-duration="1000" class="flex flex-col bg-slate-50 mx-5 my-3 rounded-lg">
        {/* FrontEnd Development */}
        <div class="flex flex-col py-10 bg-slate-50 mx-5">
          <img  class="rounded-lg border-2 h-30 w-full py-1"
                src={SerpentsID} alt="" />
            <h3 class>Serpents!D</h3>
              <button onClick={handleSeeMoreSerpentsID}
                      class="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 mt-8 px-4 rounded">
                See More...
              </button>

            
        </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000" class="flex flex-col  bg-slate-50 mx-5 my-3 rounded-lg">
            {/* BackEnd Development */}
        <div class="flex flex-col py-10 bg-slate-50 mx-5 ">
        <img  class="rounded-lg border-2 h-100 py-8" 
              src={CyclePlus} alt=""/>
            <h3>Cycle+</h3>
            <button class="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 mt-8 px-4 rounded">
                See More...
              </button>
            
        </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000" class="flex flex-col  bg-slate-50 mx-5 my-3 rounded-lg">
            {/* Mobile App Development */}
        <div class="flex flex-col py-10 bg-slate-50 mx-5 ">
        <img  class="rounded-lg border-2 h-100 py-3" 
              src={Tag} alt=""/>
            <h3>Tag</h3>
            <button onClick={handleSeeMoretag}
                    class="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 mt-8 px-4 rounded">
                See More...
              </button>
            
        </div>

        </div>
        <div data-aos="fade-up" data-aos-duration="1000" class="flex flex-col  bg-slate-50 mx-5 my-3 rounded-lg">
            {/* FullStack Development */}
        <div class="flex flex-col py-10 bg-slate-50 mx-5 ">
        <img src={FullStackimg} alt="" />
            <h3>FullStack Development</h3>
            <button class="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 mt-8 px-4 rounded">
                See More...
              </button>
            
        </div>

        </div>
    </div>
    </div>
    </div>
  )
}
