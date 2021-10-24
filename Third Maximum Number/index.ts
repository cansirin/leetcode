function thirdMax(nums: number[]): number {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  function findMax(nums: number[]): number {
    const list = nums.filter((item, index, arr) => arr.indexOf(item) === index);
    let max = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i] > max) {
        max = list[i];
      }
    }
    const maxIndex = list.indexOf(max);
    list.splice(maxIndex, 1);
    return findMax(list);
  }
  return findMax(nums);
}

console.log(thirdMax([2, 2, 3, 1]));

function thirdMax_Sort_Filter(nums: number[]): number {
  const wantedIndex = 2;
  const sortedArr = nums.sort((a, b) => {
    return b - a;
  });
  const uniqueArray = sortedArr.filter(function (item, pos) {
    return sortedArr.indexOf(item) == pos;
  });
  if (uniqueArray.length === 1) return nums[0];
  if (uniqueArray.length === 2) return Math.max(nums[0], nums[1]);
  return uniqueArray[wantedIndex];
}
