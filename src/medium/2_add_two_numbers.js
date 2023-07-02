/*
	https://leetcode.com/problems/add-two-numbers/
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
	let carry = 0;
	let currListNode1 = l1;
	let currListNode2 = l2;
	let result = new ListNode()
	let resultCurrent = result;
	while(true) {
		let sum = (currListNode1?.val || 0) + (currListNode2?.val || 0) + carry;
		resultCurrent.val = sum % 10;
		carry = sum > 9 ? 1 : 0;
		if (currListNode1?.next || currListNode2?.next || carry) {
			resultCurrent.next = new ListNode();
			resultCurrent = resultCurrent.next;
			currListNode1 = currListNode1?.next;
			currListNode2 = currListNode2?.next;
		} else break;
	}
	return result;
};

module.exports = {
	ListNode,
	addTwoNumbers
};