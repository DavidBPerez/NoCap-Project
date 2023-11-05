import React from 'react';
import Scenario from './Scenario';
import { useRecoilState } from 'recoil';
import { PlayerStatsState, updatePlayerStats } from '../../atoms/PlayerStatsState';

const Scene5 = (props) => {
  const [playerStats, setPlayerStats] = useRecoilState(PlayerStatsState);

  const handleOptionClick = (outcome, scores) => {
    console.log('Score:', scores);
    const updatedPlayerStats = updatePlayerStats(playerStats, scores);

    setPlayerStats(updatedPlayerStats);
    props.onScene5OptionClick(outcome, updatedPlayerStats); 
  };

  const sceneData = {
    text: "Your performance mesmerizes the villagers. They cheer and applaud. What’s your next move?",
    options: [
      {
        label: "Accept their invitation for a celebration",
        outcome: "scene2",
        scores: {
          agreeableness: 2,
          conscientiousness: 0,
          extraversion: 0,
          openness: -1,
          neuroticism: 0,
        },
      },
      {
        label: "Excuse yourself and explore the village",
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
        label: "Reveal more about yourself to the villagers",
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
        label: "Quietly slip away from the attention",
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

export default Scene5;
