import { atom } from 'recoil';

const PlayerStatsState = atom({
  key: 'PlayerStatsState',
  default: {
    openness: 0,
    conscientiousness: 0,
    extraversion: 0,
    agreeableness: 0,
    neuroticism: 0,
  },
});

export default PlayerStatsState;
