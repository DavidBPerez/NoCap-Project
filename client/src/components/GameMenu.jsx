import React from 'react';
import { Link } from 'react-router-dom';

const GameMenu = () => {
  return (
    <div>
      <h1>Game Menu</h1>
      <ul>
        <li>
          <Link to="/game">Start Game</Link>
        </li>
        <li>
          <Link to="/stats">View Stats</Link>
        </li>
        <li>
          <Link to="/exit">Exit Game</Link>
        </li>
      </ul>
    </div>
  );
};

export default GameMenu;
