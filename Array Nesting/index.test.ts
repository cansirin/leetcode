import { arrayNesting } from "./index";

describe("Array nesting", () => {
  it("works", () => {
    const a = arrayNesting([5, 4, 0, 3, 1, 6, 2]);
    expect(a).toBe(4);
  });

  it("works 2", () => {
    const array = arrayNesting([0, 1, 2]);
    expect(array).toBe(1);
  });
});
