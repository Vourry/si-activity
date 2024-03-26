function simplifyDeviation(deviation: number): number {
  if (deviation >= 26) return deviation % 26;
  return deviation;
}

function prevLetter(letter: string) {
  if (letter === 'A') { return 'Z'; }
  return String.fromCharCode(letter.charCodeAt(0) - 1);
}

export function decrypt(ciphertext: string, deviation: number) {
  const dev = simplifyDeviation(deviation);
  const plaintext = [];
  for (const char of ciphertext) {
    let temp = char;
    for (let i = 0; i < dev; i++) {
      temp = prevLetter(temp);
    }
    plaintext.push(temp);
  }
  return plaintext.join("");
}
