import React from 'react';
import Scenario from './Scenario';
import { useRecoilState } from 'recoil';
import { PlayerStatsState, updatePlayerStats } from '../../atoms/PlayerStatsState';

const Scene12 = (props) => {
  const [playerStats, setPlayerStats] = useRecoilState(PlayerStatsState);

  const handleOptionClick = (outcome, scores) => {
    console.log('Score:', scores);
    const updatedPlayerStats = updatePlayerStats(playerStats, scores);

    setPlayerStats(updatedPlayerStats);
    props.onScene12OptionClick(outcome, updatedPlayerStats); 
  };

  const sceneData = {
    text: "You continue to learn more about your surroundings, taking in the forest's beauty and the village deeper within it. The serene atmosphere calms your mind, but also notice a glimpse of a distant red flying object. What would you like to do next?",
    options: [
      {
        label: "Stay in your current spot and continue observing",
        outcome: "gameOver",
        gameOverMessage: 
          "Out of nowhere a bird flies past your face catching you off-guard, rendering you unconscious from falling.\n\nYour adventure pauses here.",
        scores: {
          openness: 3,
          conscientiousness: 0,
          extraversion: 3,
          agreeableness: 0,
          neuroticism: 0,
        },
      },
      {
        label: "Explore deeper into the forest",
        outcome: "gameOver",
        gameOverMessage: 
          "You get pretty far, but far is nowhere in an endless enchanted forest.\n\nSomething might happen, eventually...",
        scores: {
          openness: 3,
          conscientiousness: 0,
          extraversion: 3,
          agreeableness: 0,
          neuroticism: 0,
        },
      },
      {
        label: "Visit the village plaza to see what's happening",
        outcome: "gameOver",
        gameOverMessage: 
          "You enter the plaza to notice chaos inflicting all around. Flames everywhere and a dragon above with no way out.\n\nYou died.",
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
          neuroticism: 2,
        },
      },
    ],
  };

  return (
    <Scenario {...sceneData} onOptionClick={handleOptionClick} />
  );
};

export default Scene12;
