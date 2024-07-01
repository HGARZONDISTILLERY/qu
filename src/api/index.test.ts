import { extendResponseValue } from ".";
import { Joke } from "../utils/types";

describe('extendResponseValue', () => {
  it('should extend response data with votes', () => {
    const response = {
      data: [
        { type: 'general', setup: 'Why did the scarecrow win an award?', punchline: 'Because he was outstanding in his field!', id: 1 },
        { type: 'programming', setup: 'Why do programmers prefer dark mode?', punchline: 'Less light means less electricity.', id: 2 }
      ] as Joke[]
    };

    const extendedResponse = extendResponseValue(response);

    extendedResponse.forEach((joke) => {
      expect(joke).toHaveProperty('votes');
      expect(joke.votes).toBeGreaterThanOrEqual(1);
      expect(joke.votes).toBeLessThanOrEqual(100);
    });
  });
});