import React from 'react';
import GameButton from '../GameButton';

export default function Scenario(props) {
  const { text, options, onOptionClick } = props;

  return (
    <div className="scenario">
      <p>{text}</p>
      <div className="options">
        {options.map((option, index) => (
          <GameButton
            key={index}
            label={option.label}
            onClick={() => onOptionClick(option.outcome)}
          />
        ))}
      </div>
    </div>
  );
}
