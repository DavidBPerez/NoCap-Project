import React from 'react';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { gameStateState } from '../atoms/GameState';
import PlayerStats from '../components/PlayerStats';
import { PlayerStatsState } from '../atoms/PlayerStatsState';
import GameScene from '../components/GameScene';
import GameMenu from '../components/GameMenu';
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

    if (outcome === 'gameOver') {
      updatedGameState.currentScene = 'gameOver';
    } else {
      updatedGameState.currentScene = outcome;
    }

    setGameState(updatedGameState);
    setPlayerStats(updatedPlayerStats);
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
            <GameScene gameState={gameState} onOptionClick={handleOptionClick} />
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
