const LongestNotRepeated = (str: string) => {
  const resultString = [];
  let longestLength = 0;

  for (let i = 0; i < str.length; i++) {
    const currentItemIndex = resultString.indexOf(str[i]);

    if (currentItemIndex !== -1) {
      resultString.splice(0, currentItemIndex + 1);
    }
    resultString.push(str[i]);

    longestLength = Math.max(longestLength, resultString.length);
  }
  return longestLength;
};

const sol = LongestNotRepeated("aaaabc");
console.log(sol);
