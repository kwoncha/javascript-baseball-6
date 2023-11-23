import { INPUT_NUMBERS, NUMBERS } from '../../constants/constants.js';
import MESSAGE from '../../constants/message.js';

class Validation {
  isValidBaseballNumber(number) {
    if (this.isValidBaseballNumberType(number)) throw new Error(MESSAGE.ERROR.notValidNumber);
  }

  isValidRestartNumber(number) {
    const validNumbers = [NUMBERS.one, NUMBERS.two];

    if (!validNumbers.includes(number)) throw new Error(MESSAGE.ERROR.notValidRestartNumber);
  }

  isValidBaseballNumberType(number) {
    return INPUT_NUMBERS.test(number);
  }
}

export default Validation;
