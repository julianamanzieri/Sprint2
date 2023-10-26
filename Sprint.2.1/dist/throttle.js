export const throttle = (func, time) => {
    let lastTime;
    return (...args) => {
        let now = Date.now();
        if (!lastTime || now >= lastTime + time) {
            func(...args);
            lastTime = now;
        }
    };
};
//# sourceMappingURL=throttle.js.map