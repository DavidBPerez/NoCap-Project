import React from 'react';
import Scenario from './Scenario';

const Scene8 = (props) => {
  const handleOptionClick = (outcome, scores) => {
    props.onScene8OptionClick(outcome, scores);
  };

  const sceneData = {
    text: "You quietly slip away from the attention and find a quiet spot to relax. The serenity of the forest surrounds you. What's your next move?",
    options: [
      {
        label: "Continue observing the forest and surroundings",
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
        label: "Explore the forest and find interesting spots",
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
        label: "Head back to the village and see what's happening",
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

export default Scene8;
