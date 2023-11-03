import React from 'react';
import Scenario from './Scenario';

const Scene15 = (props) => {
  const handleOptionClick = (outcome, scores) => {
    props.onScene15OptionClick(outcome, scores);
  };

  const sceneData = {
    text: "You decide to knock on the door to see if anyone is inside. After a few moments, the door creaks open, revealing a mysterious room. What will you do now?",
    options: [
      {
        label: "Enter the mysterious room",
        outcome: "scene16",
        scores: {
          openness: 1,
          conscientiousness: 0,
          extraversion: 0,
          agreeableness: 1,
          neuroticism: 0,
        },
      },
      {
        label: "Close the door and return to the cave",
        outcome: "scene14",
        scores: {
          openness: 0,
          conscientiousness: 1,
          extraversion: 0,
          agreeableness: 0,
          neuroticism: 0,
        },
      },
      {
        label: "Explore the surroundings of the mysterious room",
        outcome: "scene9",
        scores: {
          openness: 1,
          conscientiousness: 0,
          extraversion: 1,
          agreeableness: 0,
          neuroticism: 0,
        },
      },
      {
        label: "Take a break and relax for a while",
        outcome: "scene13",
        scores: {
          agreeableness: 0,
          openness: -1,
          extraversion: -1,
          conscientiousness: 0,
          neuroticism: 2,
        },
      },
    ],
  };

  return (
    <Scenario {...sceneData} onOptionClick={handleOptionClick} />
  );
};

export default Scene15;
