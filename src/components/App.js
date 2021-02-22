import '../App.css';
import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import NavBar from './Navbar';

const App = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = buttonName => {
    const { total, next, operation } = state;
    const calcData = { total, next, operation };
    const result = calculate(calcData, buttonName);

    setState({
      total: result.total,
      next: result.next,
      operation: result.operation,
    });
  };

  const { total, next, operation } = state;
  const result = next || total || '0';

  return (
    <div className="">
      <NavBar />
      <Display result={result.toString()} operation={operation} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
