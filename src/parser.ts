import { isNumber } from './helpers';
import {
  mathOperators,
  mathOperatorsPriorities,
  mathPriorities,
} from './mathOperators';
const [FIRST] = mathPriorities;

export type ParsedLineType = (number | string)[];

export const parser = (line: string): ParsedLineType | null => {
  const stack = line
    .replace(/(\d+)/g, ' $1 ')
    .replace(/\*\*/g, ' ^ 2 ')
    .replace(/!/g, ' ! ')
    .replace(/([()*/+-])/g, ' $1 ')
    .replace(/  +/g, ' ')
    .trim()
    .split(' ');

  return stack.reduce<ParsedLineType>((result, item, key) => {
    const prevItem = stack[key - 1];

    const isValidNumberPush =
      ((mathOperators[prevItem] &&
        mathOperatorsPriorities[prevItem] != FIRST) ||
        prevItem === undefined) &&
      isNumber(item);
    const isValidOperatorPush =
      (isNumber(prevItem) ||
        (mathOperators[prevItem] &&
          mathOperatorsPriorities[prevItem] === FIRST)) &&
      !isNumber(item) &&
      Object.prototype.hasOwnProperty.call(mathOperators, item);

    if (isValidNumberPush) {
      result.push(Number(item));
    } else if (isValidOperatorPush) {
      result.push(item);
    } else {
      throw new TypeError('Unexpected string');
    }
    return result;
  }, []);
};
