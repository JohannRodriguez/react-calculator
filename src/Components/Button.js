import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    symbol: PropTypes.string,
  }

  render () {
    return(<button name={this.props.name}>{this.props.symbol}</button>);
  }
}

