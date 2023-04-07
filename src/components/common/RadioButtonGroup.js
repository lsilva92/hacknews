import React from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function RadioButtonGroup({ radios, handleChange, radioValue }) {
  return (
    <ButtonGroup>
      {radios.map((radio, idx) => (
        <ToggleButton
          key={idx}
          id={`radio-${idx}`}
          type="radio"
          variant={radio.name === 'EN' ? 'outline-success' : 'outline-danger'}
          name="radio"
          value={radio.value}
          checked={radioValue === radio.value}
          onChange={(e) => handleChange(e)}
        >
          {radio.name}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
}
