const myAtoi = require('./StringtoInteger');

test('string to integer 1', () => {
  const str = '42';
  expect(myAtoi(str)).toBe(42);
});

test('string to integer 2', () => {
  const str = '-42';
  expect(myAtoi(str)).toBe(-42);
});

test('string to integer 3', () => {
  const str = '4193 with words';
  expect(myAtoi(str)).toBe(4193);
});

test('string to integer 4', () => {
  const str = 'words and 987';
  expect(myAtoi(str)).toBe(0);
});

test('string to integer 5', () => {
  const str = '-91283472332';
  expect(myAtoi(str)).toBe(-2147483648);
});
