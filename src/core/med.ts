import { randNum } from ".";

export function genBinaryNumbers() {
  const nums = [];
  for (let i = 0; i < 4; i++) {
    nums.push(randNum(0x3c))
  }
  return nums;
}
