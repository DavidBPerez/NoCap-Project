import React, { useState } from 'react';
import Scenario from './Scenario';

const Scene1 = (props) => {
  const [personalityScores, setPersonalityScores] = useState({
    openness: 0,
    conscientiousness: 0,
    extraversion: 0,
    agreeableness: 0,
    neuroticism: 0,
  });

  const handleOptionClick = (outcome, scores) => {
    // Update personality scores based on outcome
    setPersonalityScores({
      openness: personalityScores.openness + scores.openness,
      conscientiousness: personalityScores.conscientiousness + scores.conscientiousness,
      extraversion: personalityScores.extraversion + scores.extraversion,
      agreeableness: personalityScores.agreeableness + scores.agreeableness,
      neuroticism: personalityScores.neuroticism + scores.neuroticism,
    });

    // Pass updated scores the parent component
    props.onScene1OptionClick(outcome, personalityScores);
  };

  const sceneData = {
    text: "Welcome to Scene 1. Choose an option:",
    options: [
      {
        label: "Option A",
        outcome: "You chose option A. Here's the outcome for Scene 1.",
        scores: { 
          openness: 1, 
          conscientiousness: 0,
          extraversion: 0,
          agreeableness: 1,
          neuroticism: 0 
        },
      },
      {
        label: "Option B",
        outcome: "You chose option B. Here's the outcome for Scene 1.",
        scores: { 
          openness: 0, 
          conscientiousness: 1, 
          extraversion: 1, 
          agreeableness: 0, 
          neuroticism: 0 
        },
      },
      {
        label: "Option C",
        outcome: "You chose option C. Here's the outcome for Scene 1.",
        scores: {
          openness: 0,
          conscientiousness: 0,
          extraversion: 0, 
          agreeableness: 0,
          neuroticism: 1 
        },
      },
      {
        label: "Option D",
        outcome: "You chose option D. Here's the outcome for Scene 1.",
        scores: {
          openness: 1,
          conscientiousness: 0,
          extraversion: 1,
          agreeableness: 0,
          neuroticism: 0 
        },
      },
    ],
  };

  return (
    <Scenario {...sceneData} onOptionClick={handleOptionClick} />
  );
};

export default Scene1;
