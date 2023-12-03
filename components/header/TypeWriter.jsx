import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypeWriter = () => {

  const handleType = (count) => {
    // Access the word count number
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <div className='App'>
      <h1>
        a {' '}
        <span style={{ color: 'cyan', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
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
