/**
 Do not return anything, modify nums in-place instead.
 Input: nums = [0,1,0,3,12]
 Output: [1,3,12,0,0]
 */
function moveZeroes(nums: number[]): void {
  for (let i = nums.length - 1; i >= 0; i--) {
    nums[i] === 0 && nums.splice(i, 1) && nums.push(0);
  }
  console.log(nums);
}

function betterMoveZeroes(nums: number[]): void {
  let idx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[idx] = nums[i];
      nums[i] = i === idx ? nums[i] : 0;
      idx++;
    }
  }
  console.log(nums);
}

betterMoveZeroes([0, 0, 1]);
