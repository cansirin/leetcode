// lhs: A[1, 2, 3]
// rhs: B[4, 5]
const CartesianProduct = (
  lhs: number[],
  rhs: number[],
  coordinate: [number, number]
): number => {
  const result = [];
  const [lhsIndex, rhsIndex] = coordinate;
  for (const lhsValue of lhs) {
    for (const rhsValue of rhs) {
      result.push([lhsValue, rhsValue]);
    }
  }

  return result.findIndex((entry: [number, number]) => {
    return entry[0] === lhs[lhsIndex] && entry[1] === rhs[rhsIndex];
  });
};

const BetterCartesianProduct = (
  lhs: number[],
  rhs: number[],
  coordinate: [number, number]
): number => {
  const [lhsIndex, rhsIndex] = coordinate;

  return lhsIndex * rhs.length + rhsIndex;
};

// const startTime = performance.now();
// CartesianProduct([1, 2, 3, 6, 7, 8], [4, 5, 6, 9], [5, 2]);
// const endTime = performance.now();
// let timeDiff = endTime - startTime; //in ms
// timeDiff /= 1000;
// const seconds = timeDiff;
// console.log(seconds + " seconds");

const startTime = performance.now();
CartesianProduct(
  Array(10000).map((_, index) => index + 1),
  Array(1000).map((_, index) => index),
  [5, 2]
);
const endTime = performance.now();
let timeDiff = endTime - startTime; //in ms
timeDiff /= 1000;
const seconds = timeDiff;
console.log(seconds + " seconds");
