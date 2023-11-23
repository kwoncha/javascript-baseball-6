import MESSAGE from '../constants/message.js';
import Validation from '../utils/Validation/Validation.js';

class UserNumber {
  #humanNumber;
  #computerNumber;

  constructor(inputNumbers, randomNumbers) {
    this.validate = new Validation();
    this.validate.isValidBaseballNumber(inputNumbers);
    this.#humanNumber = [...inputNumbers].map(stringNumber => +stringNumber);
    this.#computerNumber = randomNumbers;
  }

  countStrike(humanNumber, computerNumber) {
    return humanNumber.reduce((accumulator, number, index) => {
      return number === computerNumber[index] ? accumulator + 1 : accumulator;
    }, 0);
  }

  countBall(humanNumber, computerNumber) {
    return humanNumber.reduce((accumulator, number, index) => {
      return (number !== computerNumber[index]) && (computerNumber.includes(number)) ? accumulator + 1 : accumulator;
    }, 0);
  }

  getScore() {
    const checkedStrike = this.countStrike(this.#humanNumber, this.#computerNumber);
    const checkedBall = this.countBall(this.#humanNumber, this.#computerNumber);
    const textMessage = [];

    if (checkedBall !== 0) textMessage.push(MESSAGE.ball(checkedBall));
    if (checkedStrike !== 0) textMessage.push(MESSAGE.strike(checkedStrike));
    if (textMessage.length === 0) textMessage.push(MESSAGE.nothing);

    return textMessage;
  }
}

export default UserNumber;