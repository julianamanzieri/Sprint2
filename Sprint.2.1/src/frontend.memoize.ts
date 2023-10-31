import { memoize } from "./memoize.js";
import generateRandomArray from "./generateRandomArray.js";
import isUniqueExponential from "./isUniqueExponential.js";
import measureTime from "./measureTime.js";

const inputMemoize = document.getElementById(
  "memoize_number"
) as HTMLInputElement;
const buttonMemoization = document.querySelector(
  ".memoize"
) as HTMLButtonElement;
const buttonNoMemoization = document.querySelector(
  ".no_memoize"
) as HTMLButtonElement;

const params = [
  generateRandomArray(19000),
  generateRandomArray(19000),
  generateRandomArray(19000),
  generateRandomArray(19000),
];

buttonMemoization?.addEventListener("click", () => {
  console.clear();
  const times = Number(inputMemoize.value);
  const isUniqueExponentialMemoized = memoize(isUniqueExponential);
  console.log("USING MEMOIZE");
  console.log("First execution");
  for (let i = times; i > 0; i--) {
    params.forEach((param) => {
      measureTime(isUniqueExponentialMemoized, param);
    });
  }

  console.log("---Finished---");
});

buttonNoMemoization?.addEventListener("click", () => {
  console.clear();
  const times = Number(inputMemoize.value);
  console.log("NOT USING MEMOIZE");
  console.log("First execution");
  for (let i = times; i > 0; i--) {
    params.forEach((param) => {
      measureTime(isUniqueExponential, param);
    });
  }

  console.log("---Finished---");
});
