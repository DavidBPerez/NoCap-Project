import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { gameStateState } from '../atoms/GameState';
import PlayerStats from '../components/PlayerStats';
import GameScene from '../components/GameScene';
import GameMenu from '../components/GameMenu';
import { PlayerStatsState } from '../atoms/PlayerStatsState';
import './Css/GamePage.css';

const GamePage = () => {
  const [gameState, setGameState] = useRecoilState(gameStateState);
  const setPlayerStats = useSetRecoilState(PlayerStatsState);

  const handleOptionClick = (outcome, scores) => {
    const updatedPlayerStats = {
      openness: gameState.playerStats.openness + scores.openness,
      conscientiousness: gameState.playerStats.conscientiousness + scores.conscientiousness,
      extraversion: gameState.playerStats.extraversion + scores.extraversion,
      agreeableness: gameState.playerStats.agreeableness + scores.agreeableness,
      neuroticism: gameState.playerStats.neuroticism + scores.neuroticism,
    };

    const updatedGameState = {
      ...gameState,
      playerStats: updatedPlayerStats,
    };

    if (outcome === 'GameOver') {
      // Handle game over condition or scene
    } else {
      updatedGameState.currentScene = outcome;
    }

    setGameState(updatedGameState);
    setPlayerStats(updatedPlayerStats);
  };

  return (
    <div id="game-container">
      <div className="header">
        <h1>Complacara Conundrum</h1>
      </div>
      <div id="game-content" className="flex-col-align-center">
        <div id="game-stats" className="text-center">
          <PlayerStats />
        </div>
        <div id="game-scene" className="text-center">
          <GameScene gameState={gameState} onOptionClick={handleOptionClick} />
        </div>
        <div id="game-menu">
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
