function plusOne(digits: number[]): number[] {
  if (digits.length === 1) {
    if (digits[0] + 1 > 9) {
      return [1, 0];
    }
  }
  if (digits[digits.length - 1] + 1 > 9) {
    plusOne(digits.splice(-1, 1));
    digits = plusOne(digits);
    digits.push(0);
  } else {
    digits[digits.length - 1] = digits[digits.length - 1] + 1;
  }

  return digits;
}

console.log(plusOne([1, 2, 9]));
