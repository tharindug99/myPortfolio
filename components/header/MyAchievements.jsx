import React from 'react';
import img1 from '../images/Achievments/RevolUX.jpg';
import img2 from '../images/Achievments/UXPlore.jpg';
import img3 from '../images/Achievments/Innova.jpg';
import img4 from '../images/Achievments/ICS.jpg';

const MyAchievements = () => {

    const slides = [
        {
            url: img1,
            title: "RevolUX FInalists"
        },
        {
            url: img2,
            title: "MoraUXplore FInalists"
        },
        {
            url: img3,
            title: "Innova 2023 Champions IT Category"
        },
        {
            url: img4,
            title: "Most Popular Team ICS 2021"
        }
    ];

    return (
        <div>
            <h2 data-aos="fade-up" 
                data-aos-duration="1000" 
                className="text-3xl text-center mb-4 text-white py-20 ">
                Some of My Achievements...
            </h2>
            <div className="max-w-[1400px] mx-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="rounded-2xl bg-center bg-cover h-96 hover:cursor-pointer relative"
                        style={{ backgroundImage: `url(${slide.url})` }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent hover:opacity-100 opacity-0 transition-opacity duration-300">
                            <h3 className="text-white text-xl absolute bottom-4 left-4">{slide.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyAchievements;
