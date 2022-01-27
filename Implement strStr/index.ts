function strStr(haystack: string, needle: string): number {
  if (needle.length === 0) return 0;

  const windowSize = needle.length;
  let slow = 0;
  let fast = windowSize;

  while (fast <= haystack.length) {
    const window = haystack.slice(slow, fast);
    if (window !== needle) {
      slow++;
      fast++;
    } else {
      return slow;
    }
  }
  return -1;
}

const strstr = strStr("aaaaa", "bba");
console.log(strstr);
