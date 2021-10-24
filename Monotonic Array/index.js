function isMonotonic(nums) {
    var increasing = true;
    var decreasing = true;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i + 1]) {
            increasing = false;
        }
        if (nums[i] < nums[i + 1]) {
            decreasing = false;
        }
    }
    return increasing || decreasing;
}
