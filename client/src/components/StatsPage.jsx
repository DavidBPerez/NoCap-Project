import React from 'react';
import { useRecoilValue } from 'recoil';
import PlayerStatsState from '../atoms/PlayerStatsState';

const StatsPage = () => {
  const playerStats = useRecoilValue(PlayerStatsState);

  return (
    <div>
      <h1>Player Stats</h1>
      <p>Openness: {playerStats.openness}</p>
      <p>Conscientiousness: {playerStats.conscientiousness}</p>
      <p>Extraversion: {playerStats.extraversion}</p>
      <p>Agreeableness: {playerStats.agreeableness}</p>
      <p>Neuroticism: {playerStats.neuroticism}</p>
    </div>
  );
};

export default StatsPage;
