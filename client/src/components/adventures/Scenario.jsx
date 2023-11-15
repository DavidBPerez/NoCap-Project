import React, { useState } from 'react';
import PickButton from './PickButton';

export default function Scenario(props) {
  const { text, options, onOptionClick } = props;
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionClick = (outcome, scores) => {
    if (!selectedOptions.includes(outcome)) {
      setSelectedOptions([...selectedOptions, outcome]);
      onOptionClick(outcome, scores);
    } else {
      window.alert('This option has already been chosen. Please select a different path.');
    }
  };

  return (
    <div className="scenario">
      <p>{text}</p>
      <div className="options">
        {options.map((option, index) => (
          <div key={index} className="button-container">
            <PickButton
              label={option.label}
              onClick={() => handleOptionClick(option.outcome, option.scores)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
