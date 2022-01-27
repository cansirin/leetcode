/*
Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

To flip an image horizontally means that each row of the image is reversed.

For example, flipping [1,1,0] horizontally results in [0,1,1].
To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

For example, inverting [0,1,1] results in [1,0,0].

 */

function flipAndInvertImage(image: number[][]): number[][] {
  const result: number[][] = [];
  const invert = (row: number[]): number[] => {
    console.log(row);
    for (let index in row) {
      if (row[index] === 1) {
        row[index] = 0;
      } else if (row[index] === 0) {
        row[index] = 1;
      }
    }
    console.log(row);
    return row;
  };

  const flip = (row: number[]): number[] => {
    return row.reverse();
  };

  for (const row of image) {
    const item = flip(row);
    result.push(invert(item));
  }

  return result;
}

flipAndInvertImage([
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
]);
