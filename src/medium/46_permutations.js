/*
	https://leetcode.com/problems/permutations/
	Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
	if (nums.length === 1) return [nums];

	const result = [];
	for (let i = 0; i < nums.length; i++) {
		const rest = permute([...nums.slice(0, i), ...nums.slice(i + 1)]);
		result.push(...rest.map(permutations => [nums[i], ...permutations]));
	}
	return result;
};


module.exports = permute;