/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  const swap = (arr: string[], first: number, second: number) => {
    return ([arr[first], arr[second]] = [arr[second], arr[first]]);
  };

  if (s.length === 1) return;

  let firstIndex = 0;
  let secondIndex = s.length - 1;

  while (firstIndex <= secondIndex) {
    swap(s, firstIndex, secondIndex);
    firstIndex++;
    secondIndex--;
  }
  console.log(s);
}

reverseString("lets go code".split(""));
