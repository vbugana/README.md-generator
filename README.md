# README.md-Generator
## Description
This application allows a user to quickly and easily create a README file by using a command-line application to generate one. 
This allows the project creator to devote more time to working on the project.
Through a command-line the application dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer).  

The application will be invoked by using the following command:

```bash
node index.js
```

## User Story

* As a developer, I want a README generator so that I can quickly create a professional README for a new project
  
## Acceptance Criteria

* Create a command-line application that accepts user input.
  * When a user is prompted for information about the application repository then a high-quality, professional README.md is generated with:
    * The title of my project 
    * Sections entitled:
      * Description 
      * Table of Contents 
      * Installation 
      * Usage 
      * License 
      * Contributing 
      * Tests 
      * Questions
    * When a user enters the project title then it is displayed as the title of the README
    * When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    * When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled **License** that explains which license the application is covered under
    * When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
    * When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
    * When a user clicks on the links in the **Table of Contents** then they are taken to the corresponding section of the README

## Installation

To generate your own README.md file:
* Navigate to the README Generator and git pull the latest repository to your local machine
* Run npm install in order to install inquirer
* Using your terminal, use the command node index.js to initialize the application
  
## Usage
In Visual Studio:
* Right click index.js > Open in integrated terminal
* Type "node index.js" in your terminal and hit enter
* Answer prompts provided by the generator

## Preview
[demo.mp4](https://user-images.githubusercontent.com/images/Untitled_%20Jan%2023,%202023%207_57%20PM.mov)

## Contributions
Unapplicable

## Tests
Run the generator on your local machine for testing.

## License
License: MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
