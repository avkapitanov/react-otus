import { thirdPrioritiesCalc, fourthPrioritiesCalc } from './engine';

describe('thirdPrioritiesCalc simple cases', () => {
  it('[1, * 32]', () => {
    expect(thirdPrioritiesCalc([1, '*', 32])).toEqual([32]);
  });

  it('[32, /, 32]', () => {
    expect(thirdPrioritiesCalc([32, '/', 32])).toEqual([1]);
  });

  it('[32, + 32]', () => {
    expect(thirdPrioritiesCalc([32, '+', 32])).toEqual([32, '+', 32]);
  });
});

describe('thirdPrioritiesCalc mixed with second priorities cases', () => {
  it('[32, /, 32, +, 10, *, 10]', () => {
    expect(thirdPrioritiesCalc([32, '/', 32, '+', 10, '*', 10])).toEqual([
      1,
      '+',
      100,
    ]);
  });
});

describe('fourthPrioritiesCalc invalid cases', () => {
  it('[32, / 32]', () => {
    expect(() => fourthPrioritiesCalc([32, '/', 32])).toThrow(
      TypeError('Unexpected stack!')
    );
  });
});

describe('fourthPrioritiesCalc simple cases', () => {
  it('[32, + 32]', () => {
    expect(fourthPrioritiesCalc([32, '+', 32])).toEqual(64);
  });

  it('[32, - 32]', () => {
    expect(fourthPrioritiesCalc([32, '-', 32])).toEqual(0);
  });

  it('[32, - 32, +, 10]', () => {
    expect(fourthPrioritiesCalc([32, '-', 32, '+', 10])).toEqual(10);
  });
});
