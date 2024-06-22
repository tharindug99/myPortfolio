
import Mediflex from      '../assets/images/Projects/Mediflex.png';
import weatherfinder from '../assets/images/Projects/weatherfinder.png'
import UniJobs from '../assets/images/Projects/UniJobs.png'
import surasa from '../assets/images/Projects/surasa.png'
import dashboard from '../assets/images/Projects/nextJs-Dashboard.png'
import chatbot from '../assets/images/Projects/chat with gemini.png'





const projects = [
    {
      title: "MediFlex",
      description: "A web application for managing medical records, which allows doctors and patients to register",
      imgSrc: Mediflex,
      technologies: ["React", "Node.js","Tailwind CSS", "Express.js", "MongoDB"],
      repoLink: "https://github.com/tharindug99/MediFlex_frontEnd"
    },
    {
      title: "UniJobs",
      description: "A cross-platform mobile applications, which allows university undergraduates to apply for part time jobs.",
      imgSrc: UniJobs,
      technologies: ["React-Native","FireBase","Figma"],
      repoLink: "https://github.com/tharindug99/UniJobs-byAvishka"
    },
    {
      title: "Weather Finder",
      description: "A web application powered by OpenWeather API which allows anyone to get weather updates from major cities",
      imgSrc: weatherfinder,
      technologies: ["React", 'Vite',"Tailwind CSS", ],
      repoLink: "https://tharindug99.github.io/WeatherFinder/"
    },
    {
      title: "Surasa Website (Under Dev.)",
      description: "The official website for Surasa Agri food restaurant",
      imgSrc: surasa,
      technologies: ["React", "Tailwind CSS", "php", "MY SQL","Figma"],
      repoLink: "https://github.com/tharindug99/Surasa"
    },
    {
      title: "Next JS Dashboard",
      description: "A basic dashboard which can be used to track income and expenses, profits, sales",
      imgSrc: dashboard,
      technologies: ["NextJs","POSTGRE SQL","Tailwind CSS"],
      repoLink: "https://github.com/tharindug99/nextjs-dashboard"
    },
    {
        title: "Chat with Gemini",
        description: "A chatbot powered with gemini-1.0-pro-001 LLM, with multiple themes",
        imgSrc: chatbot,
        technologies: ["NextJs","Tailwind CSS"],
        repoLink: "https://github.com/tharindug99/MediFlex_frontEnd"
      },
    
  ];


  export default projects;