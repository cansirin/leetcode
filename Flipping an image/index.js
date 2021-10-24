/*
Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

To flip an image horizontally means that each row of the image is reversed.

For example, flipping [1,1,0] horizontally results in [0,1,1].
To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

For example, inverting [0,1,1] results in [1,0,0].

 */
function flipAndInvertImage(image) {
    //
    var result = [];
    var invert = function (row) {
        console.log(row);
        for (var index in row) {
            if (row[index] === 1) {
                row[index] = 0;
            }
            else if (row[index] === 0) {
                row[index] = 1;
            }
        }
        console.log(row);
        return row;
    };
    var flip = function (row) {
        return row.reverse();
    };
    for (var _i = 0, image_1 = image; _i < image_1.length; _i++) {
        var row = image_1[_i];
        var item = flip(row);
        result.push(invert(item));
    }
    return result;
}
flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
]);
