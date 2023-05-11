// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

 
const generateREADME = ({title, github, email, description, installation, usage, license, contribution, test}) => {
    return `
${title}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

## Description 
${description}

## Installation 
${installation}

## Usage 
${usage}

## License
${license}

## Contribution 
${contribution}

## Tests 
${test}

## Questions 
If there are any questions left unanswered, please feel free to reach out via:
${github}
or 
${email} `;
};

// TODO: Create an array of questions for user input
inquirer
.prompt([
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
        type: 'list',
        name: 'license',
        message: 'Select a licnese type:',
        choices: ['MIT', 'none', 'LIC']
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
        message: "contribution guidelines"
    },
    {
        type: 'input',
        name: 'test',
        message: "Test instructions"
    },
])
.then((answers) => {
    const readmeContent = generateREADME(answers);

    fs.writeFile('README.md', readmeContent, (err) => {
      err ? console.log(err) : console.log('Successfully created a README.md!')
})
});

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
