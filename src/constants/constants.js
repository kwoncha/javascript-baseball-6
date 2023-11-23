import deepFreeze from '../utils/deepFreeze/deepFreeze.js';

const INPUT_NUMBERS = /^(?!.*0)(?!.*(\d).*\1)\d{3}$/;

const NUMBERS = deepFreeze({
  one: 1,
  two: 2,
  three: 3,
  four: 4,
});

export { INPUT_NUMBERS, NUMBERS };
