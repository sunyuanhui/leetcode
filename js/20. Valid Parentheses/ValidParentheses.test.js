const isValid = require('./ValidParentheses');

test('valid parentheses 1', () => {
  expect(isValid("()")).toBe(true);
});

test('valid parentheses 2', () => {
  expect(isValid("()[]{}")).toBe(true);
});

test('valid parentheses 3', () => {
  expect(isValid("(]")).toBe(false);
});

test('valid parentheses 4', () => {
  expect(isValid("([)]")).toBe(false);
});

test('valid parentheses 5', () => {
  expect(isValid("{[]}")).toBe(true);
});

