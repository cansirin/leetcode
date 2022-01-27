class RomanNumerals {
  static readonly letters = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  static readonly values = [
    1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1,
  ];

  static toRoman(n) {
    let res = "";
    for (let i = 0; i < 13; i++) {
      while (n >= this.values[i]) {
        res = res + this.letters[i];
        n = n - this.values[i];
      }
    }
    return res;
  }

  static fromRoman(roman) {
    const letters = roman.split("");
    const values = [];
    letters.forEach((l) => {
      switch (l) {
        case "I":
          values.push(1);
          break;
        case "V":
          values.push(5);
          break;
        case "X":
          values.push(10);
          break;
        case "L":
          values.push(50);
          break;
        case "C":
          values.push(100);
          break;
        case "D":
          values.push(500);
          break;
        case "M":
          values.push(1000);
          break;
        default:
          break;
      }
    });
    let size = values.length;
    let res = values[size - 1];
    for (let i = 0; i < size - 1; i++) {
      if (values[i] >= values[i + 1]) {
        res += values[i];
      } else {
        res -= values[i];
      }
    }
    return res;
  }
}
