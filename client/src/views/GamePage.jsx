import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import PlayerStatsState from '../atoms/PlayerStatsState';
import Scene1 from '../components/adventures/Scene1';

const GamePage = () => {
  const [playerStats, setPlayerStats] = useRecoilState(PlayerStatsState);
  const [currentScene, setCurrentScene] = useState('scene1'); // Manage current scene using state

  // Function handler for scene transitions && updating player stats
  const handleOptionClick = (outcome, scores) => {
    setPlayerStats({
      ...playerStats,
      ...scores,
    });

    // Handle scene transitions based on outcome
    if (outcome === 'nextScene') {
      // Update current scene to next
      setCurrentScene('nextScene'); // Implement transitions as needed
    }
  };

  // Render scenes based on current
  const renderScene = () => {
    switch (currentScene) {
      case 'scene1':
        return <Scene1 onScene1OptionClick={handleOptionClick} />;
      // **Add other scenes as needed
      default:
        return <div>Game Over</div>;
    }
  };

  return (
    <div>
      <h1>Game Page</h1>
      {renderScene()}
    </div>
  );
};

export default GamePage;
