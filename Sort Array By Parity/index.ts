function sortArrayByParity(nums: number[]): number[] {
  const result = [];
  for (const num of nums) {
    if (num % 2 === 1) {
      result.push(num);
    } else {
      result.unshift(num);
    }
  }
  return result;
}

console.log(sortArrayByParity([3, 1, 2, 4]));
