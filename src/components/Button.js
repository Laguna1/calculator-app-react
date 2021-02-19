import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { buttonName, handleClick } = props;
  return (
    <button
      type="button"
      onClick={() => {
        handleClick(buttonName);
      }}
      value={buttonName}
    >
      {buttonName}
    </button>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  buttonName: '',
  handleClick: undefined,
};

export default Button;
