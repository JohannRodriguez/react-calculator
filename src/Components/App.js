import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../Logic/Calculate';

calculate({ total: 15, next: 15, operation: '+/-' }, '+/-');

export default function App() {
  return (
    <>
      <Display />
      <ButtonPanel />
    </>
  );
}
