function twoSum(nums: number[], target: number): number[] {
  let index = 0;

  while (index < nums.length) {
    const difference = target - nums[index];
    if (nums.includes(difference)) {
      const otherIndex = nums.indexOf(difference);
      return [index, otherIndex];
    }
    index++;
  }
}

console.log(twoSum([3, 2, 4], 6));
