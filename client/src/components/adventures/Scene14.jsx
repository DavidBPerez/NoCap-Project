import React from 'react';
import Scenario from './Scenario';

const Scene14 = (props) => {
  const handleOptionClick = (outcome, scores) => {
    props.onScene14OptionClick(outcome, scores);
  };

  const sceneData = {
    text: "You decide to explore more of the cave, curious about what you might find. The cave seems to go on endlessly. What's your next move?",
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
        label: "Return to the forest",
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
        label: "Knock on the door to see if anyone is inside",
        outcome: "scene15",
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

export default Scene14;
