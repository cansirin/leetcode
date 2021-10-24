function intersect(nums1: number[], nums2: number[]): number[] {
  if (nums1.length <= nums2.length) {
    return findCommonElements(nums1, nums2);
  } else {
    return findCommonElements(nums2, nums1);
  }

  function findCommonElements(nums1: number[], nums2: number[]): number[] {
    const arr = [];
    nums1.map((num) => {
      if (nums2.includes(num)) {
        arr.push(num);
        nums2.splice(nums2.indexOf(num), 1);
      }
    });
    return arr;
  }
}
