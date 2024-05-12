import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypeWriter = () => {

  const handleType = (count) => {
    
  };

  const handleDone = () => {
    
  };

  return (
    <div className='App'>
      <h1>
        a {' '}
        <span style={{ color: 'cyan', fontWeight: 'bold' }}>
          
          <Typewriter
            words={['Front-End Developer', 'Back-End Developer','Full-Stack Developer','Mobile App Developer']}
            loop={5000}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
      </h1>
    </div>
  );
};

export default TypeWriter;
