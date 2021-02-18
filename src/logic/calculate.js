import operate from './operate';

const calculate = (calcData, buttonName) => {
  const { total, next, operation } = calcData;
  const operations = ['+', 'X', '-', '/'];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (buttonName === '+/-' && !next && total && total !== 'ERROR') {
    return {
      total: -total,
      next,
      operation,
    };
  }

  if (buttonName === '+/-' && next && total !== 'ERROR') {
    return {
      total,
      next: -next,
      operation,
    };
  }

  if (buttonName === '%' && next && !total) {
    return {
      total: operate(next, 0, '%'),
      next: null,
      operation,
    };
  }

  if (buttonName === '%' && !next && total) {
    return {
      total: operate(total, 0, '%'),
      next: null,
      operation,
    };
  }

  if (operations.includes(buttonName) && next && !total) {
    return {
      total: next,
      next: null,
      operation: buttonName,
    };
  }

  if (operations.includes(buttonName) && next && total && operation) {
    return {
      total: operate(total, next, operation),
      next: null,
      operation: buttonName,
    };
  }

  if (operations.includes(buttonName) && total && !next) {
    return {
      total,
      next,
      operation: buttonName,
    };
  }

  if (numbers.includes(buttonName) && ((total && operation) || (!total && !operation))) {
    return {
      total,
      next: next ? `${next}${buttonName}` : `${buttonName}`,
      operation,
    };
  }

  if (buttonName === '=' && total && next && operation) {
    return {
      total: operate(total, next, operation),
      next: null,
      operation: null,
    };
  }

  if (buttonName === '.') {
    if ((!total && !next) || (total && operation && !next)) {
      return {
        total,
        next: '0.',
        operation,
      };
    }

    if (next && !next.toString().includes('.')) {
      return {
        total,
        next: `${next}.`,
        operation,
      };
    }
  }

  return { total, next, operation };
};

export default calculate;
