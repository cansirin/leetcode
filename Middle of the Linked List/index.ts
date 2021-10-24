/**
 * Definition for singly-linked list.
 */

export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function middleNode(head: ListNode | null): ListNode | null {
  let linkedListLength = 0;

  const findLength = (node: ListNode) => {
    linkedListLength++;
    if (node.next === null) {
      return linkedListLength;
    } else {
      return findLength(node.next);
    }
  };

  const goTo = (node: ListNode, idx: number) => {
    for (let i = 1; i < idx; i++) {
      node = node.next;
    }
    return node;
  };

  findLength(head);
  const middle =
    linkedListLength % 2 === 0
      ? linkedListLength / 2 + 1
      : Math.ceil(linkedListLength / 2);
  return goTo(head, middle);
}

export const head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null))))
);
