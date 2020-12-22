import React from 'react';
import '../App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

export default function App() {
  return (
    <div className="App">
      <Display />
      <ButtonPanel />
    </div>
  );
}
