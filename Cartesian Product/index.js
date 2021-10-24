// lhs: A[1, 2, 3]
// rhs: B[4, 5]
var CartesianProduct = function (lhs, rhs, coordinate) {
    var result = [];
    var lhsIndex = coordinate[0], rhsIndex = coordinate[1];
    for (var _i = 0, lhs_1 = lhs; _i < lhs_1.length; _i++) {
        var lhsValue = lhs_1[_i];
        for (var _a = 0, rhs_1 = rhs; _a < rhs_1.length; _a++) {
            var rhsValue = rhs_1[_a];
            result.push([lhsValue, rhsValue]);
        }
    }
    return result.findIndex(function (entry) {
        return entry[0] === lhs[lhsIndex] && entry[1] === rhs[rhsIndex];
    });
};
var BetterCartesianProduct = function (lhs, rhs, coordinate) {
    var lhsIndex = coordinate[0], rhsIndex = coordinate[1];
    return lhsIndex * rhs.length + rhsIndex;
};
// const startTime = performance.now();
// CartesianProduct([1, 2, 3, 6, 7, 8], [4, 5, 6, 9], [5, 2]);
// const endTime = performance.now();
// let timeDiff = endTime - startTime; //in ms
// timeDiff /= 1000;
// const seconds = timeDiff;
// console.log(seconds + " seconds");
var startTime = performance.now();
CartesianProduct(Array(10000).map(function (_, index) { return index + 1; }), Array(1000).map(function (_, index) { return index; }), [5, 2]);
var endTime = performance.now();
var timeDiff = endTime - startTime; //in ms
timeDiff /= 1000;
var seconds = timeDiff;
console.log(seconds + " seconds");
