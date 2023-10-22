import React from 'react';

const buttonStyle = {
  width: '200px',
  height: 'auto',
  textAlign: 'center',
  border: '1px solid #ccc',
  borderRadius: '4px',
  cursor: 'pointer',
  wordWrap: 'break-word',
};

export default function PickButton(props) {
  return (
    <button style={buttonStyle} onClick={props.onClick}>
      {props.label}
    </button>
  );
}
