import React from 'react';
import { useRecoilValue } from 'recoil';
import { gameStateState } from '../atoms/GameState';
import Scene1 from './adventures/Scene1';
import Scene2 from './adventures/Scene2';
import Scene3 from './adventures/Scene3';
import Scene4 from './adventures/Scene4';

const GameScene = ({ onOptionClick }) => {
  const gameState = useRecoilValue(gameStateState);

  const playerStats = gameState.playerStats;

  const handleSceneTransition = (outcome) => {
    onOptionClick(outcome, playerStats);
  };

  switch (gameState.currentScene) {
    case 'scene1':
      return <Scene1 onScene1OptionClick={handleSceneTransition} />;
    case 'scene2':
      return <Scene2 onScene2OptionClick={handleSceneTransition} />;
    case 'scene3':
      return <Scene3 onScene3OptionClick={handleSceneTransition} />;
    case 'scene4':
      return <Scene4 onScene4OptionClick={handleSceneTransition} />;
    default:
      return <div>Unknown Scene</div>;
  }
};

export default GameScene;
