import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { AiOutlineBank } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";

import heroimg from '../images/Tharindu.jpg';

const experienceData = [
  {
    organization: 'Nations Trust Bank',
    date: '2019 Dec - 2021 Jan',
    role: 'Trainee Banking Assistant',
    icon: <AiOutlineBank />,
  },
  {
    organization: 'Third Space Global',
    date: '2023 Sep - Present',
    role: 'Online Mathematics Tutor',
    icon: <FaChalkboardTeacher />,
  },
  // Add more experiences as needed
];

const WorkExperience = () => {
  return (
    <div
      className="bg-fixed relative"
      style={{
        paddingTop: 0,
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent), url(${heroimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <VerticalTimeline lineColor='#32a4a8' className="m-10 ml-10 justify-center">
        {experienceData.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            className='vertical-timeline-element--work'
            iconStyle={{ backgroundColor: '#3294a8', color: '#fff' }}
            icon={experience.icon}
          >
            <h3>{experience.organization} <br />
              <i>({experience.date})</i>
            </h3>
            <p>{experience.role}</p>
            <button
              className="rounded bg-teal-500 p-2 mt-4 rounded-2xl text-white hover:bg-teal-800"
            >
              See more
            </button>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default WorkExperience;
