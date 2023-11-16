import React from 'react';
import Scenario from './Scenario';
import { useRecoilState } from 'recoil';
import { PlayerStatsState, updatePlayerStats } from '../../atoms/PlayerStatsState';

const Scene2 = (props) => {
  const [playerStats, setPlayerStats] = useRecoilState(PlayerStatsState);

  const handleOptionClick = (outcome, scores) => {
    console.log('Score:', scores);
    const updatedPlayerStats = updatePlayerStats(playerStats, scores);

    setPlayerStats(updatedPlayerStats);
    props.onScene2OptionClick(outcome, updatedPlayerStats); 
  };

  const sceneData = {
    text: "After traveling, you reach a quaint village. There are some villagers you mistake for other students who invite you to a grand feast! You become not only confused but also curious about the thought. What will you do?",
    options: [
      {
        label: "Perform a Dazzling Performance to amuse the villagers",
        outcome: "scene5",
        scores: {
          extraversion: 2,
          conscientiousness: -1,
          openness: 0,
          agreeableness: 0,
          neuroticism: 0,
        },
      },
      {
        label: "Offer helpful contributions around town",
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
        label: "Start deep conversations with the locals",
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
        label: "Slip away for some low-key observance",
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
