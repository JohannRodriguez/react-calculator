import React from 'react';
import PropTypes from 'prop-types';

export default class Display extends React.Component {
  static defaultProps = {
    result: '0',
  }

  static propTypes = {
    result: PropTypes.string,
  }

  render() {
    return(
      <div className="display">
        <p>{this.props.result}</p>
      </div>
    );
  }
}