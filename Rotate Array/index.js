function rotate(nums, k) {
    var move = function () {
        for (var i = 0; i < k; i++) {
            var lastItem = nums.pop();
            nums.unshift(lastItem);
        }
    };
    move();
    console.log(nums);
}
rotate([1, 2, 3, 4, 5, 6, 7], 3);
