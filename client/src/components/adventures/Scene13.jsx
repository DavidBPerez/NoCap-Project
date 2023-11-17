import React from 'react';
import Scenario from './Scenario';
import { useRecoilState } from 'recoil';
import { PlayerStatsState, updatePlayerStats } from '../../atoms/PlayerStatsState';

const Scene13 = (props) => {
  const [playerStats, setPlayerStats] = useRecoilState(PlayerStatsState);

  const handleOptionClick = (outcome, scores) => {
    console.log('Score:', scores);
    const updatedPlayerStats = updatePlayerStats(playerStats, scores);

    setPlayerStats(updatedPlayerStats);
    props.onScene13OptionClick(outcome, updatedPlayerStats); 
  };

  const sceneData = {
    text: "You decide to take a break and relax for a while. It's a peaceful moment in the forest. What's your next move?",
    options: [
      {
        label: "Continue relaxing and embrace the tranquility",
        outcome: "gameOver",
        gameOverMessage: 
          "You decide you never want to leave from where you are, letting the forest leaves engulf you.\n\nAn Adventurer's Rest.",
        scores: {
          openness: 3,
          conscientiousness: 0,
          extraversion: 3,
          agreeableness: 0,
          neuroticism: 0,
        },
      },
      {
        label: "Return to the village to see what's happening",
        outcome: "gameOver",
        gameOverMessage: 
          "On your way you notice smoke and fleeing villagers, but before you reach the town you get jumped by a dragon.\n\nYou are dead.",
        scores: {
          extraversion: 4,
          conscientiousness: -2,
          openness: 0,
          agreeableness: 0,
          neuroticism: 0,
        },
      },
      {
        label: "Explore deeper into the forest",
        outcome: "gameOver",
        gameOverMessage: 
          "You go further along your travels into the unknown.\n\nWho knows what awaits your future...",
        scores: {
          openness: 1,
          conscientiousness: 0,
          extraversion: 1,
          agreeableness: 0,
          neuroticism: 0,
        },
      },
      {
        label: "Venture nearby and enter the unknown cave",
        outcome: "scene14",
        scores: {
          openness: 1,
          conscientiousness: 0,
          extraversion: 0,
          agreeableness: 1,
          neuroticism: 0,
        },
      },
    ],
  };

  return (
    <Scenario {...sceneData} onOptionClick={handleOptionClick} />
  );
};

export default Scene13;
