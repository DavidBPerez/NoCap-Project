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
    <div className="game-container">
      <div className="header">
        <h1>Adventure Game</h1>
      </div>
      <div className="game-content">
        <div className="game-stats">
          <PlayerStats />
        </div>
        <div className="game-scene">
          <GameScene gameState={gameState} onOptionClick={handleOptionClick} />
        </div>
      </div>
      <div className="game-menu">
        <GameMenu />
      </div>
      <div className="footer">
        <p>© 2023 Adventure Game Co.</p>
      </div>
    </div>
  );
};

export default GamePage;
