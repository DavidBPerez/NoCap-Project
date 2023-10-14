import React from 'react';

const UIController = ({startApplication, exitApplication}) => {
  const handleStart = () => {
    startApplication();
  };

  const handleExit = () => {
    exitApplication();
  };

  return (
    <div>
      <button onClick={handleStart}>Start Application</button>
      <button onClick={handleExit}> Exit Application</button>
    </div>
  );
};

export default UIController;
