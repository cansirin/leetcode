// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
//     After sorting, it becomes [0,1,9,16,100].

function sortedSquares(nums: number[]): number[] {
  if (nums.length === 0) {
    return [];
  }
  if (nums.length === 1) {
    return [nums[0] * nums[0]];
  }

  const list = nums.map((num) => {
    return num * num;
  });

  return list.sort((a, b) => {
    return a - b;
  });
}

sortedSquares([-4, -1, 0, 3, 10]);
