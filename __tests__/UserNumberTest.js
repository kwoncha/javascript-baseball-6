import UserNumber from '../src/domain/UserNumber.js';

describe('UserNumber 클래스 테스트', () => {
  let userNumber;

  beforeEach(() => {
    const inputNumbers = '123';
    const randomNumbers = [1, 2, 3];
    userNumber = new UserNumber(inputNumbers, randomNumbers);
  });

  it('countStrike 메서드 테스트', () => {
    const humanNumber = [1, 2, 3];
    const computerNumber = [1, 2, 3];
    const result = userNumber.countStrike(humanNumber, computerNumber);
    expect(result).toBe(3);
  });

  it('countBall 메서드 테스트', () => {
    const humanNumber = [1, 2, 3];
    const computerNumber = [3, 1, 2];
    const result = userNumber.countBall(humanNumber, computerNumber);
    expect(result).toBe(3);
  });

  it('getScore 메서드 테스트', () => {
    const result = userNumber.getScore();
    expect(result).toEqual(['3스트라이크']);
  });
});
