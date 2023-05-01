// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

const generateREADME = ({title, github, email, description, installation, usage, contribution, test }) =>
`
# Title 
${title}

## Description 
${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation 
${installation}

## Usage 
${usage}

## License

## Contribution 
${contribution}

## Tests 
${test}

## Questions 
${github} 
${email} `;

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your README?"
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your GitHub username?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the email address that you can be reached at?"
    },
    {
        type: 'input',
        name: 'description',
        message: "Give a description"
    },
    {
        type: 'input',
        name: 'installation',
        message: "What are your installation instructions?"
    },
    {
        type: 'input',
        name: 'usage',
        message: "What is the usage information?"
    },
    {
        type: 'input',
        name: 'contribution',
        message: "contriution guidelines"
    },
    {
        type: 'input',
        name: 'test',
        message: "Test instructions"
    }
].then(() => {
    
}) 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
fs.writeFile('README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
// TODO: Create a function to initialize app
function init(,) {}

// Function call to initialize app
init();
