// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.projectTitle}

  [![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-yellow.svg)](https://opensource.org/licenses/${answers.license})

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Issues](#issues)

## Description 
${answers.projectDesc}

## Installation
${answers.installInstructions}

## Usage 
${answers.usageInformation}

## Contributing
${answers.contributors}

## Tests 
${answers.projectTests}

## License 
This application is covered under the ${answers.license} license. 

## Issues

If you would like to report any issues or have any other general questions, you can email me at ${answers.userEmail}
You can also look through the project repository yourself on [My Github page](https://github.com/${answers.gitUsername}).

`;
}

module.exports = generateMarkdown;
