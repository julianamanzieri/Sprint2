import inquirer from "inquirer";
import { throttle } from "./throttle.js";
const questions = [
    {
        type: "input",
        name: "function",
        message: "Enter the function to throttle:",
    },
    {
        type: "input",
        name: "time",
        message: "Enter the throttle time (in miliseconds):",
    },
];
inquirer.prompt(questions).then((answers) => {
    if (!answers.function || !answers.time) {
        console.error("You must provide both a function and a time!");
        process.exit(1);
    }
    const throttledFunction = throttle(() => {
        console.log("Function throttled");
    }, parseInt(answers.time, 10));
    throttledFunction();
    setTimeout(() => {
        throttledFunction();
    }, 1000);
});
//# sourceMappingURL=cli.throttle.js.map