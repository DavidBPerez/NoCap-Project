import React from 'react';
import Scenario from './Scenario';
import { useRecoilState } from 'recoil';
import { PlayerStatsState, updatePlayerStats } from '../../atoms/PlayerStatsState';

const Scene9 = (props) => {
  const [playerStats, setPlayerStats] = useRecoilState(PlayerStatsState);

  const handleOptionClick = (outcome, scores) => {
    console.log('Score:', scores);
    const updatedPlayerStats = updatePlayerStats(playerStats, scores);

    setPlayerStats(updatedPlayerStats);
    props.onScene9OptionClick(outcome, updatedPlayerStats); 
  };

  const sceneData = {
    text: "As you follow a path of colorful flowers, it leads you deeper into the forest. The enchanting yet more ambiguous ambiance continues. What's your next move?",
    options: [
      {
        label: "Continue following the colorful path",
        outcome: "gameOver",
        gameOverMessage: 
          "You keep going as it gets more entrancing until you find you're in too deep and succumb to the most colorful flower there.\n\nDid you feed him Seymour?",
        scores: {
          openness: 0,
          conscientiousness: 3,
          extraversion: 3,
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
