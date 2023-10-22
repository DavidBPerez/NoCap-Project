import React from 'react';
import { useRecoilValue } from 'recoil';
import { PlayerStatsState } from '../atoms/PlayerStatsState';

const PlayerStats = () => {
  const playerStats = useRecoilValue(PlayerStatsState);

  const containerStyle = {
    maxWidth: '100%', // Allow the container to expand as needed
    margin: '0 auto',
  };

  const statsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap', // Allow the stats to wrap down when needed
  };

  const statStyle = {
    flex: '1 1 calc(33.33% - 1rem)', // Adjust the flex value to control the width
    margin: '0.5rem',
  };

  return (
    <div style={containerStyle}>
      <h2>Player Stats</h2>
      <div style={statsContainer}>
        <div style={statStyle}>
          <p>Openness: {playerStats.openness}</p>
        </div>
        <div style={statStyle}>
          <p>Conscientiousness: {playerStats.conscientiousness}</p>
        </div>
        <div style={statStyle}>
          <p>Extraversion: {playerStats.extraversion}</p>
        </div>
        <div style={statStyle}>
          <p>Agreeableness: {playerStats.agreeableness}</p>
        </div>
        <div style={statStyle}>
          <p>Neuroticism: {playerStats.neuroticism}</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;
