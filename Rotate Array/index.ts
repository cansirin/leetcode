function rotate(nums: number[], k: number): void {
  for (let i = 0; i < k; i++) {
    const lastItem = nums.pop();
    nums.unshift(lastItem);
  }
  console.log(nums);
}

rotate([1, 2, 3, 4, 5, 6, 7], 3);
