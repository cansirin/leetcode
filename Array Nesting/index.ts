/*
Input: nums = [5,4,0,3,1,6,2]
Output: 4
Explanation:
nums[0] = 5, nums[1] = 4, nums[2] = 0, nums[3] = 3, nums[4] = 1, nums[5] = 6, nums[6] = 2.
One of the longest sets s[k]:
s[0] = {nums[0], nums[5], nums[6], nums[2]} = {5, 6, 2, 0}
 */

export function arrayNesting(nums: number[]): number {
  const arrayLength = nums.length;

  let result = 0;
  for (let i = 0; i < arrayLength; i++) {
    let start = nums[i];
    let count = 0;
    while (nums[start] != Number.MAX_VALUE) {
      const temp = start;
      console.log("temp", temp);
      start = nums[start];
      count++;
      nums[temp] = Number.MAX_VALUE;
    }
    result = Math.max(result, count);
  }

  return result;
}

arrayNesting([5, 4, 0, 3, 1, 6, 2]);
