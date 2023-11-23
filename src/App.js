import BaseballGame from './controller/BaseballGame.js';

class App {
  constructor() {
    this.baseballGame = new BaseballGame();
  }

  async play() {
    await this.baseballGame.startBaseballGame();
  }
}

export default App;
