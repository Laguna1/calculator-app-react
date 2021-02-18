import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => (
  <div>
    <div>
      <Button handleClick={clickHandler} buttonName="AC" />
      <Button handleClick={clickHandler} buttonName="+/-" />
      <Button handleClick={clickHandler} buttonName="%" />
      <Button handleClick={clickHandler} buttonName="/" />
    </div>

    <div>
      <Button handleClick={clickHandler} buttonName="7" />
      <Button handleClick={clickHandler} buttonName="8" />
      <Button handleClick={clickHandler} buttonName="9" />
      <Button handleClick={clickHandler} buttonName="X" />
    </div>

    <div>
      <Button handleClick={clickHandler} buttonName="4" />
      <Button handleClick={clickHandler} buttonName="5" />
      <Button handleClick={clickHandler} buttonName="6" />
      <Button handleClick={clickHandler} buttonName="-" />
    </div>

    <div>
      <Button handleClick={clickHandler} buttonName="1" />
      <Button handleClick={clickHandler} buttonName="2" />
      <Button handleClick={clickHandler} buttonName="3" />
      <Button handleClick={clickHandler} buttonName="+" />
    </div>

    <div>
      <Button handleClick={clickHandler} buttonName="0" />
      <Button handleClick={clickHandler} buttonName="." />
      <Button handleClick={clickHandler} buttonName="=" />
    </div>
  </div>
);

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
