import React from 'react';
import Scenario from './Scenario';

const Scene9 = (props) => {
  const handleOptionClick = (outcome, scores) => {
    props.onScene9OptionClick(outcome, scores);
  };

  const sceneData = {
    text: "As you follow the path of colorful flowers, it leads you deeper into the forest. The enchanting ambiance continues. What's your next move?",
    options: [
      {
        label: "Continue following the colorful path",
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
        label: "Pause to admire the beauty of the flowers",
        outcome: "scene12",
        scores: {
          agreeableness: 0,
          openness: 1,
          extraversion: -1,
          conscientiousness: 0,
          neuroticism: 0,
        },
      },
      {
        label: "Explore the dark cave entrance",
        outcome: "gameOver",
        scores: {
          openness: 0,
          conscientiousness: 1,
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

export default Scene9;
