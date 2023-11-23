import { INPUT_NUMBERS, NUMBERS } from '../../constants/constants.js';
import MESSAGE from '../../constants/message.js';

class Validation {
  static isValidBaseballNumber(number) {
    if (this.isValidBaseballNumberType(number)) throw new Error(MESSAGE.ERROR.notValidNumber);
  }

  isValidBaseballNumberType(number) {
    return INPUT_NUMBERS.test(number);
  }
}
