const convert = require('./ZigZagConversion');

test('zig zag conversion 1', () => {
  const s = 'PAYPALISHIRING';
  const numRows = 3;
  expect(convert(s, numRows)).toBe('PAHNAPLSIIGYIR');
});

test('zig zag conversion 2', () => {
  const s = 'PAYPALISHIRING';
  const numRows = 4;
  expect(convert(s, numRows)).toBe('PINALSIGYAHRPI');
});
