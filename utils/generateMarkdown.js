function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
  }
  
  // Function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license !== 'None') {
      return  `\n* [License](#license)\n`;
    }
    return '';
  }
  
  // Function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license !== 'None') {
      return `## License
      This project is licensed under the ${license} license.`;
    }
    return '';
  }


// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    This project is licensed under the ${license} license.`;
  }
  return '';
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  
  ## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
To install necessary dependencies, run the following command:
\`\`\`
npm i
\`\`\`
## Usage
* In Visual Studio, right click index.js > Open in integrated terminal
* Type “node index.js” in your terminal and hit enter
* Answer prompts provided by the generator

${renderLicenseSection(data.license)}
## Contributing
1. Fork the repository to your personal Github. Forking is basically an easy way to make a duplicate of the repository to your own account.
2. Now that you have forked the repository to your account, go to the repository in your account, then click on the clone button and hit the copy to clipboard icon.
3. Now, open a terminal on your local machine and clone the forked repository by doing: git clone <copied url>
4. Create a branch in git inside your local machine: git checkout -b <branch-name>
5. Now you can fix bugs or do whatever you need to do in order to improve the code in the project. Follow the code style of the project, including indentation. If the project has tests run them! Write or adapt tests as needed. Add or change the documentation as needed. Remember to make sure the changes are applied only to the branch you created!
6. Open Contributors.md in a text editor and add your name to it. Don’t add it at the beginning or the end of the file, add it anywhere in the middle of it. Now, save the file.
7. Commit those changes by doing git commit -m "Added <your-name> to contributors list “-m” tells git that you are committing the changes with a message to tell people what the commit is about.
8. Push those changes to the forked repository on Github via: git push origin <your-branch-name> replacing “<your-branch-name> with the name of the branch you created earlier.
## Tests
To run tests, run the following command:
\`\`\`
npm test
\`\`\`
## Questions

For any questions or bugs, contact me at Github: [${data.github}](https://github.com/${
  data.github
}/) or contact me directly at ${
    data.email
  }.`;
}

module.exports = generateMarkdown;