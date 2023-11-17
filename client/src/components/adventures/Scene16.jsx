import React from 'react';
import Scenario from './Scenario';
import { useRecoilState } from 'recoil';
import { PlayerStatsState, updatePlayerStats } from '../../atoms/PlayerStatsState';

const Scene16 = (props) => {
  const [playerStats, setPlayerStats] = useRecoilState(PlayerStatsState);

  const handleOptionClick = (outcome, scores) => {
    console.log('Score:', scores);
    const updatedPlayerStats = updatePlayerStats(playerStats, scores);

    setPlayerStats(updatedPlayerStats);
    props.onScene16OptionClick(outcome, updatedPlayerStats); 
  };

  const sceneData = {
    text: "You enter the mysterious room, finding it to be a quiet and serene place. It might the perfect spot for meditation and contemplation (if it didn't seem so unsettling). What's your next move?",
    options: [
      {
        label: "Sit and meditate, contemplating the choices of the road",
        outcome: "gameOver",
        gameOverMessage: 
          "As you meditate you notice an odd feeling, as if the house is moving.\n\nThe Mimic won this time.",
        scores: {
          openness: 3,
          conscientiousness: 0,
          extraversion: 3,
          agreeableness: 0,
          neuroticism: 0,
        },
      },
      {
        label: "Explore the surroundings of the mysterious room",
        outcome: "gameOver",
        gameOverMessage: 
          "Through searching the room you notice a very organ looking piece of furniture.\n\nMistakes were made.",
        scores: {
          openness: 3,
          conscientiousness: 0,
          extraversion: 3,
          agreeableness: 0,
          neuroticism: 0,
        },
      },
      {
        label: "Play cautiously and leave for the future journeys ahead",
        outcome: "gameOver",
        gameOverMessage: 
          "You go further along your travels into the unknown.\n\nWho knows what awaits your future...",
        scores: {
          openness: 0,
          conscientiousness: 2,
          extraversion: 0,
          agreeableness: 0,
          neuroticism: 0,
        },
      },
      {
        label: "Take a break and relax for a while",
        outcome: "gameOver",
        gameOverMessage: 
          "As lay back to rest you notice the ceiling is moving, and so are you.\n\nNever trust a fake house in the woods.",
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

export default Scene16;
