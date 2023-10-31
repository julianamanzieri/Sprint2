var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import inquirer from "inquirer";
import { memoize } from "../memoize.js";
function isUniqueExponential(array) {
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
inquirer.prompt(questions).then((answers) => __awaiter(void 0, void 0, void 0, function* () {
    const { times } = answers;
    const isUniqueExponentialMemoized = memoize(isUniqueExponential);
    for (let i = parseInt(times, 10); i > 0; i--) {
        for (const param of params) {
            const paramArray = new Array(param).fill(0);
            const result = isUniqueExponentialMemoized(paramArray);
            console.log(`Result for ${param}: ${result}`);
        }
    }
}));
