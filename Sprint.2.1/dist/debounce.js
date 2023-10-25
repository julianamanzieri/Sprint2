const debounce = (func, timeout) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, timeout);
    };
};
export default debounce;
//# sourceMappingURL=debounce.js.map