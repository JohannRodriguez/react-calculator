import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import panelData from '../Data/PanelData';
import '../Styles/buttonPanel.css';

export default function ButtonPanel({ clickHandler }) {
  function handleClick(buttonName) {
    return clickHandler(buttonName);
  }

  return (
    <div className="button-panel">
      {panelData.map(panelData => (
        <div className="panel-row" key={panelData.id}>
          {panelData.rowData.map(buttonData => (
            <Button type="button" key={buttonData.id} color={buttonData.color} name={buttonData.name} clickHandler={handleClick} />
          ))}
        </div>
      ))}
    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
