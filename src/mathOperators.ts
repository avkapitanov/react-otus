export type ScalarOperationType = (first: number, second: number) => number;
export type SingleOperationType = (n: number) => number;

export const mul: ScalarOperationType = (
  first: number,
  second: number
): number => first * second;

export const div: ScalarOperationType = (
  first: number,
  second: number
): number => first / second;

export const add: ScalarOperationType = (
  first: number,
  second: number
): number => first + second;

export const minus: ScalarOperationType = (
  first: number,
  second: number
): number => first - second;

export const pow: ScalarOperationType = (
  first: number,
  second: number
): number => first ** second;

export const factorial: SingleOperationType = (n: number): number =>
  n != 1 ? n * factorial(n - 1) : 1;

export const mathOperators: {
  [key: string]: ScalarOperationType;
} = {
  '*': mul,
  '/': div,
  '+': add,
  '-': minus,
  '^': pow,
  '!': factorial,
};

export const mathPriorities: [1, 2, 3, 4] = [1, 2, 3, 4];

const [FIRST, SECOND, THIRD, FOURTH] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  '!': FIRST,
  '^': SECOND,
  '*': THIRD,
  '/': THIRD,
  '+': FOURTH,
  '-': FOURTH,
};
