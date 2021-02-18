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
      result = b === '0' ? 'undefined' : a.div(b);
      break;
    case '%':
      result = a.div(100);
      break;
    default:
      result = '';
  }

  return result.toString();
};

export default operate;
