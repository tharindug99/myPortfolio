import React from 'react';
import { AiFillGithub, AiFillFacebook, AiFillInstagram, AiOutlineLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';
import TypeWriter from './TypeWriter';
import heroimg from '../images/Tharindu.jpg';

export default function Banner() {

  return (
    <div className="mx-auto max-w-full bg-fixed relative align-center py-30 z-30"
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
        <div class="flex w-100 xl:pb-10 pl-5 py-30 my-20 mb-30 lg:gap-6 items-center">
          <h1 className="text-3xl lg:text-5xl md:text-3xl font-semibold mb-4 lg:leading-normal text-white">
            I'm <span className="text from-white via-cyan-300 to-cyan-500 bg-gradient-to-r bg-clip-text text-transparent">
              Tharindu Godage</span>
            <TypeWriter />
          </h1>

        </div>

        {/* ____________________Icons for socials  ____________________________*/}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full flex justify-center flex-col items-center py-20">

          <h2 className="text-3xl text-center mb-4 text-white py-10 my-6">Connect with Me Through..</h2>
          <div className="flex flex-wrap justify-center space-x-6 sm:space-x-10 lg:space-x-16">
            <SocialIcon link="https://github.com/tharindug99" icon={<AiFillGithub className="text-[64px]" />} />
            <SocialIcon link="https://www.facebook.com/tharindu.godage/" icon={<AiFillFacebook className="text-[64px]" />} />
            <SocialIcon link="https://www.instagram.com/imperius_dominicus/" icon={<AiFillInstagram className="text-[64px]" />} />
            <SocialIcon link="https://www.linkedin.com/in/tharindu-godage-489335156/" icon={<AiOutlineLinkedin className="text-[64px]" />} />
            <SocialIcon link="https://wa.me/+94715482499" icon={<AiOutlineWhatsApp className="text-[64px]" />} />
          </div>
        </div>
      </div>
    </div>
  );
}


const SocialIcon = ({ link, icon }) => (
  <a href={link} target="_blank" className="text-white hover:text-white glow">
    {icon}
  </a>
);

export { Banner };
