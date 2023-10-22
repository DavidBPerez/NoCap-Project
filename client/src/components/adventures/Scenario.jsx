import React from 'react';
import PickButton from './PickButton';

export default function Scenario(props) {
  const { text, options, onOptionClick } = props;

  return (
    <div className="scenario">
      <p>{text}</p>
      <div className="options">
        {options.map((option, index) => (
          <div key={index} className="button-container">
            <PickButton
              label={option.label}
              onClick={() => onOptionClick(option.outcome, option.scores)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
