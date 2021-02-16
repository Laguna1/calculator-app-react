import PropTypes from 'prop-types';

const Button = props => {
  const { buttonName } = props;
  return <p>{buttonName}</p>;
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default Button;
