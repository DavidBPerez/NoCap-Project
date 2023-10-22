import React from 'react';
import Scenario from './Scenario';

const Scene3 = (props) => {
  const handleOptionClick = (outcome, scores) => {
    props.onScene3OptionClick(outcome, scores);
  };

  const sceneData = {
    text: "You come across a cave temple with a dark entrance, but to its side, an oddly colorful path of flowers goes by a tall tree. As you're standing, you start hearing noises not too far away, almost as if it's trying to conceal itself. What is your call?",
    options: [
      {
        label: "Follow the path of colorful flowers",
        outcome: "scene9",
        scores: { 
          openness: 1, 
          conscientiousness: 0,
          extraversion: 0,
          agreeableness: 1,
          neuroticism: 0,
        },
      },
      {
        label: "Explore the dark cave entrance",
        outcome: "scene10",
        scores: { 
          openness: 0,
          conscientiousness: 1, 
          extraversion: 1, 
          agreeableness: 0,
          neuroticism: 0,
        },
      },
      {
        label: "Climb the tall tree for a better view",
        outcome: "scene11",
        scores: {
          openness: 0,
          conscientiousness: 0,
          extraversion: 0,
          agreeableness: 0,
          neuroticism: 1 
        },
      },
      {
        label: "Wait and observe your surroundings",
        outcome: "scene12",
        scores: {
          openness: 1,
          conscientiousness: 0,
          extraversion: 1,
          agreeableness: 0,
          neuroticism: 0,
        },
      },
    ],
  };

  return (
    <Scenario {...sceneData} onOptionClick={handleOptionClick} />
  );
};

export default Scene3;
