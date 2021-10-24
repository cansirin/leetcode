function thirdMax(nums) {
    if (nums.length === 1)
        return nums[0];
    if (nums.length === 2)
        return Math.max(nums[0], nums[1]);
    function findMax(nums) {
        var list = nums.filter(function (item, index, arr) { return arr.indexOf(item) === index; });
        var max = 0;
        for (var i = 0; i < list.length; i++) {
            if (list[i] > max) {
                max = list[i];
            }
        }
        var maxIndex = list.indexOf(max);
        list.splice(maxIndex, 1);
        return findMax(list);
    }
    return findMax(nums);
}
console.log(thirdMax([2, 2, 3, 1]));
function thirdMax_Sort_Filter(nums) {
    var wantedIndex = 2;
    var sortedArr = nums.sort(function (a, b) {
        return b - a;
    });
    var uniqueArray = sortedArr.filter(function (item, pos) {
        return sortedArr.indexOf(item) == pos;
    });
    if (uniqueArray.length === 1)
        return nums[0];
    if (uniqueArray.length === 2)
        return Math.max(nums[0], nums[1]);
    return uniqueArray[wantedIndex];
}
