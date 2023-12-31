import debounce from "./debounce.js";

const displayMessage = (message: string) => {
  console.log(message);
};

const debounceDisplay = debounce(displayMessage, 500);

setTimeout(() => {
  debounceDisplay("Function Debounce 1");
}, 1000);

setTimeout(() => {
  debounceDisplay("Function Debounce 2");
}, 2000);
