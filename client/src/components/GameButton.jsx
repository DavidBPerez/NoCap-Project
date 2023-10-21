import React from 'react';

export default function GameButton(props) {
  return (
    <button className="custom-scenario-button" onClick={props.onClick}>
      {props.label}
    </button>
  );
}
