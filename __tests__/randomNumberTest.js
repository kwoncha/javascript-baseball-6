import creatRandomNumber from '../src/domain/RandomNumber.js';

describe('랜덤 숫자 생성 테스트', () => {
  test('길이 3의 배열을 1에서 9 사이의 고유한 숫자로 반환', () => {
    const result = creatRandomNumber();

    expect(result).toHaveLength(3);

    result.forEach(number => {
      expect(number).toBeGreaterThanOrEqual(1);
      expect(number).toBeLessThanOrEqual(9);
    });
  });
});
