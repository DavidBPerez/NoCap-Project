import React from 'react';

const calculatePersonality = (stats) => {
  const openness = stats.openness;
  const conscientiousness = stats.conscientiousness;
  const extraversion = stats.extraversion;
  const agreeableness = stats.agreeableness;
  const neuroticism = stats.neuroticism;

  const personalityTraits = [];

  if (openness >= 2) {
    personalityTraits.push('OPEN-MINDED\nYou have a curious and open approach to life, embracing new experiences and ideas.');
  }
  if (conscientiousness >= 2) {
    personalityTraits.push('CONSCIENTIOUS\nYou are diligent and responsible, paying attention to details and staying organized.');
  }
  if (extraversion >= 2) {
    personalityTraits.push('EXTRAVERTED\nYou are outgoing and social, enjoying interactions with others and seeking new experiences.');
  }
  if (agreeableness >= 2) {
    personalityTraits.push('AGREEABLE\nYou are kind and cooperative, valuing harmonious relationships and empathy.');
  }
  if (neuroticism >= 2) {
    personalityTraits.push('EMOTIONALLY STABLE\nYou remain calm and composed even in challenging situations.');
  }
  if (personalityTraits.length === 0) {
    personalityTraits.push('BALANCED\nYour personality traits are in harmony, creating a balanced approach to life.');
  }

  return personalityTraits.join('\n');
};

const GameOver = ({ playerStats }) => {
  const personality = calculatePersonality(playerStats);

  return (
    <div className="game-over">
      <h2>Game Over</h2>
      <p>Your overall personality based on your choices:</p>
      <p style={{ whiteSpace: 'pre-line' }}>{personality}</p>
    </div>
  );
};

export default GameOver;
