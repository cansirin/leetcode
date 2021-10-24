"use strict";
/*
Input: nums = [5,4,0,3,1,6,2]
Output: 4
Explanation:
nums[0] = 5, nums[1] = 4, nums[2] = 0, nums[3] = 3, nums[4] = 1, nums[5] = 6, nums[6] = 2.
One of the longest sets s[k]:
s[0] = {nums[0], nums[5], nums[6], nums[2]} = {5, 6, 2, 0}
 */
exports.__esModule = true;
exports.arrayNesting = void 0;
function arrayNesting(nums) {
    var arrayLength = nums.length;
    var result = 0;
    for (var i = 0; i < arrayLength; i++) {
        var start = nums[i];
        var count = 0;
        while (nums[start] != Number.MAX_VALUE) {
            var temp = start;
            console.log("temp", temp);
            start = nums[start];
            count++;
            nums[temp] = Number.MAX_VALUE;
        }
        result = Math.max(result, count);
    }
    return result;
}
exports.arrayNesting = arrayNesting;
arrayNesting([5, 4, 0, 3, 1, 6, 2]);
