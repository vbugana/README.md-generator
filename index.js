const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// Array of questions for user input only what it is actually needed
const questions = [
    {
        type: 'input',
        name: 'title',//add a unique title for the project
        message: "What is the title of your project?",
      },
      {
        type: 'input',
        name: 'description',//simple clear description of what the project is all about
        message: 'Enter a short description of the project.',
      },
      {
        type: 'list',
        name: 'license',//licensed under if any license has been chosen
        message: 'What kind of license should your project have?',
        choices: ['APACHE2.0','MIT','None'],
      },
    {
        type: 'input',
        name: 'github',//github username
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',//email details in oder to be contacted
        message: 'What is your email address?',
      },
   
];

// Function to write README file

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
      writeToFile('README.md', generateMarkdown({ ...responses }));
    });
}

// Function call to initialize app
init();

