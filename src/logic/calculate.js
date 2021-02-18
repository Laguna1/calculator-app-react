import operate from './operate';

const calculate = (calcData, buttonName) => {
  let { total, next, operation } = calcData;
  const operations = ['+', 'X', '-', '/', '%'];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (buttonName === 'AC') {
    [total, next, operation] = [null, null, null];
  }

  if (buttonName === '+/-') {
    total = (total * (-1)).toString();
    next = (next * (-1)).toString();
  }

  if (buttonName === '%') {
    next = (0.01 * total).toString();
    operation = '%';
  }

  if (buttonName === '=') {
    if (total && next && operation) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  }

  if (operations.includes(buttonName)) {
    operation = buttonName;
  } else if (operation && numbers.includes(buttonName)) {
    next = next ? next + buttonName : buttonName;
  } else if (numbers.includes(buttonName)) {
    total = total ? total + buttonName : buttonName;
  }

  return { total, next, operation };
};

export default calculate;
