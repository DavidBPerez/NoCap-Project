import React from 'react';
import Scenario from './Scenario';
import { useRecoilState } from 'recoil';
import { PlayerStatsState, updatePlayerStats } from '../../atoms/PlayerStatsState';

const Scene14 = (props) => {
  const [playerStats, setPlayerStats] = useRecoilState(PlayerStatsState);

  const handleOptionClick = (outcome, scores) => {
    console.log('Score:', scores);
    const updatedPlayerStats = updatePlayerStats(playerStats, scores);

    setPlayerStats(updatedPlayerStats);
    props.onScene14OptionClick(outcome, updatedPlayerStats); 
  };

  const sceneData = {
    text: "You decide to explore more of the cave, curious about what you might find. The cave seems to go on endlessly. What's your next move?",
    options: [
      {
        label: "Keep exploring deeper into the cave",
        outcome: "gameOver",
        gameOverMessage: 
          "You get so far that you cannot see light anymore. You bump into something that might've not been very pleasant.\n\nYou perish.",
        scores: {
          openness: 0,
          conscientiousness: 3,
          extraversion: 3,
          agreeableness: 0,
          neuroticism: 0,
        },
      },
      {
        label: "Start making your way back outside",
        outcome: "scene10",
        scores: {
          openness: 0, // 1
          conscientiousness: 0,
          extraversion: 0, // 1
          agreeableness: 0,
          neuroticism: 0,
        },
      },
      {
        label: "Return back to a cabin you saw earlier and see if anything is inside yet",
        outcome: "scene15",
        scores: {
          openness: 0,
          conscientiousness: 0,
          extraversion: 0,
          agreeableness: 0,
          neuroticism: 0, // 1
        },
      },
      {
        label: "Take a breather and relax on a rock for a while",
        outcome: "gameOver",
        gameOverMessage: 
          "As you go to push you weight on a nearby resting rock it collapses and you fall through an oddly inconvenient hole.\n\nWho put that there?",
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
