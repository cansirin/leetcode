// sliding window
function checkInclusion(s1: string, s2: string): boolean {
  const s1array = s1.split("");
  const s2array = s2.split("");
  const windowSize = s1.length;

  for (let i = 0; i <= s2array.length - windowSize; i++) {
    const slice = s2array.slice(i, i + windowSize);
    console.log(s1array.sort().toString(), "s1", slice.toString(), "slice");
    if (s1array.sort().toString() == slice.sort().toString()) return true;
  }
  return false;
}

console.log(checkInclusion("adc", "dcda"));
