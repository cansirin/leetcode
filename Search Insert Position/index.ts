function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (target === nums[mid]) return mid;
    else if (target > nums[mid]) left = mid + 1;
    else right = mid - 1;
  }
  // can't be found in array as target
  // now we can insert it to proper index

  return left;
}

console.log(searchInsert([1, 3, 5, 6], 2));
