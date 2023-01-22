var inquirer = require("inquirer");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;
  if (!license) {
    return "";
  } else {
    switch (license) {

      case "MIT":
        badge =
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        return badge;

      case "APACHE":
        badge =
          "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        return badge;

      case "MOZILLA":
        badge =
          "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
        return badge;

      case "BSD":
        badge =
          "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        return badge;
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link;
  if (!license) {
    return "";
  } else {
    switch (license) {
      case "MIT":
        link = "[MIT License](https://opensource.org/licenses/MIT)";
        break;

      case "APACHE":
        link = "[Apache License](https://opensource.org/licenses/Apache-2.0)";
        break;

      case "MOZILLA":
        link = "[Mozilla License](https://opensource.org/licenses/MPL-2.0)";
        break;

      case "BSD":
        link = "[BSD License](https://opensource.org/licenses/BSD-3-Clause)";
        break;

      default:
        link = "";
    }
    return link;
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
  return `For more information about ${renderLicenseLink(
    license
  )}, please click the link`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
 ## Description 
  ${data.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  
  ## Installation
  ${data.install}
  
  ## Usage
  ${data.howToUse}
  ${data.whatUseFor}
  ## License
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contributors}
  ## Tests
  ${data.tests}
    
  ### Questions
  To ask additional questions send me an email at ${data.email
    } or for additional information https://github.com/${data.username}.
`;
}

module.exports = generateMarkdown;
