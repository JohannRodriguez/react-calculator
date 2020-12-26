import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/button.css';

export default function Button(props) {
  const { name, clickHandler, color } = props;
  function handleClick(name) {
    return clickHandler(name);
  }

  return (<button type="button" className={color} onClick={() => handleClick(name)} name={name}>{name}</button>);
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
