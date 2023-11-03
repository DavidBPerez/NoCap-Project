import React from 'react';
import Scenario from './Scenario';

const Scene16 = (props) => {
  const handleOptionClick = (outcome, scores) => {
    props.onScene16OptionClick(outcome, scores);
  };

  const sceneData = {
    text: "You enter the mysterious room, finding it to be a quiet and serene place. It's the perfect spot for meditation and contemplation. What's your next move?",
    options: [
      {
        label: "Sit and meditate, contemplating the choices of the road",
        outcome: "scene16",
        scores: {
          openness: 1,
          conscientiousness: 0,
          extraversion: 1,
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
        label: "Return to the cave to explore more",
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

export default Scene16;
