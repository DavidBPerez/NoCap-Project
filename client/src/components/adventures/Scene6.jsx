import React from 'react';
import Scenario from './Scenario';
import { useRecoilState } from 'recoil';
import { PlayerStatsState, updatePlayerStats } from '../../atoms/PlayerStatsState';

const Scene6 = (props) => {
  const [playerStats, setPlayerStats] = useRecoilState(PlayerStatsState);

  const handleOptionClick = (outcome, scores) => {
    console.log('Score:', scores);
    const updatedPlayerStats = updatePlayerStats(playerStats, scores);

    setPlayerStats(updatedPlayerStats);
    props.onScene6OptionClick(outcome, updatedPlayerStats); 
  };

  const sceneData = {
    text: "You decide to contribute by helping the villagers with their tasks. They appreciate your assistance, and in return you gain their gratitude. What would you like to do next?",
    options: [
      {
        label: "Continue helping the villagers",
        outcome: "gameOver",
        gameOverMessage: 
          "As you're helping a gust of wind sweeps the village knocking you over. A bundle of planks fall on you (oh pity).\n\nYou Felled.",
        scores: {
          agreeableness: 4,
          conscientiousness: 0,
          extraversion: 0,
          openness: -2,
          neuroticism: 0,
        },
      },
      {
        label: "Ask the villagers about the village's history",
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
        label: "Explore the village on your own",
        outcome: "scene9",
        scores: {
          openness: 2,
          conscientiousness: 0,
          extraversion: 2,
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
          neuroticism: 3,
        },
      },
    ],
  };

  return (
    <Scenario {...sceneData} onOptionClick={handleOptionClick} />
  );
};

export default Scene6;
