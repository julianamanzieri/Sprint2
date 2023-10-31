import inquirer from "inquirer";
import { throttle } from "../throttle";
const questions = [
    {
        type: "input",
        name: "message",
        message: "Enter the message:",
    },
    {
        type: "input",
        name: "delay",
        message: "Enter delay (in miliseconds):",
    },
    {
        type: "number",
        name: "numCalls",
        message: "Enter the number of calls:",
    },
];
inquirer.prompt(questions).then((answers) => {
    const { delay, message, numCalls } = answers;
    const throttledFunc = throttle(() => {
        console.log(message);
    }, parseInt(delay, 10));
    for (let i = 0; i < numCalls; i++) {
        setTimeout(() => {
            throttledFunc();
        }, i * (parseInt(delay, 10) / 2));
    }
});
