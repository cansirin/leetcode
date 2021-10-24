class BetterListNode {
  val: number;
  next: BetterListNode | null;

  constructor(val?: number, next?: BetterListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function betterMiddleNode(head: BetterListNode | null): BetterListNode | null {
  let length = 0;
  let current = head;

  while (current) {
    length++;
    current = current.next;
  }

  let mid = Math.floor(length / 2);

  while (mid) {
    head = head.next;
    mid--;
  }

  return head;
}

const betterHead = new BetterListNode(
  1,
  new BetterListNode(
    2,
    new BetterListNode(
      3,
      new BetterListNode(4, new BetterListNode(5, new BetterListNode(6, null)))
    )
  )
);

console.log(JSON.stringify(betterMiddleNode(betterHead), null, 4));
