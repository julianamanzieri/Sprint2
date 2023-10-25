var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import debounce from "../debounce";
describe("Give me a debounce function ", () => {
    jest.useFakeTimers();
    const mockFn = jest.fn();
    describe("When it receives a callback function and 100ms of delay", () => {
        beforeEach(() => {
            mockFn.mockClear();
        });
        test("Should execute debounce function after the specified delay", () => __awaiter(void 0, void 0, void 0, function* () {
            const debouncedFn = debounce(mockFn, 100);
            debouncedFn();
            expect(mockFn).not.toBeCalled();
            jest.advanceTimersByTime(100);
            expect(mockFn).toBeCalled();
        }));
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
//# sourceMappingURL=debounce.test.js.map