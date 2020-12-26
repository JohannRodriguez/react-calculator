import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../Logic/Calculate';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { total, next, operation } = this.state;
    this.setState(calculate({ total, next, operation }, buttonName));
  }

  render() {
    const { total, next } = this.state;
    return (
      <>
        <Display result={next || total || '0'} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}
