import React from 'react';
import { useRecoilValue } from 'recoil';
import { gameStateState } from '../atoms/GameState';
import GameOver from './GameOver';
import Scene1 from './adventures/Scene1';
import Scene2 from './adventures/Scene2';
import Scene3 from './adventures/Scene3';
import Scene4 from './adventures/Scene4';
import Scene5 from './adventures/Scene5';
import Scene6 from './adventures/Scene6';
import Scene7 from './adventures/Scene7';
import Scene8 from './adventures/Scene8';
import Scene9 from './adventures/Scene9';
import Scene10 from './adventures/Scene10';
import Scene11 from './adventures/Scene11';
import Scene12 from './adventures/Scene12';
import Scene13 from './adventures/Scene13';
import Scene14 from './adventures/Scene14';
import Scene15 from './adventures/Scene15';
import Scene16 from './adventures/Scene16';

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
    case 'scene5':
      return <Scene5 onScene5OptionClick={handleSceneTransition} />;
    case 'scene6':
      return <Scene6 onScene6OptionClick={handleSceneTransition} />;
    case 'scene7':
      return <Scene7 onScene7OptionClick={handleSceneTransition} />;
    case 'scene8':
      return <Scene8 onScene8OptionClick={handleSceneTransition} />;
    case 'scene9':
      return <Scene9 onScene9OptionClick={handleSceneTransition} />;
    case 'scene10':
      return <Scene10 onScene10OptionClick={handleSceneTransition} />;
    case 'scene11':
      return <Scene11 onScene11OptionClick={handleSceneTransition} />;
    case 'scene12':
      return <Scene12 onScene12OptionClick={handleSceneTransition} />;
    case 'scene13':
      return <Scene13 onScene13OptionClick={handleSceneTransition} />;
    case 'scene14':
      return <Scene14 onScene14OptionClick={handleSceneTransition} />;
    case 'scene15':
      return <Scene15 onScene15OptionClick={handleSceneTransition} />;
    case 'scene16':
      return <Scene16 onScene16OptionClick={handleSceneTransition} />;
    case 'gameOver':
      return <GameOver playerStats={gameState.playerStats} />;
    default:
      return <div>Unknown Scene</div>;
  }
};

export default GameScene;
