import React from 'react';
import Scenario from './Scenario';
import { useRecoilState } from 'recoil';
import { PlayerStatsState, updatePlayerStats } from '../../atoms/PlayerStatsState';

const Scene7 = (props) => {
  const [playerStats, setPlayerStats] = useRecoilState(PlayerStatsState);

  const handleOptionClick = (outcome, scores) => {
    console.log('Score:', scores);
    const updatedPlayerStats = updatePlayerStats(playerStats, scores);

    setPlayerStats(updatedPlayerStats);
    props.onScene7OptionClick(outcome, updatedPlayerStats); 
  };

  const sceneData = {
    text: "You engage in a deep conversation with the villagers, learning about the village's rich history and the mysteries of the forest. In addition, you learn about recent dragons attacks that have occured in nearby areas. What's your next move?",
    options: [
      {
        label: "Continue the conversation and ask about the forest's secrets",
        outcome: "scene12",
        scores: {
          openness: 3,
          conscientiousness: 0,
          extraversion: -1,
          agreeableness: 0,
          neuroticism: 0,
        },
      },
      {
        label: "Share your own stories and experiences",
        outcome: "gameOver",
        gameOverMessage: 
          "After sharing your stories the the villagers became confused and afraid of you, accusing you of witchcraft.\n\nBurn the witch!",
        scores: {
          agreeableness: 4,
          conscientiousness: 0,
          extraversion: 0,
          openness: -2,
          neuroticism: 0,
        },
      },
      {
        label: "Bid farewell and explore the forest",
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

export default Scene7;
