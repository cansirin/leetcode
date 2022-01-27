const firstUniqueChar = (s: string): number => {
  const letters = s.split("");
  for (const letter of letters) {
    const firstIndex = letters.indexOf(letter);
    const lastIndex = letters.lastIndexOf(letter);
    if (firstIndex === lastIndex) {
      return firstIndex;
    }
  }
  return -1;
};

console.log(firstUniqueChar("aabb"));
