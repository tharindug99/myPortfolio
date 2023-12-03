import React, { useState } from 'react';
import img1 from '../images/Achievments/RevolUX.jpg';
import img2 from '../images/Achievments/UXPlore.jpg';
import img3 from '../images/Achievments/Innova.jpg';
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

const MyAchievements = () => {

    const slides = [
        {
            url:img1,
            title:"RevolUX FInalists"
        },
        {
            url:img2,
            title:"MoraUXplore FInalists"
        },
        {
            url:img3,
            title:"Innova 2023 Champions IT Category"
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    return (
    <div className="">
        <h2 data-aos="fade-up" data-aos-duration="1000" className="text-3xl text-center mb-4 text-white py-20">
            Some of My Achievements...
        </h2>
        <div className="max-w-[1400px] h-[780px] lg:w-1/2 sm:w-100 md:w-100 m-auto py-16 px-4 relative">
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                data-aos="fade-left" data-aos-duration="1000"
                className="w-full h-full rounded-2xl bg-center bg-cover duration-500 hover:cursor-pointer relative"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent hover:opacity-100 opacity-0 transition-opacity duration-300">
                    <h3 className="text-white text-xl absolute bottom-4 left-4">{slides[currentIndex].title}</h3>
                </div>
            </div>
            {/* left arrow */}
            <div className="absolute top-[50%] -translate-x-0 left-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer">
                <AiFillCaretLeft size={30} onClick={prevSlide}/>
            </div>
            {/* right arrow */}
            <div className="absolute top-[50%] -translate-x-0 right-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer">
                <AiFillCaretRight size={30} onClick={nextSlide}/>
            </div>
        </div>
    </div>
  );
};

export default MyAchievements;
