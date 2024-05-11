import React from 'react'
import CircularProgressBar from './CircularProgressBar'


export default function MySkills() {

  const FrontEndimg = "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?w=740&t=st=1699793110~exp=1699793710~hmac=15aadae5ebb5e2617151260a59447075be7316ee10eb4d3e9a61dd54a417bda9"
  const BackEndimg = "https://img.freepik.com/premium-vector/flat-design-backend-developer-concept-illustration-websites-landing-pages-mobile-applications-posters-banners_108061-779.jpg?w=740"
  const MobileAppimg = "https://img.freepik.com/free-vector/app-development-concept-illustration_114360-5110.jpg?w=740&t=st=1699793647~exp=1699794247~hmac=d5584d362419f89040d48fdddeea57bd893eda8db2e96cfa0826b6341af6376a"
  const FullStackimg = "https://img.freepik.com/free-vector/app-development-concept-illustration_114360-5164.jpg?w=740&t=st=1699794043~exp=1699794643~hmac=c1ccba2fb9f47129e0dcc716016151330cf178aba670a4064b329dd040f62810"

  return (
    <>
  

  <h2  
       className="text-3xl mr-0 text-center text-white bg-cyan-900 pt-10 pb-10">View my work on..</h2>
      <div id="projects"
            style={{ marginRight: 0 }} className="grid md:grid-cols-4 sm:grid-cols-2 py-5 bg-cyan-900">

        <div data-aos="fade-up" data-aos-duration="1000" class="flex flex-col bg-slate-50 mx-5 my-3 rounded-lg">
        {/* FrontEnd Development */}
        <div class="flex flex-col py-10 bg-slate-50 mx-5 ">
          <img src={FrontEndimg} alt="" />
            <h3>FrontEnd Development</h3>
              <button class="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 mt-8 px-4 rounded">
                See More...
              </button>

            
        </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000" class="flex flex-col  bg-slate-50 mx-5 my-3 rounded-lg">
            {/* BackEnd Development */}
        <div class="flex flex-col py-10 bg-slate-50 mx-5 ">
        <img src={BackEndimg} alt="" />
            <h3>BackEnd Development</h3>
            <button class="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 mt-8 px-4 rounded">
                See More...
              </button>
            
        </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000" class="flex flex-col  bg-slate-50 mx-5 my-3 rounded-lg">
            {/* Mobile App Development */}
        <div class="flex flex-col py-10 bg-slate-50 mx-5 ">
        <img src={MobileAppimg} alt="" />
            <h3>Mobile App Development</h3>
            <button class="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 mt-8 px-4 rounded">
                See More...
              </button>
            
        </div>

        </div>
        <div data-aos="fade-up" data-aos-duration="1000" class="flex flex-col  bg-slate-50 mx-5  my-3 rounded-lg">
            {/* FullStack Development */}
        <div class="flex flex-col py-10 bg-slate-50 mx-5 ">
        <img src={FullStackimg} alt="" />
            <h3>FullStack Development</h3>
            <button class="bg-cyan-500 hover:bg-cyan-600  text-white font-bold py-2 mt-8 px-4 rounded">
                See More...
              </button>
            
        </div>

        </div>
  </div>
    
<div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-4 px-10 py-10 bg-cyan-900 shadow-cyan-500 mr-0">
  <div data-aos="fade-right" data-aos-duration="1000"  class="flex flex-col py-10 px-8 border border-gray-300 rounded rounded-md shadow shadow-md bg-slate-50">
    <h2 class="text-xl font-bold py-10 p-5 px-8">Technical Skills</h2>

    <h3 class="text-xl font-bold py-5 ">HTML</h3>
    <div class="h-2 bg-gray-200 rounded">
      <CircularProgressBar/>
    </div>
    <h3 class="text-xl font-bold py-5">CSS</h3>
    <div class="h-2 bg-gray-200 rounded">
      <CircularProgressBar/>
    </div>
    <h3 class="text-xl font-bold py-5">JavaScript</h3>
    <div class="h-2 bg-gray-200 rounded">
      <CircularProgressBar/>
    </div>
    <h3 class="text-xl font-bold py-5">C</h3>
    <div class="h-2 bg-gray-200 rounded">
     <CircularProgressBar/>
    </div>
    <h3 class="text-xl font-bold py-5">Java</h3>
    <div class="h-2 bg-gray-200 rounded ">
      <CircularProgressBar/>
    </div>
  </div>


  <div data-aos="fade-left" data-aos-duration="1000"  class="flex flex-col py-10 px-8 bg-slate-50 rounded rounded-md shadow shadow-md">
    <h2 class="text-xl font-bold py-10 ">Professional Skills</h2>
    <h3 class="text-xl font-bold py-5">Communication</h3>
    <div class="h-2 bg-gray-200 rounded">
      <div class="w-[75%] h-full bg-cyan-500 rounded animate-progress"></div>
    </div>

    <h3 class="text-xl font-bold py-5">Team Work</h3>
    <div class="h-2 bg-gray-200 rounded">
      <div class="w-[75%] h-full bg-cyan-500 rounded animate-progress"></div>
    </div>

    <h3 class="text-xl font-bold py-5">Creativity</h3>
    <div class="h-2 bg-gray-200 rounded">
      <div class="w-[75%] h-full bg-cyan-500 rounded animate-progress"></div>
    </div>

    <h3 class="text-xl font-bold py-5">Project Management</h3>
    <div class="h-2 bg-gray-200 rounded">
      <div class="w-[75%] h-full bg-cyan-500 rounded animate-progress"></div>
    </div>
  </div>
</div>
    </>
  )
}
