const romanToInt = require('./RomantoInteger');

test('roman to integer 1', () => {
  const str = "III";
  expect(romanToInt(str)).toBe(3);
});

test('roman to integer 2', () => {
  const str = "IV";
  expect(romanToInt(str)).toBe(4);
});

test('roman to integer 3', () => {
  const str = "IX";
  expect(romanToInt(str)).toBe(9);
});

test('roman to integer 4', () => {
  const str = "LVIII";
  // Explanation: L = 50, V= 5, III = 3.
  expect(romanToInt(str)).toBe(58);
});

test('roman to integer 5', () => {
  const str = "MCMXCIV";
  // Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
  expect(romanToInt(str)).toBe(1994);
});

