const findMedianSortedArrays = require('./4_median_of_two_sorted_arrays');

test('4 | Median of Two Sorted Arrays', () => {
  const x1 = [1,3]
  const x2 = [2]
  expect(findMedianSortedArrays(x1, x2)).toStrictEqual(2);

  const x3 = [1,2]
  const x4 = [3,4]
  expect(findMedianSortedArrays(x3, x4)).toStrictEqual(2.5);
});
