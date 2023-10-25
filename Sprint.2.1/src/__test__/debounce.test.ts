import debounce from "../debounce";

describe("Give me a debounce function ", () => {
  jest.useFakeTimers();
  const mockFn = jest.fn();

  describe("When it receives a callback function and 100ms of delay", () => {
    beforeEach(() => {
      mockFn.mockClear();
    });

    test("Should execute debounce function after the specified delay", async () => {
      const debouncedFn = debounce(mockFn, 100);

      debouncedFn();
      expect(mockFn).not.toBeCalled();

      jest.advanceTimersByTime(100);

      expect(mockFn).toBeCalled();
    });

    test("Should debounce multiple calls", () => {
      const debouncedFn = debounce(mockFn, 100);

      debouncedFn();
      debouncedFn();
      debouncedFn();
      expect(mockFn).not.toBeCalled();

      jest.advanceTimersByTime(120);

      expect(mockFn).toBeCalled();
    });
  });
});
