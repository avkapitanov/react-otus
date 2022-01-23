import { parser } from './parser';

import {
  firstPrioritiesCalc,
  secondPrioritiesCalc,
  thirdPrioritiesCalc,
  fourthPrioritiesCalc,
} from './engine';

export const runner = (line: string): number => {
  const stack = parser(line);

  if (stack === null) {
    throw new TypeError('Unexpected string');
  }

  const firstPrioritiesRes = firstPrioritiesCalc(stack);

  if (firstPrioritiesRes.length === 1) {
    return Number(firstPrioritiesRes[0]);
  }

  const secondPrioritiesRes = secondPrioritiesCalc(firstPrioritiesRes);

  if (secondPrioritiesRes.length === 1) {
    return Number(secondPrioritiesRes[0]);
  }

  const thirdPrioritiesRes = thirdPrioritiesCalc(secondPrioritiesRes);

  if (thirdPrioritiesRes.length === 1) {
    return Number(thirdPrioritiesRes[0]);
  }

  return fourthPrioritiesCalc(thirdPrioritiesRes);
};
