import React from 'react';
import PropTypes from 'prop-types';

function Button({
  buttonName, color, wide, handleClick,
}) {
  const className = `button ${color}`;

  return (
    <button
      name={buttonName}
      value={buttonName}
      type="button"
      className={className}
      style={{ width: wide ? '50%' : '25%' }}
      onClick={() => {
				handleClick(buttonName); // eslint-disable-line
      }}
    >
      {buttonName}
    </button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;
