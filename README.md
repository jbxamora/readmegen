# README GENERATOR

This simple command line application is a README generator that uses Node.js and the npm package inquirer to prompt the user for information and then generate a README file based on the input. The user will be prompted for their project title, description, installation instructions, usage information, and a list of contributors. Once all the information has been collected, the generator will create a new README file in the current directory with the user's input formatted in a clean and professional manner. This tool allows for quick and easy README creation, saving time for developers.

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```
## Installation

To generate your own README, `git clone` the repo down to your local so you have the Node project on your local.

Run `npm install` in order to install the following npm package dependencies as specified in the `package.json`:

  * [`inquirer`](https://www.npmjs.com/package/inquirer) will prompt you for your inputs from the command line.
  * [`axios`](https://www.npmjs.com/package/axios) will fetch your info from the GitHub API.

The application will start by running `node index.js` in the command line.

Answer the prompts in your command line to generate the README.

After answering all the prompts, your README file will be named 'ExampleREADME.md' and will be ready for you at the root of the repo.

The README has some automatically generated badges for your repo courtesy of shields.io and will include your profile picture & email from GitHub.




https://user-images.githubusercontent.com/113067058/215414926-34f0772a-5887-4a07-ad7e-8a486109a369.mov





![THIS APP ISNT DEPLOYED ON GITPAGES](./)

## Code Snippets

### How To Write a File Using fs Module

```js
const fs = require('fs');
```

```js

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log("README.md was Created!")
    );
}

```

## License

MIT License

Copyright (c) [2022] [Jorge Zamora]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Badges

<a href=”https://www.linkedin.com/in/jorge-zamora-786945250/”>
<img src='https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin&labelColor=blue'>

![badmath](https://img.shields.io/github/followers/jbxamora?label=JBXAMORA&logoColor=%23fd2423&style=social)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. If the issue goes unresolved for more than a week feel free to contact me at any of the links listed below. Be sure to add me on LinkedIn and Follow me on GitHub to view my course progression. You can also visit the deployed site and sent a messafe through the contact form.

[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg' alt='github' height='40'>](https://github.com/jbxamora) [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg' alt='linkedin' height='40'>](https://www.linkedin.com/in/jorge-zamora-786945250//) [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg' alt='instagram' height='40'>](https://www.instagram.com/jbxamora/) [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/stackoverflow.svg' alt='stackoverflow' height='40'>](https://stackoverflow.com/users/20023706/jbxamora)
