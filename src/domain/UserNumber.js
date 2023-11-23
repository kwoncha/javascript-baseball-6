import MESSAGE from '../constants/message.js';
import Validation from '../utils/Validation/Validation.js';
import creatRandomNumber from './RandomNumber.js';

class UserNumber {
  #humanNumber;
  #computerNumber;

  constructor(inputNumbers) {
    this.validate = new Validation();
    this.validate.isValidBaseballNumber(inputNumbers);
    this.#humanNumber = [...inputNumbers].map(stringNumber => +stringNumber);
    this.#computerNumber = creatRandomNumber();
  }

  countStrike() {
    return this.#humanNumber.reduce((accumulator, number, index) => {
      return number === this.#computerNumber[index] ? accumulator + 1 : accumulator;
    }, 0);
  }

  countBall() {
    return this.#humanNumber.reduce((accumulator, number, index) => {
      return (number !== this.#computerNumber[index]) && (this.#computerNumber.includes(number)) ? accumulator + 1 : accumulator;
    }, 0);
  }

  getScore() {
    const checkedStrike = this.countStrike();
    const checkedBall = this.countBall();
    const textMessage = [];

    if (checkedBall !== 0) textMessage.push(MESSAGE.strike(checkedStrike));
    if (checkedStrike !== 0) textMessage.push(MESSAGE.ball(checkedBall));
    if (textMessage.length === 0) textMessage.push(MESSAGE.nothing);

    return textMessage;
  }
}

export default UserNumber;