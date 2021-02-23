import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => (
  <div>
    <div className="btn-row">
      <Button handleClick={clickHandler} color="grey" buttonName="AC" />
      <Button handleClick={clickHandler} color="grey" buttonName="+/-" />
      <Button handleClick={clickHandler} color="grey" buttonName="%" />
      <Button handleClick={clickHandler} buttonName="/" />
    </div>

    <div className="btn-row">
      <Button handleClick={clickHandler} color="grey" buttonName="7" />
      <Button handleClick={clickHandler} color="grey" buttonName="8" />
      <Button handleClick={clickHandler} color="grey" buttonName="9" />
      <Button handleClick={clickHandler} buttonName="x" />
    </div>

    <div className="btn-row">
      <Button handleClick={clickHandler} color="grey" buttonName="4" />
      <Button handleClick={clickHandler} color="grey" buttonName="5" />
      <Button handleClick={clickHandler} color="grey" buttonName="6" />
      <Button handleClick={clickHandler} buttonName="-" />
    </div>

    <div className="btn-row">
      <Button handleClick={clickHandler} color="grey" buttonName="1" />
      <Button handleClick={clickHandler} color="grey" buttonName="2" />
      <Button handleClick={clickHandler} color="grey" buttonName="3" />
      <Button handleClick={clickHandler} buttonName="+" />
    </div>

    <div className="btn-row">
      <Button handleClick={clickHandler} color="grey" buttonName="0" />
      <Button handleClick={clickHandler} color="grey" buttonName="." />
      <Button handleClick={clickHandler} buttonName="=" />
    </div>
  </div>
);

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
