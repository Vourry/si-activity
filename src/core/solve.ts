import { randNum } from ".";
import { decrypt } from "./caesar";

const sample = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export interface Question {
  id: number;
  sequence: number[];
  deviation: number;
  plain: string;
  cipher: string;
  result?: boolean;
}

function randLen() {
  return 5 + Math.ceil(Math.random() * 5);
}

function randCipher() {
  const cipher = [];
  for (let i = 0; i < 15; i++) {
    cipher.push(sample[randNum(26)]);
  }
  return cipher.join("");
}

function mod(a: number, b: number) {
  if (b == 0) return a;
  else return a % b;
}

function compress(seq: number[]): number {
  const next = [];
  for (let i = 0; i < seq.length - 1; i++) {
    next.push(mod(seq[i], seq[i + 1]));
  }
  if (next.length >= 2) {
    return compress(next);
  }
  return next[0];
}

export function gen(throwZero: boolean): Omit<Question, "id"> {
  const seq = [];
  for (let i = 0; i < randLen(); i++) {
    seq.push(randNum(100));
  }
  const dev = compress(seq);
  if (throwZero && dev === 0) {
    return gen(false); // throw zero deviation for once
  }
  const cipher = randCipher();
  return { sequence: seq, deviation: dev, cipher, plain: decrypt(cipher, dev) };
}
