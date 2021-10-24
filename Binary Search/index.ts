function BinarySearch(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const pivot = left + (right - left);
    if (nums[pivot] === target) {
      return pivot;
    } else if (target > nums[pivot]) {
      left = pivot + 1;
    } else {
      right = pivot - 1;
    }
  }
  return -1;
}

console.log(BinarySearch([-1, 0, 3, 5, 9, 12], 9));
