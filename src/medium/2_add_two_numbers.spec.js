const { addTwoNumbers, ListNode } = require('./2_add_two_numbers');

test('2 | Add Two Numbers', () => {
  const l1 = ListNode.fromArray([2,4,3]);
  const l2 = ListNode.fromArray([5,6,4]);
  const res1 = ListNode.fromArray([7,0,8]);
  expect(addTwoNumbers(l1, l2)).toStrictEqual(res1);

  const l3 = new ListNode()
  const l4 = new ListNode()
  expect(addTwoNumbers(l3, l4)).toStrictEqual(new ListNode());

  const l5 = ListNode.fromArray([9,9,9,9,9,9,9]);
  const l6 = ListNode.fromArray([9,9,9,9]);
  const res2 = ListNode.fromArray([8,9,9,9,0,0,0,1]);
  expect(addTwoNumbers(l5, l6)).toStrictEqual(res2);
});
