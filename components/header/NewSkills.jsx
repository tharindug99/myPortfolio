import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import MySkills from '../../components/skills/MySkills';
import Mediflex from      '../../src/assets/images/MediFlex.png';
import weatherfinder from '../../src/assets/images/weatherfinder.png'
import UniJobs from '../../src/assets/images/UniJobs.png'
import surasa from '../../src/assets/images/Surasa.png'
import dashboard from '../../src/assets/images/nextJs-Dashboard.png'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";


export default function NewSkills() {

  const [init, setInit] = useState(false); 

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true); 
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const projects = [
    {
      title: "MediFlex",
      description: "A web application for managing medical records.",
      imgSrc: Mediflex,
      technologies: ["React", "Node.js","Tailwind CSS", "Express.js", "MongoDB"],
      repoLink: "https://github.com/tharindug99/MediFlex_frontEnd"
    },
    {
      title: "UniJobs",
      description: "A web application for managing medical records.",
      imgSrc: UniJobs,
      technologies: ["React-Native","FireBase","Expo","Figma"],
      repoLink: "https://github.com/tharindug99/UniJobs-byAvishka"
    },
    {
      title: "Weather Finder",
      description: "A web application for managing medical records.",
      imgSrc: weatherfinder,
      technologies: ["React", "ViteJs","Tailwind CSS", "OpenWeather API"],
      repoLink: "https://github.com/tharindug99/WeatherFinder"
    },
    {
      title: "Surasa Website (Under Dev.)",
      description: "The official website for Surasa..",
      imgSrc: surasa,
      technologies: ["React", "Tailwind CSS", "PHP", "MY SQL","Figma"],
      repoLink: "https://github.com/tharindug99/Surasa"
    },
    {
      title: "Next JS Dashboard",
      description: "A basic dashboard which can be used to track income and expenses, profits, sales",
      imgSrc: dashboard,
      technologies: ["NextJS","POSTGRE SQL","Tailwind CSS"],
      repoLink: "https://github.com/tharindug99/nextjs-dashboard"
    },
    
  ];

  return (
    <div className="">
      {init && ( 
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
              background: {
                
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 1,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 6,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "nested",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          />
        )}
      <div id="projects" 
           className=" bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-900/60 via-teal-600 to-emerald-900/60 ">
        <h2 data-aos="fade-up" 
        data-aos-duration="1000" 
        className="text-3xl mr-0 text-center text-white py-10 ">Some Of my Projects</h2>

      

        <div className="my-24 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 px-10 ">
          {projects.map((project, index) => (
            <div key={index} data-aos="fade-up" data-aos-duration="1000" className="flex flex-col bg-transparent mx-5 my-3 rounded-lg items-center lg:w-auto ">
              <div className="flex flex-col bg-slate-50 p-5 rounded-t-lg w-full lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-shrink-0 lg:mr-4 lg:w-1/2">
                  <img src={project.imgSrc} alt="" className="h-auto w-full mb-4 lg:w-full" />
                </div>
                <div className="flex-grow lg:ml-4">
                  <h3 className="text-center lg:text-left text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-center lg:text-left mb-4">{project.description}</p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                    {project.technologies.map((tech, idx) => (
                      <div key={idx} className="bg-gray-200 rounded-md py-1 px-2 text-sm">{tech}</div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full p-3 bg-white rounded-b-lg">
                <Link to={project.repoLink}>
                  <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 mt-2 mb-4 w-full px-8  rounded ">
                    See Repo
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <MySkills />
      </div>
    </div>
  )
}
