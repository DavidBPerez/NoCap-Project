import React from 'react';
import Scenario from './Scenario';
import { useRecoilState } from 'recoil';
import { PlayerStatsState, updatePlayerStats } from '../../atoms/PlayerStatsState';

const Scene4 = (props) => {
  const [playerStats, setPlayerStats] = useRecoilState(PlayerStatsState);

  const handleOptionClick = (outcome, scores) => {
    console.log('Score:', scores);
    const updatedPlayerStats = updatePlayerStats(playerStats, scores);

    setPlayerStats(updatedPlayerStats);
    props.onScene4OptionClick(outcome, updatedPlayerStats); 
  };

  const sceneData = {
    text: "The forest becomes darker as you venture further. Moonlight barely filters through the thick canopy. You come across a fork in your path, but a mysterious structure with a door lies to the side. How will you proceed?",
    options: [
      {
        label: "Open the door and enter the unknown room",
        outcome: "scene16",
        scores: { 
          openness: 2, 
          conscientiousness: 0,
          extraversion: 0,
          agreeableness: 2,
          neuroticism: 0,
        },
      },
      {
        label: "Turn back and explore more of a cave you saw along the way",
        outcome: "scene10",
        scores: {
          openness: 0,
          conscientiousness: 2,
          extraversion: 2,
          agreeableness: 0,
          neuroticism: 0,
        },
      },
      {
        label: "Knock on the door to see if anyone is inside",
        outcome: "scene15",
        scores: {
          openness: 0,
          conscientiousness: 0,
          extraversion: 0, 
          agreeableness: 0,
          neuroticism: 2,
        },
      },
      {
        label: "Sit and meditate, contemplating the choices of the road",
        outcome: "scene8",
        scores: {
          openness: 1,
          conscientiousness: 0,
          extraversion: 1,
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

export default Scene4;
