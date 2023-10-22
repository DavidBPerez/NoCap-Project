import { atom } from 'recoil';

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

export const gameStateState = atom({
  key: 'gameStateState',
  default: initialGameState,
});
