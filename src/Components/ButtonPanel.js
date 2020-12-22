import React from 'react';
import Button from './Button';
import panelData from './Data/PanelData';

export default function ButtonPanel() {
  return (
    <div className="button-panel">
      {panelData.map(panelData => (
        <div key={panelData.id}>
          {panelData.rowData.map(buttonData => (
            <Button type="button" key={buttonData.id} name={buttonData.name} symbol={buttonData.symbol} />
          ))}
        </div>
      ))}
    </div>
  );
}
