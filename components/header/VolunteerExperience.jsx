import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import VolunteerInfo from '../../src/data/VolunteerInfo';

export default function VolunteerExperience() {
  return (
    <div className="bg-fixed relative" style={{
      paddingTop: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'right',
      backgroundRepeat: 'no-repeat',}}>
  <div className="mx-auto w-4/5">
      <VerticalTimeline lineColor='#32a4a8' className="ml-33 justify-center">
      {VolunteerInfo.map((experience, index) => (
        <VerticalTimelineElement
          key={index}
          className='vertical-timeline-element--work mx-auto'
          iconStyle={{ backgroundColor: '#3294a8', color: '#fff' }}
          icon={experience.icon}
          image={experience.image}
        >
          {experience.organization} 
          <img src={experience.image} 
               style={{ maxWidth: '100px', marginLeft: '10px' }} />
          <br />
          <i>({experience.date})</i>
          <p>{experience.role}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  </div>
</div>
        
  );
}
