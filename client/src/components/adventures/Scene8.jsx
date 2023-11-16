import React from 'react';
import Scenario from './Scenario';
import { useRecoilState } from 'recoil';
import { PlayerStatsState, updatePlayerStats } from '../../atoms/PlayerStatsState';

const Scene8 = (props) => {
  const [playerStats, setPlayerStats] = useRecoilState(PlayerStatsState);

  const handleOptionClick = (outcome, scores) => {
    console.log('Score:', scores);
    const updatedPlayerStats = updatePlayerStats(playerStats, scores);

    setPlayerStats(updatedPlayerStats);
    props.onScene8OptionClick(outcome, updatedPlayerStats); 
  };

  const sceneData = {
    text: "You quietly slip away from the attention and find a quiet spot to relax. The serenity of the forest surrounds you. What's your next move?",
    options: [
      {
        label: "Continue observing the forest and surroundings",
        outcome: "scene12",
        scores: {
          openness: 2,
          conscientiousness: 0,
          extraversion: 2,
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
        label: "Head back to the village plaza and see what's happening",
        outcome: "gameOver",
        gameOverMessage: 
          "After resting and clearing your mind you turn back to the village center only to notice it's all missing.\n\nWas all that real?",
        scores: {
          extraversion: 4,
          conscientiousness: -2,
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
          neuroticism: 3,
        },
      },
    ],
  };

  return (
    <Scenario {...sceneData} onOptionClick={handleOptionClick} />
  );
};

export default Scene8;
