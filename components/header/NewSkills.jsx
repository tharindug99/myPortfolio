import React from 'react'

export default function NewSkills() {

  const FrontEndimg = "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?w=740&t=st=1699793110~exp=1699793710~hmac=15aadae5ebb5e2617151260a59447075be7316ee10eb4d3e9a61dd54a417bda9"
  const BackEndimg = "https://img.freepik.com/premium-vector/flat-design-backend-developer-concept-illustration-websites-landing-pages-mobile-applications-posters-banners_108061-779.jpg?w=740"
  const MobileAppimg = "https://img.freepik.com/free-vector/app-development-concept-illustration_114360-5110.jpg?w=740&t=st=1699793647~exp=1699794247~hmac=d5584d362419f89040d48fdddeea57bd893eda8db2e96cfa0826b6341af6376a"
  const FullStackimg = "https://img.freepik.com/free-vector/app-development-concept-illustration_114360-5164.jpg?w=740&t=st=1699794043~exp=1699794643~hmac=c1ccba2fb9f47129e0dcc716016151330cf178aba670a4064b329dd040f62810"


  return (
    <div>
        <div className="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-900/60 via-teal-600 to-emerald-900/60 "
             style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), transparent), radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))`,
              }}>
        <h2 data-aos="fade-up" data-aos-duration="1000" className="text-3xl mr-0 text-center text-white py-10">View my work on..</h2>

            <div className="grid md:grid-cols-4 sm:grid-cols-2 sm:px-10 py-10">
                <div data-aos="fade-up" data-aos-duration="1000" class="flex flex-col bg-slate-50 mx-5 my-3 rounded-lg">
                    <div class="flex flex-col py-10 bg-slate-50 p-5 rounded-t-lg"></div>

                    <div className="auto mx-3">
                        <img src={FrontEndimg} alt="" />
                    </div>

                    <div className="text-center my-4">
                        <h3>FrontEnd Development</h3>
                    </div>
                    
                    <button class="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 mt-2 mb-4 px-2 rounded mx-5">
                            See More...
                    </button>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000" class="flex flex-col bg-slate-50 mx-5 my-3 rounded-lg">
                    <div class="flex flex-col py-10 bg-slate-50 p-5 rounded-t-lg"></div>

                    <div className="auto mx-3">
                        <img src={BackEndimg} alt="" />
                    </div>

                    <div className="text-center my-4">
                        <h3>BackEnd Development</h3>
                    </div>
                    
                    <button class="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 mt-2 mb-4 px-2 rounded mx-5">
                            See More...
                    </button>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000" class="flex flex-col bg-slate-50 mx-5 my-3 rounded-lg">
                    <div class="flex flex-col py-10 bg-slate-50 p-5 rounded-t-lg"></div>

                    <div className="auto mx-3">
                        <img src={MobileAppimg} alt="" />
                    </div>

                    <div className="text-center my-4">
                        <h3>Mobile App Development</h3>
                    </div>
                    
                    <button class="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 mt-2 mb-4 px-2 rounded mx-5">
                            See More...
                    </button>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col bg-slate-50 mx-5 my-3 rounded-lg">
                    <div class="flex flex-col py-10 bg-slate-50 p-5 rounded-t-lg"></div>

                    <div className="auto mx-3">
                        <img src={FullStackimg} alt="" />
                    </div>

                    <div className="text-center my-4">
                        <h3>FullStack Development</h3>
                    </div>
                    
                    <button class="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 mt-2 mb-4 px-2 rounded mx-5">
                            See More...
                    </button>
                </div>

            </div>

            
        </div>
        

    </div>
  )
}
