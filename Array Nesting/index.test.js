"use strict";
exports.__esModule = true;
var index_1 = require("./index");
describe("Array nesting", function () {
    it("works", function () {
        var a = (0, index_1.arrayNesting)([5, 4, 0, 3, 1, 6, 2]);
        expect(a).toBe(4);
    });
    it("works 2", function () {
        var array = (0, index_1.arrayNesting)([0, 1, 2]);
        expect(array).toBe(1);
    });
});
