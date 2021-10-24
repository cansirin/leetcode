function reverseWords(s: string): string {
  return s
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseWords("Let's take LeetCode contest"));
