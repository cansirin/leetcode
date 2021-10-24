function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  newColor: number
): number[][] {
  const fourDirection = (i: number, j: number, m: number, n: number) => {
    const left = [i, j - 1];
    const right = [i, j + 1];
    const top = [i - 1, j];
    const bottom = [i + 1, j];

    return [top, right, bottom, left];
  };

  return [];
}
