function sortArrayByParity(nums) {
    var result = [];
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        if (num % 2 === 1) {
            result.push(num);
        }
        else {
            result.unshift(num);
        }
    }
    return result;
}
console.log(sortArrayByParity([3, 1, 2, 4]));
