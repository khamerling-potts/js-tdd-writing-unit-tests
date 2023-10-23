// Your code here
export function pointsForWords(word) {
  let points = 0;
  for (const char of word) {
    if (["a", "e", "o", "i", "u"].includes(char)) {
      points += 1;
    } else {
      points += 2;
    }
  }
  return points;
}
