import React, { useState } from 'react';
import styled from 'styled-components';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const Container = styled.div`

  display: flex;
  flex-direction: column;
  min-width: 700px;
  align-items: center;
  justify-content: center;
`;

const Calculator = () => {
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
    <Container>
      <Display result={result.toString()} operation={operation} />
      <ButtonPanel clickHandler={handleClick} />
    </Container>
  );
};

export default Calculator;
