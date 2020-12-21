import React from 'react';
import Button from './Button';

export default class ButtonPanel extends React.Component {
  render() {
    return(
      <div className="button-panel">
          <div className="row">
            <Button name='all-clear' symbol='AC' />
            <Button name='change-sign' symbol='+/-' />
            <Button name='percentage' symbol='%' />
            <Button name='division' symbol='÷' />
          </div>
          <div className="row">
            <Button name='seven' symbol='7' />
            <Button name='eight' symbol='8' />
            <Button name='nine' symbol='9' />
            <Button name='multiplication' symbol='x' />
          </div>
          <div className="row">
            <Button name='four' symbol='4' />
            <Button name='five' symbol='5' />
            <Button name='six' symbol='6' />
            <Button name='minus' symbol='-' />
          </div>
          <div className="row">
            <Button name='one' symbol='1' />
            <Button name='two' symbol='2' />
            <Button name='three' symbol='3' />
            <Button name='plus' symbol='+' />
          </div>
          <div className="row">
            <Button name='zero' symbol='0' />
            <Button name='decimal' symbol='.' />
            <Button name='equals' symbol='=' />
          </div>
      </div>
    );
  }
}