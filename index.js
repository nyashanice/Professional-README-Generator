// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
let questionsArr = [];
// TODO: Create an array of questions for user input
const init = async () => {
  const questions = await inquirer.prompt([
    {
      type: "input",
      message: "What is your project's title?",
      name: "title",
    },
    {
      type: "input",
      message: "Please enter your project description.",
      name: "description",
    },
    {
      type: "input",
      message: "What are the installation instructions?",
      name: "installation",
    },
    {
      type: "input",
      message: "What is the usage information?",
      name: "usage",
    },
    {
      type: "input",
      message: "What are the contribution guidelines?",
      name: "contribution",
    },
    {
      type: "input",
      message: "What are the test instructions?",
      name: "test",
    },
    {
      type: "list",
      message: "Please choose a license",
      name: "license",
      choices: [
        "None",
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        "BSD 2-Clause Simplified License",
        "BSD 3-Clause New or Revised License",
        "Boost Software License 1.0",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0",
        "GNU Affero Genral Public License v3.0",
        "GNU General Public License v2.0",
        "GNU Lesser General Public License v2.1",
        "Mozilla Public License 2.0",
        "The Unilicense",
      ],
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "github",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
  ]);
  console.log(questions);
  questionsArr.push(questions);
  writeToFile();
};

// TODO: Create a function to write README file
const writeToFile = () => {
  try {
    fs.writeFileSync("dist/README.md", generateMarkdown(questionsArr));
  } catch (error) {
    console.log(error);
  }
};

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
init();
