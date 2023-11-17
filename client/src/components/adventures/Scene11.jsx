import React from 'react';
import Scenario from './Scenario';
import { useRecoilState } from 'recoil';
import { PlayerStatsState, updatePlayerStats } from '../../atoms/PlayerStatsState';

const Scene11 = (props) => {
  const [playerStats, setPlayerStats] = useRecoilState(PlayerStatsState);

  const handleOptionClick = (outcome, scores) => {
    console.log('Score:', scores);
    const updatedPlayerStats = updatePlayerStats(playerStats, scores);

    setPlayerStats(updatedPlayerStats);
    props.onScene11OptionClick(outcome, updatedPlayerStats); 
  };

  const sceneData = {
    text: "You decide to climb the tall tree to get a better view of your surroundings. From the top, you can see the forest's beauty. What would you like to do next?",
    options: [
      {
        label: "Stay up the tree and enjoy the view",
        outcome: "scene12",
        scores: {
          openness: 1,
          conscientiousness: 0,
          extraversion: 1,
          agreeableness: 0,
          neuroticism: 0,
        },
      },
      {
        label: "Descend back down and continue exploring the forest",
        outcome: "scene9",
        scores: {
          openness: 0, // 1
          conscientiousness: 0,
          extraversion: 0, // 1
          agreeableness: 0,
          neuroticism: 0,
        },
      },
      {
        label: "Use your vantage point to find points of interest",
        outcome: "scene12",
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

export default Scene11;
