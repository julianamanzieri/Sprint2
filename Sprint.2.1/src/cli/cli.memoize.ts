import inquirer from "inquirer";
import { memoize } from "../memoize.js";

function isUniqueExponential(array: any[]): boolean {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j && array[i] === array[j]) {
        return false;
      }
    }
  }
  return true;
}

const questions = [
  {
    type: "input",
    name: "times",
    message: "Enter the number of times to check:",
  },
];

const params = [1, 2, 5];

inquirer.prompt(questions).then(async (answers) => {
  const { times } = answers;
  const isUniqueExponentialMemoized = memoize(isUniqueExponential);

  for (let i = parseInt(times, 10); i > 0; i--) {
    for (const param of params) {
      const paramArray = new Array(param).fill(0);

      const result = isUniqueExponentialMemoized(paramArray);
      console.log(`Result for ${param}: ${result}`);
    }
  }
});
