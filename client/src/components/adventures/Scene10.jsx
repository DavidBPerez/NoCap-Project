import React from 'react';
import Scenario from './Scenario';

const Scene10 = (props) => {
  const handleOptionClick = (outcome, scores) => {
    props.onScene10OptionClick(outcome, scores);
  };

  const sceneData = {
    text: "You decide to explore the dark cave entrance. Inside, it's mysterious and eerie. What will you do now?",
    options: [
      {
        label: "Keep exploring deeper into the cave",
        outcome: "scene14",
        scores: {
          openness: 0,
          conscientiousness: 1,
          extraversion: 1,
          agreeableness: 0,
          neuroticism: 0,
        },
      },
      {
        label: "Turn back and return to the forest",
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
        label: "Examine the cave walls and formations",
        outcome: "scene11",
        scores: {
          openness: 0,
          conscientiousness: 0,
          extraversion: 0,
          agreeableness: 0,
          neuroticism: 1,
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

export default Scene10;
