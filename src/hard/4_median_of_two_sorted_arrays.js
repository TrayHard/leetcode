/*
	https://leetcode.com/problems/median-of-two-sorted-arrays/
	Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
	The overall run time complexity should be O(log (m+n)).

	Constraints:
	* nums1.length == m
	* nums2.length == n
	* 0 <= m <= 1000
	* 0 <= n <= 1000
	* 1 <= m + n <= 2000
	* -10^6 <= nums1[i], nums2[i] <= 10^6
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
	const merged = [];
	let nums1Ptr = 0, nums2Ptr = 0;
	while(true) {
		const n1 = nums1[nums1Ptr]
		const n2 = nums2[nums2Ptr]
		switch (true) {
			case n1 < n2:
				merged.push(n1)
				nums1Ptr++;
				break;
			case n1 > n2:
				merged.push(n2)
				nums2Ptr++;
				break;
			case n1 === n2:
				merged.push(n1, n2)
				nums1Ptr++;
				nums2Ptr++;
				break;
		}
		if (nums1Ptr === nums1.length && nums2Ptr === nums2.length) break;
		if (nums1Ptr === nums1.length) {
			const theRestOfNums2 = nums2.slice(-(nums2.length - nums2Ptr))
			merged.push(...theRestOfNums2)
			break;
		}
		if (nums2Ptr === nums2.length) {
			const theRestOfNums1 = nums1.slice(-(nums1.length - nums1Ptr))
			merged.push(...theRestOfNums1)
			break;
		}
	}
	if (merged.length % 2 > 0) {
		return merged[Math.floor(merged.length / 2)];
	} else {
		const x = merged.length / 2,
			y = x - 1;
		return (merged[x] + merged[y]) / 2
	}
};

module.exports = findMedianSortedArrays;