// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return "";
  } 
  if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)`;
  }
  else if (license === 'LIC') {
    return `![License: LIC](https://img.shields.io/badge/License-LIC-yellow.svg)`;
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 return `# ${data.title}

`;
}

module.exports = generateMarkdown;
