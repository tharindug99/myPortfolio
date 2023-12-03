import React from 'react';
import {AiFillGithub,AiFillFacebook, AiFillInstagram,AiOutlineLinkedin,AiOutlineWhatsApp} from 'react-icons/ai';
import TypeWriter from './TypeWriter';
import heroimg from '../images/Tharindu.jpg';

export default function Banner() {
  
  return (
      <div className="mx-auto max-w-full bg-fixed relative align-center py-30"
      //Image is added here....................
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent), url(${heroimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
      }}>
        <div data-aos="fade-down" 
             data-aos-duration="800" 
             className="max-w-full lg:py-20 py-10 text-center lg:text-left gap-5 justify-center lg:gap-6 items-center ">
          

                {/* ____________________WELCOME TEXT  ____________________________*/}
                <div class="flex w-100 xl:pb-10 pl-5 py-30 my-20 lg:gap-6 items-center">
                  <h1 className="text-3xl lg:text-5xl md:text-3xl font-semibold mb-4 lg:leading-normal text-white">
                      I'm <span className="text from-white via-cyan-300 to-cyan-500 bg-gradient-to-r bg-clip-text text-transparent">
                      Tharindu Godage</span>
                    <TypeWriter/>
                  </h1>

                </div>

 



{/* ____________________Icons for socials  ____________________________*/}

<div data-aos="fade-up" data-aos-duration="1000" class=" w-full flex justify-center flex-col items-center">
  <h2 class="text-3xl text-center mb-4 text-white py-10 my-6">Connect with Me Through..</h2>
  <div class="flex space-x-6">
    <a href="" class="text-white hover:text-white glow">
      <AiFillGithub class="text-[64px]"></AiFillGithub>
    </a>

    <a href="" class="text-white hover:text-white glow">
      <AiFillFacebook class="text-[64px]"></AiFillFacebook>
    </a>

    <a href="" class="text-white hover:text-white glow">
      <AiFillInstagram class="text-[64px]"></AiFillInstagram>
    </a>

    <a href="" class="text-white hover:text-white glow">
      <AiOutlineLinkedin class="text-[64px]"></AiOutlineLinkedin>
    </a>

    <a href="" class="text-white hover:text-white glow">
      <AiOutlineWhatsApp class="text-[64px]"></AiOutlineWhatsApp>
    </a>
  </div>
</div>


      

   </div>
   
    </div>
    
  );
}
