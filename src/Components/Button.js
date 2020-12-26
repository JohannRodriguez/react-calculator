import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { name, clickHandler } = props;
  function handleClick(name) {
    return clickHandler(name);
  }

  return (<button type="button" onClick={() => handleClick(name)} name={name}>{name}</button>);
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
