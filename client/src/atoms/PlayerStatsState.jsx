import { atom } from 'recoil';

export const PlayerStatsState = atom({
  key: 'PlayerStatsState',
  default: {
    openness: 0,
    conscientiousness: 0,
    extraversion: 0,
    agreeableness: 0,
    neuroticism: 0,
  },
});

export const updatePlayerStats = (currentStats, scores) => {
  return {
    openness: currentStats.openness + scores.openness,
    conscientiousness: currentStats.conscientiousness + scores.conscientiousness,
    extraversion: currentStats.extraversion + scores.extraversion,
    agreeableness: currentStats.agreeableness + scores.agreeableness,
    neuroticism: currentStats.neuroticism + scores.neuroticism,
  };
};
