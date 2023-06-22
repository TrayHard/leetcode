/*
  https://leetcode.com/problems/two-sum/
  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  You can return the answer in any order.

  Constraints:
  * 2 <= nums.length <= 10^4
  * -10^9 <= nums[i] <= 10^9
  * -10^9 <= target <= 10^9
  * Only one valid answer exists.
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const result = [];
  outer: for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i, j);
        break outer;
      }
    }
  }
  return result;
};

module.exports = twoSum;
