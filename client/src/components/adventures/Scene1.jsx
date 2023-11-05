import React from 'react';
import Scenario from './Scenario';
import { useRecoilState } from 'recoil';
import { PlayerStatsState, updatePlayerStats } from '../../atoms/PlayerStatsState';

const Scene1 = (props) => {
  const [playerStats, setPlayerStats] = useRecoilState(PlayerStatsState);
  
  const handleOptionClick = (outcome, scores) => {
    console.log('Score:', scores);
    const updatedPlayerStats = updatePlayerStats(playerStats, scores);
    
    setPlayerStats(updatedPlayerStats);
    props.onScene1OptionClick(outcome, updatedPlayerStats); 
  };

  const sceneData = {
    text: "While walking along your UWF nature trail, you somehow step into an enchanted forest! You don't know why, but you just know it's enchanted. The rustling of leaves and chirping birds surround you. A fork in the path lies ahead. Which path will you choose to begin?",
    options: [
      {
        label: "Path of Exploration",
        outcome: "scene2",
        scores: {
          openness: 2,
          conscientiousness: -1,
          extraversion: 0,
          agreeableness: 0,
          neuroticism: 0,
        },
      },
      {
        label: "Path of Conviviality",
        outcome: "scene3",
        scores: {
          extraversion: 2,
          neuroticism: -1,
          openness: 0,
          conscientiousness: 0,
          agreeableness: 2,
        },
      },
      {
        label: "Path of Tradition",
        outcome: "scene4",
        scores: {
          agreeableness: 2,
          openness: -1,
          extraversion: 0,
          conscientiousness: 0,
          neuroticism: 0,
        },
      },
      {
        label: "Path of Caution",
        outcome: "gameOver",
        scores: {
          conscientiousness: 2,
          extraversion: -1,
          openness: -1,
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

export default Scene1;
