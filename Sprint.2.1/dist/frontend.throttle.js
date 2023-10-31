import { throttle } from "./throttle.js";
const displayMessage = (message) => {
    console.log(message);
};
const throttleDisplay = throttle(displayMessage, 500);
setTimeout(() => {
    throttleDisplay("Function Throttle 1");
}, 1000);
setTimeout(() => {
    throttleDisplay("Function Throttle 2");
}, 2000);
