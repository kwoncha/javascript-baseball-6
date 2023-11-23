import InputView from '../utils/Views/InputView.js';
import OutputView from '../utils/Views/OutputView.js';
import MESSAGE from '../constants/message.js';
import UserNumber from '../domain/UserNumber.js';
import Validation from '../utils/Validation/Validation.js';
import { NUMBERS } from '../constants/constants.js';
import creatRandomNumber from '../domain/RandomNumber.js';

class BaseballGame {
  constructor() {
    this.validate = new Validation();
  }

  async startBaseballGame() {
    OutputView.print(MESSAGE.startGame);
    const randomNumber = creatRandomNumber();
    await this.playingGame(randomNumber);

    OutputView.print(MESSAGE.endGame);

    const inputRestart = await InputView.readLineAsync(MESSAGE.restart);
    this.validate.isValidRestartNumber(+inputRestart);

    if (+inputRestart === NUMBERS.one) return this.startBaseballGame();
  }

  async playingGame(randomNumber) {
    const inputNumber = await InputView.readLineAsync(MESSAGE.inputNumber);
    this.userNumber = new UserNumber(inputNumber, randomNumber);
    const totalScore = this.userNumber.getScore();
    OutputView.print(totalScore.join(' '));

    if (totalScore.join(' ') !== MESSAGE.threeStrike) return this.playingGame(randomNumber);
  }
}

export default BaseballGame;
