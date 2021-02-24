import operate from '../logic/operate';

describe('operate', () => {
  it('Returns the sum of two numbers when inputes "+" operator', () => {
    expect(operate('10', '12', '+')).toBe('22');
  });

  it('Returns the difference between two numbers when inputes "-" operator', () => {
    expect(operate('10', '12', '-')).toBe('-2');
  });

  it('Returns the product of two numbers when inputes "x" operator', () => {
    expect(operate('10', '12', 'x')).toBe('120');
  });

  it('Returns the ratio of two numbers when inputes "/" operator', () => {
    expect(operate('10', '12', '/')).toBe('0.83333333333333333333');
  });

  it('Returns "ERROR" on performing a division by zero', () => {
    expect(operate('10', '0', '/')).toBe('ERROR');
  });

  it('Returns first number as a percentage when passed "%" as operator', () => {
    expect(operate('11', '12', '%')).toBe('0.11');
  });

  it('Changes the sign of the number to opposite when "+/-" inputes as operator', () => {
    expect(operate('10', '12', '+/-')).toBe('-10');
  });
});
