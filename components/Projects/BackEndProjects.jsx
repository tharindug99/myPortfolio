import React from 'react'

export default function BackEndProjects() {

  const FrontEndimg = "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?w=740&t=st=1699793110~exp=1699793710~hmac=15aadae5ebb5e2617151260a59447075be7316ee10eb4d3e9a61dd54a417bda9"
  const BackEndimg = "https://img.freepik.com/premium-vector/flat-design-backend-developer-concept-illustration-websites-landing-pages-mobile-applications-posters-banners_108061-779.jpg?w=740"
  const MobileAppimg = "https://img.freepik.com/free-vector/app-development-concept-illustration_114360-5110.jpg?w=740&t=st=1699793647~exp=1699794247~hmac=d5584d362419f89040d48fdddeea57bd893eda8db2e96cfa0826b6341af6376a"
  const FullStackimg = "https://img.freepik.com/free-vector/app-development-concept-illustration_114360-5164.jpg?w=740&t=st=1699794043~exp=1699794643~hmac=c1ccba2fb9f47129e0dcc716016151330cf178aba670a4064b329dd040f62810"

  return (
    <div>
      <div class="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900 via-teal-600 to-emerald-900 text-teal-500">
      <h2 class="text-3xl text-center text-white pt-10 pb-10 ">BackEnd Projects</h2>
    <div class="grid md:grid-cols-4 sm:grid-cols-2 py-5 ">

        <div data-aos="fade-up" data-aos-duration="1000" class="flex flex-col bg-slate-50 mx-5 my-3 rounded-lg">
        {/* FrontEnd Development */}
        <div class="flex flex-col py-10 bg-slate-50 mx-5">
          <img src={FrontEndimg} alt="" />
            <h3>Live Projects</h3>
            <h3>System design docs</h3>
            <h3>Architectural/System Design Diagrams</h3>
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
