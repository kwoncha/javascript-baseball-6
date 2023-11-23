import deepFreeze from '../utils/deepFreeze/deepFreeze.js';

const PREFIX = '[ERROR]';

const MESSAGE = deepFreeze({
  startGame: '숫자 야구 게임을 시작합니다.',
  inputNumber: '숫자를 입력해주세요 : ',
  strike: strike => `${strike}스트라이크`,
  ball: ball => `${ball}볼`,
  nothing: '낫싱',
  threeStrike: '3스트라이크',
  endGame: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  restart: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
  ERROR: {
    notValidNumber: `${PREFIX} 서로다른 3자리 숫자를 입력해주세요.`,
    notValidRestartNumber: `${PREFIX} 1, 2만 입력해주세요.`,
  },
});

export default MESSAGE;
