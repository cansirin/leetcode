function twoSum2(numbers: number[], target: number): number[] {
  let firstIndex = 0;
  let secondIndex = numbers.length - 1;

  while (firstIndex < secondIndex) {
    if (numbers[firstIndex] + numbers[secondIndex] === target) {
      return [firstIndex + 1, secondIndex + 1];
    }
    if (numbers[firstIndex] + numbers[secondIndex] < target) {
      firstIndex++;
    } else {
      secondIndex--;
    }
  }
}

console.log(twoSum2([0, 0, 3, 4], 0));
console.log(twoSum2([2, 7, 11, 15], 26));
