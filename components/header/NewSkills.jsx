import React from 'react';
import { Link } from 'react-router-dom';
import MySkills from '../../components/skills/MySkills';

export default function NewSkills() {

  const projects = [
    {
      title: "MediFlex",
      description: "A web application for managing medical records.",
      imgSrc: "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?w=740&t=st=1699793110~exp=1699793710~hmac=15aadae5ebb5e2617151260a59447075be7316ee10eb4d3e9a61dd54a417bda9",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      repoLink: "https://github.com/yourusername/yourproject"
    },
    {
      title: "MediFlex",
      description: "A web application for managing medical records.",
      imgSrc: "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?w=740&t=st=1699793110~exp=1699793710~hmac=15aadae5ebb5e2617151260a59447075be7316ee10eb4d3e9a61dd54a417bda9",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      repoLink: "https://github.com/yourusername/yourproject"
    },
    {
      title: "MediFlex",
      description: "A web application for managing medical records.",
      imgSrc: "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?w=740&t=st=1699793110~exp=1699793710~hmac=15aadae5ebb5e2617151260a59447075be7316ee10eb4d3e9a61dd54a417bda9",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      repoLink: "https://github.com/yourusername/yourproject"
    },
    {
      title: "MediFlex",
      description: "A web application for managing medical records.",
      imgSrc: "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?w=740&t=st=1699793110~exp=1699793710~hmac=15aadae5ebb5e2617151260a59447075be7316ee10eb4d3e9a61dd54a417bda9",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      repoLink: "https://github.com/yourusername/yourproject"
    },
    
  ];

  return (
    <div className="">
      <div id="projects" 
           className="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-900/60 via-teal-600 to-emerald-900/60 ">
        <h2 data-aos="fade-up" data-aos-duration="1000" className="text-3xl mr-0 text-center text-white py-10 ">Some Of my Projects</h2>

      

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 px-10 py-10">
          {projects.map((project, index) => (
            <div key={index} data-aos="fade-up" data-aos-duration="1000" className="flex flex-col bg-slate-50 mx-5 my-3 rounded-lg items-center lg:w-auto ">
              <div className="flex flex-col bg-slate-50 p-5 rounded-t-lg w-full lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-shrink-0 lg:mr-4 lg:w-1/4">
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
                  <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 mt-2 mb-4 w-full px-8 rounded ">
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
