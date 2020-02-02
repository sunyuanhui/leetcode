const intToRoman = require('./IntegertoRoman');

test('integer to roman 1', () => {
  const num = 3;
  expect(intToRoman(num)).toBe("III");
});

test('integer to roman 2', () => {
  const num = 4;
  expect(intToRoman(num)).toBe("IV");
});

test('integer to roman 3', () => {
  const num = 9;
  expect(intToRoman(num)).toBe("IX");
});

test('integer to roman 4', () => {
  const num = 58;
  // Explanation: L = 50, V = 5, III = 3.
  expect(intToRoman(num)).toBe("LVIII");
});

test('integer to roman 5', () => {
  const num = 1994;
  // Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
  expect(intToRoman(num)).toBe("MCMXCIV");
});

