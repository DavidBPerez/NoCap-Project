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
    // Logic to save game state to localSaves
    const saveData = JSON.stringify(gameState);
    // Use FileController to save data to a file
    saveDataToFile('/cache-data/localSaves.json', saveData);
    setSaveMessage('Game saved.');

    // Clear the message after 1.5 seconds
    setTimeout(() => {
      setSaveMessage('');
    }, 1500);
  };

  const loadGame = () => {
    // Load game state from localSaves
    const loadedData = loadDataFromFile('/cache-data/localSaves.json');

    if (loadedData) {
      const loadedState = JSON.parse(loadedData);
      // Set loaded state
      setGameState(loadedState);
      setLoadMessage('Game loaded.');
    } else {
      setLoadMessage('No saved game found.');
    }

    // Clear the message after 1.5 seconds
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
    setRestartMessage('Game restarted.');

    // Clear the message after 1.5 seconds
    setTimeout(() => {
      setRestartMessage('');
    }, 1500);
  };

  return (
    <div>
      <h3>Game Menu</h3>
      <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
        <li style={{ marginRight: '1rem' }}>
          <button onClick={saveGame}>Save Game</button>
          <p>{saveMessage}</p>
        </li>
        <li style={{ marginRight: '1rem' }}>
          <button onClick={loadGame}>Load Game</button>
          <p>{loadMessage}</p>
        </li>
        <li style={{ marginRight: '1rem' }}>
          <button onClick={restartGame}>Restart Game</button>
          <p>{restartMessage}</p>
        </li>
        <li>
          <Link to="/">
            <button>Exit Game</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default GameMenu;
