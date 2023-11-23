import Validation from '../src/utils/Validation/Validation.js';
import { INPUT_NUMBERS, NUMBERS } from '../src/constants/constants.js';

describe('Validation 클래스 - isValidBaseballNumber 메서드 테스트', () => {
  const validation = new Validation();

  it('유효한 야구 숫자일 경우 에러를 던지지 않아야 함', () => {
    const validNumber = ['123', '234', '345'];
    validNumber.forEach(value => {
      expect(() => {
        validation.isValidBaseballNumber(value);
      }).not.toThrow();
    });
  });

  it('유효하지 않은 야구 숫자일 경우 에러를 던져야 함', () => {
    const invalidNumber = ['abc', '3', '1242', '222'];
    invalidNumber.forEach(value => {
      expect(() => {
        validation.isValidBaseballNumber(invalidNumber);
      }).toThrow();
    });
  });
});

describe('Validation 클래스 - isValidRestartNumber 메서드 테스트', () => {
  const validation = new Validation();

  it('유효한 리스타트 숫자일 경우 에러를 던지지 않아야 함', () => {
    const validRestartNumber = [NUMBERS.one, NUMBERS.one, NUMBERS.two];
    validRestartNumber.forEach(value => {
      expect(() => {
        validation.isValidRestartNumber(value);
      }).not.toThrow();
    });
  });

  it('유효하지 않은 리스타트 숫자일 경우 에러를 던져야 함', () => {
    const invalidRestartNumber = [3, 4, 7, 89, 'as'];
    invalidRestartNumber.forEach(value => {
      expect(() => {
        validation.isValidRestartNumber(value);
      }).toThrow();
    });
  });
});

describe('Validation 클래스 - isValidBaseballNumberType 메서드 테스트', () => {
  const validation = new Validation();

  it('유효한 야구 숫자 문자열일 경우 true를 반환해야 함', () => {
    const validNumber = '123';
    const result = validation.isValidBaseballNumberType(validNumber);
    expect(result).toBe(true);
  });

  it('유효하지 않은 야구 숫자 문자열일 경우 false를 반환해야 함', () => {
    const invalidNumber = 'abc';
    const result = validation.isValidBaseballNumberType(invalidNumber);
    expect(result).toBe(false);
  });
});
