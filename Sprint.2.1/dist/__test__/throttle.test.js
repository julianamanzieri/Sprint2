import { throttle } from "../throttle";
describe("Throttle Function Tests", () => {
    jest.useFakeTimers();
    test("Should execute throttle function immediately", () => {
        const mockFn = jest.fn();
        const throttledFn = throttle(mockFn, 100);
        throttledFn("Function Throttle 1");
        expect(mockFn).toBeCalled();
        jest.advanceTimersByTime(150);
        throttledFn("Function Throttle 2");
        expect(mockFn).toBeCalledTimes(2);
    });
    test("Should throttle multiple calls", () => {
        const mockFn = jest.fn();
        const throttledFn = throttle(mockFn, 100);
        throttledFn("Function Throttle 1");
        expect(mockFn).toBeCalled();
        jest.advanceTimersByTime(50);
        throttledFn("Function Throttle 2");
        jest.advanceTimersByTime(100);
        throttledFn("Function Throttle 3");
        expect(mockFn).toBeCalledTimes(2);
    });
});
//# sourceMappingURL=throttle.test.js.map