import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { gameStateState } from '../atoms/GameState';
import { PlayerStatsState } from '../atoms/PlayerStatsState';
import { saveDataToFile, loadDataFromFile } from '../controllers/FileController';

const GameMenu = () => {
  const [saveMessage, setSaveMessage] = useState('');
  const [loadMessage, setLoadMessage] = useState('');
  const [restartMessage, setRestartMessage] = useState('');
  const [gameState, setGameState] = useRecoilState(gameStateState);
  const [playerStats, setPlayerStats] = useRecoilState(PlayerStatsState);

  const navigate = useNavigate();

  const resetGame = () => {
    resetCharacterData();
    const initialGameState = {
      currentScene: 'scene1',
      playerStats: {
        openness: 0,
        conscientiousness: 0,
        extraversion: 0,
        agreeableness: 0,
        neuroticism: 0,
      },
    };

    setGameState(initialGameState);
    window.alert("Game Restarted");
    navigate('/character_creation');

    setTimeout(() => {
      setRestartMessage('');
    }, 1500);
  };

  const exitGame = () => {
    resetCharacterData();
    const initialGameState = {
      currentScene: 'scene1',
      playerStats: {
        openness: 0,
        conscientiousness: 0,
        extraversion: 0,
        agreeableness: 0,
        neuroticism: 0,
      },
    };

    setGameState(initialGameState);
    navigate('/');
  };

  const resetCharacterData = () => {
    setGameState((prevGameState) => ({
      ...prevGameState,
      selectedClass: '',
      selectedBackground: '',
      selectedReligion: '',
      selectedHobby: '',
    }));

    setPlayerStats({
      openness: 0,
      conscientiousness: 0,
      extraversion: 0,
      agreeableness: 0,
      neuroticism: 0,
    });
  };

  const saveGame = () => {
    const saveData = JSON.stringify({
      ...gameState,
      playerStats: { ...playerStats },
    });

    saveDataToFile('/cache-data/localSaves.json', saveData);
    window.alert('Game Saved!');
  };

  const loadGame = () => {
    const loadedData = loadDataFromFile('/cache-data/localSaves.json');

    if (loadedData) {
      const loadedState = JSON.parse(loadedData);

      setGameState({
        ...loadedState,
        playerStats: {
          ...playerStats,
          ...loadedState.playerStats,
        },
      });

      setPlayerStats(loadedState.playerStats);
      window.alert('Game Loaded');
    } else {
      window.alert('No saved game found.');
    }
  };

  return (
    <div>
      <h3 className="text-center pt-3 pb-2">Game Menu</h3>
      <div className="d-flex justify-content-center gap-2">
        <button className="button-outline" onClick={saveGame}>Save Game</button>
        <p>{saveMessage}</p>
        <button className="button-outline" onClick={loadGame}>Load Game</button>
        <p>{loadMessage}</p>
        <button className="button-outline" onClick={resetGame}>Restart Game</button>
        <p>{restartMessage}</p>
        <button className="button-outline" onClick={exitGame}>Exit Game</button>
      </div>
    </div>
  );
};

export default GameMenu;
