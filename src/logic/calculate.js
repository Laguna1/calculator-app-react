import operate from './operate';

const calculate = (calcData, btnName) => {
  let { total, next, operation } = calcData;
  const operations = ['+', 'X', '-', '/'];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (btnName === 'AC') {
    total = null;
    next = null;
    operation = null;
  } else if (btnName === '+/-') {
    total = (total * (-1)).toString();
    next = (next * (-1)).toString();
  } else if (btnName === '%') {
    next = (0.01 * total).toString();
    operation = '%';
  } else if (btnName === '=') {
    if (total && next && operation) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  } else if (operations.includes(btnName)) {
    operation = btnName;
  } else if (operation && numbers.includes(btnName)) {
    next = next ? next + btnName : btnName;
  } else if (numbers.includes(btnName)) {
    total = total ? total + btnName : btnName;
  }
  return { total, next, operation };
};

export default calculate;
