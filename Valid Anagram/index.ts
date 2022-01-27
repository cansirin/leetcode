function isAnagram(s: string, t: string): boolean {
  const convertToMap = (str: string): {} => {
    const letters = str.split("");
    const map = {};
    for (const char of letters) {
      map[char] = map[char] ? map[char] + 1 : 1;
    }
    return map;
  };
  const sMap = convertToMap(s);
  const tLetters = t.split("");

  for (const letter of tLetters) {
    sMap[letter] = sMap[letter] ? sMap[letter] - 1 : -1;
  }

  return Object.values(sMap).every((letterValue) => letterValue === 0);
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "cat"));
