import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { gameStateState } from '../atoms/GameState';
import { saveDataToFile, loadDataFromFile } from '../controllers/FileController';

const GameMenu = () => {
  const [saveMessage, setSaveMessage] = useState('');
  const [loadMessage, setLoadMessage] = useState('');
  const [restartMessage, setRestartMessage] = useState('');
  const [gameState, setGameState] = useRecoilState(gameStateState);

  const saveGame = () => {
    const saveData = JSON.stringify(gameState);
    saveDataToFile('/cache-data/localSaves.json', saveData);
    window.alert("Game Saved!");

    setTimeout(() => {
      setSaveMessage('');
    }, 1500);
  };

  const loadGame = () => {
    const loadedData = loadDataFromFile('/cache-data/localSaves.json');

    if (loadedData) {
      const loadedState = JSON.parse(loadedData);
      setGameState(loadedState);
      window.alert("Game Loaded");
    } else {
      setLoadMessage('No saved game found.');
    }

    setTimeout(() => {
      setLoadMessage('');
    }, 1500);
  };

  const restartGame = () => {
    const initialGameState = {
      currentScene: 'scene1',
      playerStats: {
        openness: 0,
        conscientiousness: 0,
        extraversion: 0,
        agreeableness: 0,
        neuroticism: 0,
      }
    };

    setGameState(initialGameState);
    window.alert("Game Restarted");

    setTimeout(() => {
      setRestartMessage('');
    }, 1500);
  };

  return (
    <div>
      <h3 className="text-center pt-3 pb-2">Game Menu</h3>
      <div className="d-flex justify-content-center gap-2">
        <button className="button-outline" onClick={saveGame}>Save Game</button>
        <p>{saveMessage}</p>
        <button className="button-outline" onClick={loadGame}>Load Game</button>
        <p>{loadMessage}</p>
        <button className="button-outline" onClick={restartGame}>Restart Game</button>
        <p>{restartMessage}</p>
        <Link to="/">
          <button className="button-outline">Exit Game</button>
        </Link>
      </div>
    </div>
  );
};

export default GameMenu;
