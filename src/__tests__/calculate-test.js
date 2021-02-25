import '@testing-library/jest-dom/extend-expect';
import calculate from '../logic/calculate';

const calcData = {
  total: 1,
  next: 2,
  operation: '+',
};

const calcData1 = {
  total: 1,
  next: 5,
  operation: '%',
};

const calcData2 = {
  total: 5,
  next: null,
  operation: '%',
};

const someDataNoOperation = {
  total: 5,
  next: 7,
  operation: null,
};

const emptyData = {
  total: null,
  next: null,
  operation: null,
};

describe('Calculate Methods', () => {
  it('"+/-" functionality returns sign opposite given', () => {
    const result = calculate(calcData, '+/-');
    expect(Math.sign(result.total)).toBe(-1);
  });

  it('"AC" nullify the numbers', () => {
    const result = calculate(calcData, 'AC');
    expect(result).toEqual(emptyData);
  });

  it('"=" returns as total the result of the object operation.', () => {
    const result = calculate(calcData, '=');
    expect(result.total).toBe('3');
  });

  it('"%" returns as total the result of the object operation if next not null', () => {
    const result = calculate(calcData1, '%');
    expect(result.total).toBe('0.01');
  });

  it('"%" returns as total the result of the object operation if next null', () => {
    const result = calculate(calcData2, '%');
    expect(result.total).toBe('0.05');
  });

  it('"=" returns same object if no operation is given', () => {
    const result = calculate(someDataNoOperation, '=');
    expect(result).toEqual(someDataNoOperation);
  });

  it('Numbers functionality should add numbers to object.next', () => {
    const result = calculate(calcData, '9');
    expect(result.next).toBe('29');
  });
});
