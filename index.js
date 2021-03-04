// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input

inquirer.prompt([ {
    type: 'input',
    message: "What is the title of your project?",
    name: 'projectTitle',
},
{
    type: 'input',
    message: "Please offer a brief description of your project.",
    name: 'projectDesc',
},
{
    type: 'input',
    message: "Installation instructions for this project (if any)?",
    name: 'installInstructions',
},
{
    type: 'input',
    message: "Usage information for this project?",
    name: 'usageInformation',
},
{
    type: 'input',
    message: "Contributors to this project?",
    name: 'contributors',
},
{
    type: 'input',
    message: "Are there any tests for this project?",
    name: 'projectTests',
},
{
    type: 'input',
    message: "What is your Github username?",
    name: 'gitUsername',
},
{
    type: 'input',
    message: "What is your email address?",
    name: 'userEmail',
},
])
.then((answers) =>
    fs.writeFile('test.md', generateReadme(answers), function(err){
        if (err) return console.log(err);
    })
  );

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
