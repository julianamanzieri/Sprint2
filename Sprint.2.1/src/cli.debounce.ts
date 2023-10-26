import inquirer from "inquirer";
import debounce from "./debounce.js";

const questions = [
  {
    type: "input",
    name: "message",
    message: "Enter the message you want to display:",
  },
  {
    type: "input",
    name: "timeout",
    message: "Enter the debounce timeout (in milliseconds):",
  },
];

inquirer.prompt(questions).then((answers) => {
  const debounceFn = debounce(() => {
    console.log(answers.message);
  }, parseInt(answers.timeout));

  debounceFn();
});
