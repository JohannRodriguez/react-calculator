import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { name, symbol } = props;
  return (<button type="button" name={name}>{symbol}</button>);
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};
