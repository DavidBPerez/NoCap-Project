import React from 'react';
import Scenario from './Scenario';

const Scene7 = (props) => {
  const handleOptionClick = (outcome, scores) => {
    props.onScene7OptionClick(outcome, scores);
  };

  const sceneData = {
    text: "You engage in a deep conversation with the villagers, learning about the village's rich history and the mysteries of the forest. What's your next move?",
    options: [
      {
        label: "Continue the conversation and ask about the forest's secrets",
        outcome: "scene12",
        scores: {
          openness: 2,
          conscientiousness: 0,
          extraversion: -1,
          agreeableness: 0,
          neuroticism: 0,
        },
      },
      {
        label: "Share your own stories and experiences",
        outcome: "scene6",
        scores: {
          agreeableness: 2,
          conscientiousness: 0,
          extraversion: 0,
          openness: -1,
          neuroticism: 0,
        },
      },
      {
        label: "Bid farewell and explore the forest",
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

export default Scene7;
