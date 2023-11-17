import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { gameStateState } from '../atoms/GameState';
import PlayerStats from '../components/PlayerStats';
import { PlayerStatsState, updatePlayerStats } from '../atoms/PlayerStatsState';
import GameScene from '../components/GameScene';
import GameMenu from '../components/GameMenu';
import Tutorial from '../components/Tutorial';
import './Css/GamePage.css';

const GamePage = () => {
  const [gameState, setGameState] = useRecoilState(gameStateState);
  const [playerStats, setPlayerStats] = useRecoilState(PlayerStatsState);
  const [tutorialCompleted, setTutorialCompleted] = useState(false);

  const handleOptionClick = (outcome, scores) => {
    console.log('Selected Scores:', scores);

    const updatedPlayerStats = updatePlayerStats(playerStats, scores);

    console.log('Updated Player Stats:', updatedPlayerStats);

    const updatedGameState = {
      ...gameState,
      playerStats: updatedPlayerStats,
    };

    if (outcome === 'gameOver') {
      updatedGameState.currentScene = 'gameOver';
    } else {
      updatedGameState.currentScene = outcome;
    }

    setGameState(updatedGameState);
  };

  const handleTutorialComplete = () => {
    setTutorialCompleted(true);
  };

  const handleSkipTutorial = () => {
    setTutorialCompleted(true);
    setGameState((prevGameState) => ({
      ...prevGameState,
      currentScene: 'scene1',
    }));
  };

  return (
    <div id="game-container" className="d-flex flex-column">
      <div className="header">
        <h1>Complacara Conundrum</h1>
      </div>
      <div id="game-content" className="flex-col-align-center m-0">
        <div id="main-content">
          <div id="game-stats" className="text-center">
            <PlayerStats />
          </div>
          <div className="fancy-border" />
          <div id="game-scene" className="text-center">
            {tutorialCompleted ? (
              <GameScene onOptionClick={handleOptionClick} />
            ) : (
              <Tutorial onComplete={handleTutorialComplete} onSkip={handleSkipTutorial} />
            )}
          </div>
          <div className="fancy-border" />
        </div>
        <div id="game-menu" className="d-flex flex-row justify-content-center align-items-center pb-3">
          <GameMenu />
        </div>
      </div>
      <div className="footer">
        <p>© 2023 NoCap</p>
      </div>
    </div>
  );
};

export default GamePage;
