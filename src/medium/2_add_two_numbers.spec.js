const { addTwoNumbers, ListNode } = require('./2_add_two_numbers');

test('Checks 2 Add Two numbers task', () => {
  const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
  const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
  expect(addTwoNumbers(l1, l2)).toStrictEqual(new ListNode(7, new ListNode(0, new ListNode(8))));

  const l3 = new ListNode()
  const l4 = new ListNode()
  expect(addTwoNumbers(l3, l4)).toStrictEqual(new ListNode());

  const l5 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))))
  const l6 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
  const res = new ListNode(8, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1))))))))
  expect(addTwoNumbers(l5, l6)).toStrictEqual(res);
});

test('Checks 2 Add Two numbers task (fromArray method)', () => {
  const l1 = ListNode.fromArray([2,4,3]);
  const l2 = ListNode.fromArray([5,6,4]);
  const res1 = ListNode.fromArray([7,0,8]);
  expect(addTwoNumbers(l1, l2)).toStrictEqual(res1);

  const l3 = new ListNode()
  const l4 = new ListNode()
  expect(addTwoNumbers(l3, l4)).toStrictEqual(new ListNode());

  const l5 = ListNode.fromArray([9,9,9,9,9,9,9]);
  const l6 = ListNode.fromArray([9,9,9,9,9]);
  const res2 = ListNode.fromArray([8,9,9,9,0,0,0,1]);
  expect(addTwoNumbers(l5, l6)).toStrictEqual(res2);
});

/*
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 */