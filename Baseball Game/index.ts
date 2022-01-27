const BaseballGame = (ops: string[]) => {
  let result = [];
  for (const op of ops) {
    console.log(op, result, "op & result");
    if (op === "D") {
      result.push(result[result.length - 1] * 2);
    } else if (op === "C") {
      result.pop();
    } else if (op === "+") {
      const sum =
        Number(result[result.length - 1]) + Number(result[result.length - 2]);
      result.push(sum);
    } else {
      result.push(op);
    }
  }
  return result.reduce((a, b) => {
    return Number(a) + Number(b);
  }, 0);
};

const result = BaseballGame(["5", "2", "C", "D", "+"]);
console.log(result);

const r2 = BaseballGame(["5", "-2", "4", "C", "D", "9", "+", "+"]);
console.log(r2, "R2");
