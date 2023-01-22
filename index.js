// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require("./Develop/utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    "What is the name of your project?",
    "What is your UserName for Github?",
    "What is your email?",
    "Write a description of your project.",
    "Write some steps for installing your app",
    "How do you use your app?",
    "What is your app used for?",
    "What license would you like to use?",
    "Are there any other contributors to this project?",
    "If you have tests for your app input them now"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log("README.md was Created!")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: questions[0],
        },
        {
            type: "input",
            name: "username",
            message: questions[1],
        },
        {
            type: "input",
            name: "email",
            message: questions[2],
        },
        {
            type: "input",
            name: "description",
            message: questions[3],
        },
        {
            type: "input",
            name: "install",
            message: questions[4],
        },
        {
            type: "input",
            name: "howToUse",
            message: questions[5],
        },
        {
            type: "input",
            name: "useCase",
            message: questions[6],
        },
        {
            type: "input",
            name: "license",
            message: questions[7],
            choices: [
                "MIT",
                "APACHE",
                "MOZILLA",
                "BSD",
            ],
        },
        {
            type: "input",
            name: "contributors",
            message: questions[8],
        },
        {
            type: "input",
            name: "tests",
            message: questions[9],
        },
    ])
        .then((answers) => {
        const mdPage = generateMarkdown(answers);
        writeToFile("Gen-README.md", mdPage);
    });
}

// Function call to initialize app
init();
