import React from 'react';
import Scenario from './Scenario';

const Scene12 = (props) => {
  const handleOptionClick = (outcome, scores) => {
    props.onScene12OptionClick(outcome, scores);
  };

  const sceneData = {
    text: "You continue to observe your surroundings, taking in the forest's beauty. The serene atmosphere calms your mind. What would you like to do next?",
    options: [
      {
        label: "Stay in your current spot and continue observing",
        outcome: "scene12",
        scores: {
          openness: 1,
          conscientiousness: 0,
          extraversion: 1,
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
        label: "Return to the village to see what's happening",
        outcome: "scene2",
        scores: {
          extraversion: 2,
          conscientiousness: -1,
          openness: 0,
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

export default Scene12;
