import React from 'react';

const calculatePersonality = (stats) => {
  const openness = stats.openness;
  const conscientiousness = stats.conscientiousness;
  const extraversion = stats.extraversion;
  const agreeableness = stats.agreeableness;
  const neuroticism = stats.neuroticism;

  const personalityTraits = [];

  if (openness >= 2) {
    personalityTraits.push('Open-minded');
  }
  if (conscientiousness >= 2) {
    personalityTraits.push('Conscientious');
  }
  if (extraversion >= 2) {
    personalityTraits.push('Extraverted');
  }
  if (agreeableness >= 2) {
    personalityTraits.push('Agreeable');
  }
  if (neuroticism >= 2) {
    personalityTraits.push('Emotionally Stable');
  }

  if (personalityTraits.length === 0) {
    personalityTraits.push('Balanced');
  }

  return personalityTraits.join(', ');
};

const GameOver = ({ playerStats }) => {
  const personality = calculatePersonality(playerStats);

  return (
    <div className="game-over">
      <h2>Game Over</h2>
      <p>Your overall personality based on your choices:</p>
      <p>{personality}</p>
    </div>
  );
};

export default GameOver;
