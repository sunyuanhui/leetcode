const reverse = require('./ReverseInteger');

test('reverse integer 1', () => {
  const num = 123;
  expect(reverse(num)).toBe(321);
});

test('reverse integer 2', () => {
  const num = -123;
  expect(reverse(num)).toBe(-321);
});

test('reverse integer 3', () => {
  const num = 120;
  expect(reverse(num)).toBe(21);
});

test('reverse integer 4', () => {
  const num = 2147483648;
  expect(reverse(num)).toBe(0);
});

test('reverse integer 5', () => {
  const num = -2147483649;
  expect(reverse(num)).toBe(0);
});

test('reverse integer 6', () => {
  const num = 1534236469;
  expect(reverse(num)).toBe(0);
});
