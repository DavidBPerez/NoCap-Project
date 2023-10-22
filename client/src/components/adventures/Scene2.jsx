import React from 'react';
import Scenario from './Scenario';

const Scene2 = (props) => {
  const handleOptionClick = (outcome, scores) => {
    props.onScene2OptionClick(outcome, scores);
  };

  const sceneData = {
    text: "After traveling, you reach a quaint village. There are some villagers you mistake for other students who invite you to a grand feast! You become not only confused but also curious about the thought. What will you do?",
    options: [
      {
        label: "Dazzling Performance",
        outcome: "scene5",
        scores: {
          extraversion: 2,
          conscientiousness: -1,
          extraversion: 0,
          agreeableness: 0,
          neuroticism: 0,
        },
      },
      {
        label: "Helpful Contribution",
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
        label: "Deep Conversation",
        outcome: "scene7",
        scores: {
          openness: 2,
          conscientiousness: 0,
          extraversion: -1,
          agreeableness: 0,
          neuroticism: 0,
        },
      },
      {
        label: "Low-Key Observance",
        outcome: "scene8",
        scores: {
          openness: 0,
          conscientiousness: 0,
          neuroticism: -1,
          agreeableness: 0,
          extraversion: -1,
        },
      },
    ],
  };

  return (
    <Scenario {...sceneData} onOptionClick={handleOptionClick} />
  );
};

export default Scene2;
