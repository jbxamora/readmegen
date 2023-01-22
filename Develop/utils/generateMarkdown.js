// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  switch(license) {

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
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
let link;
  switch (license) {
    case "MIT":
      link = "https://opensource.org/licenses/MIT";
      return link;

    case "APACHE":
      link = "https://opensource.org/licenses/Apache-2.0";
      return link;

    case "MOZILLA":
      link = "https://opensource.org/licenses/MPL-2.0";
      return link;

    case "BSD":
      link = "https://opensource.org/licenses/BSD-3-Clause";
      return link;
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
  return 'More Information: 
  ${renderLicenseLink(license)}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
