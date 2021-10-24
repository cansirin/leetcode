import { head, ListNode } from "../Middle of the Linked List";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let length = 0;
  let current = head;
  while (current) {
    length++;
    current = current.next;
  }
  if (n === 1 && length === 1) {
    head.next = null;
    return head;
  }

  let previous = head;
  current = head.next;

  let fromBeginning = length - n - 1;

  while (fromBeginning) {
    previous = previous.next;
    current = current.next;
    fromBeginning--;
  }

  previous.next = current.next;
  return head;
}

console.log(
  JSON.stringify(removeNthFromEnd(new ListNode(1, null), 1), null, 4)
);
