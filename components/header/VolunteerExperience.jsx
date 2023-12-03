import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import heroimg from '../images/Tharindu.jpg';
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { SiIeee } from "react-icons/si";

const experienceData = [
  {
    organization: 'AIESEC in Sabaragamuwa',
    date: '2021 Dec - 2022 Aug',
    role: 'IGVP DXP & MKT',
    icon: <MdOutlineVolunteerActivism />,
  },
  {
    organization: 'SLSAC',
    date: '2022 March - 2023 March',
    role: 'Delegates Management Team Member',
    icon: <SiIeee size="2x" />,
  },
  {
    organization: 'Zero Plastic Community of Sabaragamuwa University of Sri Lanka',
    date: '2022 March - 2022 December / 2022 December - 2023 August',
    role: 'Director of PR / Operations',
    icon: <MdOutlineVolunteerActivism />,
  },
  {
    organization: 'Zero Plastic Community of Sabaragamuwa University of Sri Lanka',
    date: '2022 March - 2022 December / 2022 December - 2023 August',
    role: 'Director of PR / Operations',
    icon: <MdOutlineVolunteerActivism />,
  },
  {
    organization: 'Zero Plastic Community of Sabaragamuwa University of Sri Lanka',
    date: '2022 March - 2022 December / 2022 December - 2023 August',
    role: 'Director of PR / Operations',
    icon: <MdOutlineVolunteerActivism />,
  },
  {
    organization: 'Zero Plastic Community of Sabaragamuwa University of Sri Lanka',
    date: '2022 March - 2022 December / 2022 December - 2023 August',
    role: 'Director of PR / Operations',
    icon: <MdOutlineVolunteerActivism />,
  },
  // Add more experiences as needed
];


export default function VolunteerExperience() {
  return (
    <div className="bg-fixed relative" style={{
      paddingTop: 0,
      backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent), url(${heroimg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'right',
      backgroundRepeat: 'no-repeat',}}>
  <div className="mx-auto w-4/5">
      <VerticalTimeline lineColor='#32a4a8' className="m-10 ml-8 justify-normal">
      {experienceData.map((experience, index) => (
        <VerticalTimelineElement
          key={index}
          className='vertical-timeline-element--work mx-auto'
          iconStyle={{ backgroundColor: '#3294a8', color: '#fff' }}
          icon={experience.icon}
        >
          <h3>{experience.organization} <br /><i>({experience.date})</i></h3>
          <p>{experience.role}</p>
          <button className="rounded bg-teal-500 p-2 mt-4 rounded-2xl text-white hover:bg-teal-800">
           See more
          </button>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  </div>
</div>
        
  );
}
