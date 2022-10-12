const modules = require("./script");

describe('String Tests', () => {
    test('Get String Length',
      () => expect(modules.stringLength('hello')).toBe(5));

    test('String Length less than 1', () => {
      expect(() => modules.stringLength("")).toThrowError("String is empty");
    });

    test('String Length greater than 10', () => {
      expect(() => modules.stringLength("12345678910")).toThrowError("Length is greater than 10");
    });

    test('Reverse a String', () => {
      expect(modules.reverseString("meow")).toBe("woem");
    });

    test('Capitalize first Letter', () => {
      expect(modules.capitalize('meow')).toBe('Meow');
    });
});

describe('Compute Tests', () => {
  const calculator = new modules.Compute();
  const a = 1, b = 2;
  const c = -69, d = 69;
  const e = 0, f = 28;

  describe('Add Two Numbers', () => {
    test('Test 1', () => expect(calculator.add(a, b)).toBe(3));
    test('Test 2', () => expect(calculator.add(c, d)).toBe(0));
    test('Test 3', () => expect(calculator.add(e, f)).toBe(28));
  });

  describe('Subtract Two Numbers', () => {
    test('Test 1', () => expect(calculator.subtract(a, b)).toBe(-1));
    test('Test 2', () => expect(calculator.subtract(c, d)).toBe(-138));
    test('Test 3', () => expect(calculator.subtract(e, f)).toBe(-28));
  });

  describe('Multiply Two Numbers', () => {
    test('Test 1', () => expect(calculator.multiply(a, b)).toBe(2));
    test('Test 2', () => expect(calculator.multiply(c, d)).toBe(-4761));
    test('Test 3', () => expect(calculator.multiply(e, f)).toBe(0));
  });

  describe('Divide Two Numbers', () => {
    test('Test 1', () => expect(calculator.divide(a, b)).toBe(1/2));
    test('Test 2', () => expect(calculator.divide(c, d)).toBe(-1));
    test('Test 3', () => expect(calculator.divide(e, f)).toBe(0));
  });
});