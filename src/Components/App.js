import React from 'react';
import '../App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

export default class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}
