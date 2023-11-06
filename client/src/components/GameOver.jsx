import React from 'react';

const calculatePersonality = (stats) => {
  const totalScore = stats.openness + stats.conscientiousness + stats.extraversion + stats.agreeableness + stats.neuroticism;
  const maxScore = 10;

  const scaledOpenness = (stats.openness / totalScore) * maxScore;
  const scaledConscientiousness = (stats.conscientiousness / totalScore) * maxScore;
  const scaledExtraversion = (stats.extraversion / totalScore) * maxScore;
  const scaledAgreeableness = (stats.agreeableness / totalScore) * maxScore;
  const scaledNeuroticism = (stats.neuroticism / totalScore) * maxScore;

  const personalityTraits = [];

  if (scaledOpenness >= 4) {
    personalityTraits.push('High Openness: You have a curious and open approach to life, embracing new experiences and ideas.');
  } else if (scaledOpenness >= 2) {
    personalityTraits.push('Moderate Openness: You are open to new experiences and ideas.');
  } else {
    personalityTraits.push('Low Openness: You tend to stick to familiar experiences and ideas.');
  }

  if (scaledConscientiousness >= 4) {
    personalityTraits.push('High Conscientiousness: You are diligent and responsible, paying attention to details and staying organized.');
  } else if (scaledConscientiousness >= 2) {
    personalityTraits.push('Moderate Conscientiousness: You are moderately diligent and organized.');
  } else {
    personalityTraits.push('Low Conscientiousness: You tend to be spontaneous and unstructured.');
  }

  if (scaledExtraversion >= 4) {
    personalityTraits.push('High Extraversion: You are outgoing and social, enjoying interactions with others and seeking new experiences.');
  } else if (scaledExtraversion >= 2) {
    personalityTraits.push('Moderate Extraversion: You are moderately outgoing and sociable.');
  } else {
    personalityTraits.push('Low Extraversion: You prefer solitude and quieter experiences.');
  }

  if (scaledAgreeableness >= 4) {
    personalityTraits.push('High Agreeableness: You are kind and cooperative, valuing harmonious relationships and empathy.');
  } else if (scaledAgreeableness >= 2) {
    personalityTraits.push('Moderate Agreeableness: You are moderately kind and cooperative.');
  } else {
    personalityTraits.push('Low Agreeableness: You may prioritize your interests over others.');
  }

  if (scaledNeuroticism >= 4) {
    personalityTraits.push('High Neuroticism: You may experience mood swings and emotional instability in challenging situations.');
  } else if (scaledNeuroticism >= 2) {
    personalityTraits.push('Moderate Neuroticism: You are moderately emotionally stable.');
  } else {
    personalityTraits.push('Low Neuroticism: You remain calm and composed even in challenging situations.');
  }

  if (personalityTraits.length === 0) {
    personalityTraits.push('Balanced: Your personality traits are in harmony, creating a balanced approach to life.');
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
