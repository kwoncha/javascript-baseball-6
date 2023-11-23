import MESSAGE from '../constants/message.js';
import Validation from '../utils/Validation/Validation.js';

class UserNumber {
  #humanNumber;
  #computerNumber;

  constructor(inputNumbers, randomNumber) {
    this.validate = new Validation();
    this.validate.isValidBaseballNumber(inputNumbers);
    this.#humanNumber = [...inputNumbers].map(stringNumber => +stringNumber);
    this.#computerNumber = randomNumber;
  }
}