function reverse(x: number): number {
  let maxNum = 2147483648;
  if (x > maxNum || x > maxNum - 1) {
    return 0;
  }

  if (x < 10 && x > -10) {
    return x;
  }
  let digits = x.toString().split("");
  if (digits[digits.length - 1] === "0") {
    digits = digits.slice(0, digits.length - 1);
  }
  digits = digits.reverse();
  if (x < 0) {
    digits.unshift("-");
  }
  return parseInt(digits.join(""));
}

const x = reverse(-234);
console.log(x);
