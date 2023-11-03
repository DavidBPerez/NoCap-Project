import React from 'react';
import Scenario from './Scenario';

const Scene13 = (props) => {
  const handleOptionClick = (outcome, scores) => {
    props.onScene13OptionClick(outcome, scores);
  };

  const sceneData = {
    text: "You decide to take a break and relax for a while. It's a peaceful moment in the forest. What's your next move?",
    options: [
      {
        label: "Continue relaxing and embrace the tranquility",
        outcome: "scene13",
        scores: {
          openness: 1,
          conscientiousness: 0,
          extraversion: 1,
          agreeableness: 0,
          neuroticism: 0,
        },
      },
      {
        label: "Return to the village to see what's happening",
        outcome: "gameOver",
        scores: {
          extraversion: 2,
          conscientiousness: -1,
          openness: 0,
          agreeableness: 0,
          neuroticism: 0,
        },
      },
      {
        label: "Explore deeper into the forest",
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
        label: "Open the door and enter the unknown room",
        outcome: "scene14",
        scores: {
          openness: 1,
          conscientiousness: 0,
          extraversion: 0,
          agreeableness: 1,
          neuroticism: 0,
        },
      },
    ],
  };

  return (
    <Scenario {...sceneData} onOptionClick={handleOptionClick} />
  );
};

export default Scene13;
