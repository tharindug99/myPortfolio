import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import heroimg from '../images/Tharindu.jpg';
import { AiOutlineBank } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";



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
      <VerticalTimeline lineColor='#32a4a8' className="m-10">
        <VerticalTimelineElement className='vertical-timeline-element--work'
                                 iconStyle={{backgroundColor:'#3294a8', color:'#fff'}}
                                 icon={<AiOutlineBank />}
                                //  date='2019-2021'
                                 >
                                 <h3>Nations Trust Bank <br />
                                 <i>(2019 Dec - 2021 Jan)</i></h3>
                                 <p>Trainee Banking Assistant</p>
                                 <button 
                                 className="rounded bg-teal-500 p-2 mt-4 rounded-2xl text-white hover:bg-teal-800">See more</button>

        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--work'
                                 iconStyle={{backgroundColor:'#3294a8', color:'#fff'}}
                                 icon={<FaChalkboardTeacher />}
                                //  date='2023-Present'
                                >
                                 <h3>Third Space Global <br />
                                 <i>(2023 Sep - Present)</i></h3>
                                 <p>Online Mathematics Tutor</p>
                                 <button 
                                 className="rounded bg-teal-500 p-2 mt-4 rounded-2xl text-white hover:bg-teal-800">See more</button>

        </VerticalTimelineElement>
      </VerticalTimeline>
      
    </div>
  );
};

export default WorkExperience;
