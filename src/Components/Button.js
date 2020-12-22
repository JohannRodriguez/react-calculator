import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { name } = props;
  return (<button type="button" name={name}>{name}</button>);
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};
