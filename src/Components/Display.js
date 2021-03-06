import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/display.css';

export default function Display(props) {
  const { result } = props;
  return (
    <div className="display">
      <p>{result}</p>
    </div>
  );
}

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};
