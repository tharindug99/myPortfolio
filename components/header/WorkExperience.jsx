import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import experienceData from '../../src/data/WorkInfo';



export default function WorkExperience() {
  return (
    <div className="bg-fixed relative" style={{
      paddingTop: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'right',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className="mx-auto w-4/5">
  <VerticalTimeline lineColor='#32a4a8' className="ml-33 justify-center">
    {experienceData.map((experience, index) => (
      <VerticalTimelineElement
        key={index}
        className='vertical-timeline-element--work mx-auto'
        iconStyle={{ backgroundColor: '#3294a8', color: '#fff' }}
        icon={experience.icon}
      >
        <div className="d-flex align-items-center justify-content-between">
            <div className="column">
                  <div className="d-flex align-items-center">
                    {experience.organization}
                    <img 
                        src={experience.image} 
                        alt="" 
                        style={{ maxWidth: '100px', marginLeft: '10px' }} 
                    />
                  
                  </div>
                <p><i>{experience.date}</i></p>
                <p>{experience.role}</p>
              </div>
           </div>
          </VerticalTimelineElement>
       ))}
      </VerticalTimeline>
    </div>

    </div>
  );
};
