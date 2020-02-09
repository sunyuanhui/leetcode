const generateParenthesis = require('./GenerateParentheses');

test('generate parentheses 1', () => {
  expect(generateParenthesis(3)).toStrictEqual([ "((()))", "(()())", "(())()", "()(())", "()()()" ]);
});

