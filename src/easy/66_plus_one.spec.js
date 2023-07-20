const plusOne = require('./66_plus_one');

test('66 | Plus One', () => {
  expect(plusOne([0])).toStrictEqual([1]);
  expect(plusOne([1,2,3])).toStrictEqual([1,2,4]);
  expect(plusOne([9,9,9])).toStrictEqual([1,0,0,0]);
});

