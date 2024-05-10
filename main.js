#!/usr/bin/env node
// Typescript Project Quiz System
import chalk from "chalk";
import inquirer from "inquirer";
console.log((chalk.yellowBright)("Welcome to my quiz system"));
console.log((chalk.yellowBright)("you are required to gain maximum 4 points for the window."));
let points = 0;
//question # 01
let question1 = await inquirer.prompt([
    {
        name: "one",
        message: chalk.blueBright("typescript is a superset off?"),
        type: "list",
        choices: ["python", "javascript", "c++", "java"]
    }
]);
if (question1.one == "javascript") {
    console.log((chalk.greenBright)("your answer is correct!"));
    points++;
}
else {
    console.log((chalk.redBright)("your answer is incorrect!"));
}
//question # 02
let question2 = await inquirer.prompt([
    {
        name: "two",
        message: chalk.blueBright("capital of pakistan?"),
        type: "list",
        choices: ["karachi", "punjab", "islamabad", "kpk"]
    }
]);
if (question2.two == "islamabad") {
    console.log((chalk.greenBright)("your answer is correct!"));
    points++;
}
else {
    console.log((chalk.redBright)("your answer is incorrect!"));
}
//question # 03
let question3 = await inquirer.prompt([
    {
        name: "three",
        message: chalk.blueBright("who is the founder of chatgpt?"),
        type: "list",
        choices: ["mark zuckerberg", "elon musk", "Sam altman", "bill gates"]
    }
]);
if (question3.three == "Sam altman") {
    console.log((chalk.greenBright)("your answer is correct!"));
    points++;
}
else {
    console.log((chalk.redBright)("your answer is incorrect!"));
}
//question # 04
let question4 = await inquirer.prompt([
    {
        name: "four",
        message: chalk.blueBright("typescript is develop and maintain by?"),
        type: "list",
        choices: ["google", "microsoft", "facebook", "mozilla"]
    }
]);
if (question4.four == "microsoft") {
    console.log((chalk.greenBright)("your answer is correct!"));
    points++;
}
else {
    console.log((chalk.redBright)("your answer is incorrect!"));
}
//question # 05
let question5 = await inquirer.prompt([
    {
        name: "five",
        message: chalk.blueBright("what is the file extension for typescript file?"),
        type: "list",
        choices: [".js", ".css", ".html", ".ts"]
    }
]);
if (question5.five == ".ts") {
    console.log((chalk.greenBright)("your answer is correct!"));
    points++;
}
else {
    console.log((chalk.redBright)("your answer is incorrect!"));
}
// output coditions
if (points >= 4) {
    console.log((chalk.greenBright)("Congratulations!"));
    console.log((chalk.greenBright)(`Your point: ${points}`));
}
else {
    console.log((chalk.redBright)("your loss! try next time"));
    console.log((chalk.redBright)(`Your point: ${points}`));
}
