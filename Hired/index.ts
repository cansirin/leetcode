const hired = (angles) => {
  let openingCount = 0;
  let extras = 0;
  const str = angles.split("");
  for (const letter of str) {
    if (letter === ">") {
      if (openingCount === 0) {
        extras++;
      } else {
        openingCount--;
      }
    } else {
      openingCount++;
    }
  }
  const startingTags = "<".repeat(extras);
  const trailingTags = ">".repeat(openingCount);
  return startingTags + angles + trailingTags;
};
