// Your tests here
import { pointsForWords } from "../utils";

describe("pointsForWords", () => {
  it("calculates the total points for a word (1 per vowel, 2 per consonant)", () => {
    const word = "test";
    const points = pointsForWords(word);
    expect(points).toBe(7);
  });
});
