import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const a = Big(numberOne);
  const b = Big(numberTwo);
  let result;

  switch (operation) {
    case '+':
      result = a.plus(b);
      break;
    case '-':
      result = a.minus(b);
      break;
    case 'x':
      result = a.times(b);
      break;
    case '/':
      try {
        result = a.div(b);
      } catch {
        result = 'ERROR';
      }
      break;
    case '%':
      result = a.div(100);
      break;
    case '+/-':
      result = a.times(-1);
      break;
    default:
      result = 0;
  }

  return result.toString();
};

export default operate;
