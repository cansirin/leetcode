const ValidParentheses = (s: string) => {
  if (s.length % 2 !== 0) return false;

  const stack = [];
  // @ts-ignore
  for (let c of s) {
    console.log(stack);
    if (c === ")" && stack[stack.length - 1] === "(") {
      stack.pop();
    } else if (c === "}" && stack[stack.length - 1] === "{") {
      stack.pop();
    } else if (c === "]" && stack[stack.length - 1] === "[") {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return !stack.length;
};

const r = ValidParentheses("({[{{}}]})");
