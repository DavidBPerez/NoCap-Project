import React, { useState } from 'react';
import Scenario from './adventures/Scenario';

const Tutorial = ({ onComplete, onSkip }) => {
  const [tutorialStep, setTutorialStep] = useState(1);

  const handleTutorialOptionClick = () => {
    if (tutorialStep < 3) {
      setTutorialStep(tutorialStep + 1);
    } else {
      onComplete();
    }
  };

  const handleSkipClick = () => {
    onSkip();
  };

  const tutorialScenes = [
    {
      text: "Welcome to Complacara Conundrum! This introductory tutorial will help you learn how to play. Click \'Next\' to continue...",
      options: [
        {
          label: "Next",
          outcome: "tutorialStep2",
        },
      ],
    },
    {
      text: "Great! In this game your goal is to get as far as you can while being honest with yourself, and your choices. Each choice you make will affect you personality scoring in a way that could be good or bad depending on how you feel about it. Some choices will also allow you to go back and although these ones will not provide score, no easy cheating here! After reading where you are in the adventure you can make your \'Next\' decision to continue until you reach an ending with your results.",
      options: [
        {
          label: "Next",
          outcome: "tutorialStep3",
        },
      ],
    },
    {
      text: "You've completed the tutorial! Feel free to explore the game now and remember: Have Fun! Explore! Be Cautious!",
      options: [
        {
          label: "Start Game",
          outcome: "startGame",
        },
      ],
    },
  ];

  return (
    <div>
      <h2>Tutorial</h2>
      <Scenario {...tutorialScenes[tutorialStep - 1]} onOptionClick={handleTutorialOptionClick} />
      {tutorialStep === 1 && (
        <div>
          <br/>
          <p>Already familiar with the game?</p>
          <button onClick={handleSkipClick}>Skip Tutorial</button>
        </div>
      )}
    </div>
  );
};

export default Tutorial;
