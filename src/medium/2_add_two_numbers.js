/*
	You are given two non-empty linked lists representing two non-negative integers.
	The digits are stored in reverse order, and each of their nodes contains a single digit.
	Add the two numbers and return the sum as a linked list.

	You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */
// Definition for singly-linked list.
class ListNode {
	constructor(val, next) {
		this.val = (val === undefined ? 0 : val)
		this.next = (next === undefined ? null : next)
	}
	static fromArray(arr) {
		return arr.reverse().reduce((acc, curr) => {
			return new ListNode(curr, acc)
		}, undefined)
	}
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {

};
module.exports = {
	ListNode,
	addTwoNumbers
};