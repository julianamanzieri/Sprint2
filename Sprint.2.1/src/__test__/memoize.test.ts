import { memoize } from "../memoize";

jest.useFakeTimers();

describe("Give me a memoize function", () => {
  describe("When it is called with a callback", () => {
    test("Should memoize a function and return the same result for the same arguments", () => {
      const add = (a: number, b: number) => a + b;

      const memoizeAdd = memoize(add);

      const result1 = memoizeAdd(4, 6);
      const result2 = memoizeAdd(4, 6);
      const result3 = memoizeAdd(4, 6);

      expect(result1).toBe(result2);
      expect(result2).toBe(result3);
    });

    test("Should call the original function only once for the same arguments", () => {
      const divide = jest.fn((a: number, b: number) => a / b);
      const memoizedDivide = memoize(divide);

      memoizedDivide(10, 5);
      memoizedDivide(10, 5);
      memoizedDivide(10, 5);

      expect(divide).toHaveBeenCalledTimes(1);
    });

    test("Should memoize a function with different arguments", () => {
      const multiply = jest.fn((a: number, b: number) => a * b);
      const memoizedMultiply = memoize(multiply);

      const result1 = memoizedMultiply(2, 4);
      const result2 = memoizedMultiply(5, 3);

      expect(result1).toBe(8);
      expect(result2).toBe(15);
    });
  });
});
