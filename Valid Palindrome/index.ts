function isPalindrome(s: string): boolean {
  if (s.length === 1 || s === " ") {
    return true;
  }
  const realString = s.replace(/[^0-9a-z]/gi, "").toLowerCase();

  return realString === realString.split("").reverse().join("");
}

// @ts-ignore
const isPalind = isPalindrome("A man, a plan, a canal: Panama");
const isPalind1 = isPalindrome("a");

console.log(isPalind);
console.log(isPalind1);
