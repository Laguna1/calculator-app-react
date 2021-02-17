import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const [a, b] = [Big(numberOne), Big(numberTwo)];

  switch (operation) {
    case '+':
      return a.plus(b);
    case '-':
      return a.minus(b);
    case 'x':
      return a.times(b);
    case '/':
      if (b === 0) {
        return 0;
      }
      return a.div(b);
    case '%':
      return a.div(100).times(b);
    default:
      return '0';
  }
};

export default operate;
