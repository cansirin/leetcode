/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

const FirstBadVersion = function (isBadVersion: any) {
  return function (n: number): number {
    const a = Array.from({ length: n + 1 }, (_, i) => i).find(
      (version) => isBadVersion(version) || -1
    );
    console.log(a);
    return a;
  };
};
