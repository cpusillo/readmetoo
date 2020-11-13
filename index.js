// Import our application dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const lics = require("./licenses");

/*
    getUserInput() uses inquirer to collect description, installation instructions, 
    usage information, contribution guidelines, and test instructions for the README file.
*/
async function getUserInput() {
    // Try to load the inquirer prompts to get our user's input.
    try {
        const data = await inquirer.prompt([{
                type: "input",
                message: "Application name: ",
                name: 'name',
            },
            {
                type: "input",
                message: "Application description: ",
                name: 'description',
            },
            {
                type: "input",
                message: "Installation Instructions: ",
                name: 'installation',
            },
            {
                type: "input",
                message: "Usage Instructions: ",
                name: 'usage',
            },
            {
                type: "input",
                message: "Contribution guidelines: ",
                name: 'contribution',
            },
            {
                type: "input",
                message: "Testing instructions: ",
                name: 'test',
            },
            {
                type: "list",
                message: "Choose a license: ",
                name: "licenses",
                choices: [
                    "Apache License 2.0",
                    "GNU Lesser General Public License v2.0",
                    "GNU General Public License v3.0",
                    "MIT License",
                    "BSD 2-Clause 'Simplified' License",
                    "Boost Software License 1.0",
                    "Creative Commons Zero v1.0 Universal",
                    "Eclipse Public License 2.0",
                    "Mozilla Public License 2.0",
                    "The Unlicense"
                ]
            },
            {
                type: "input",
                message: "Enter your email address: ",
                name: 'email',
            },
            {
                type: "input",
                message: "Enter your github username: ",
                name: 'github',
            },
        ]);
        return data;
    } catch (error) {
        console.log(error);
    }
} // end of getUserInput()

/*
    writeReadMe() returns the finalized product, a readme.md file
    based on the supplied answers from getUserInput().
*/
async function writeReadMe() {

    // Deconstruct our object for easier use.
    const {
        name,
        description,
        installation,
        usage,
        contribution,
        test,
        licenses,
        email,
        github
    } = await getUserInput();

    // Get our license images from the licenses.js file.
    const lic = lics.getLicense(licenses);

    // Write our markdown file contents.
    const myMarkdown =
        `
   # ${name}

   ## License
   ${lic} | This app is licensed under ${licenses}

   ## Table of Contents
   - [Licensing Information](#License)
   - [Description](#Description)
   - [Usage](#Usage)
   - [Contribution](#Contribution)
   - [Tests](#Tests)
   - [Questions](#Questions)
   
   ## Description
   ${description}

   ## Installation
   ${installation}

   ## Usage
   ${usage}

   ## Contribution
   ${contribution}

   ## Tests
   ${test}

   ## Questions
   [Shoot me an email](mailto:${email})

   [Visit my Github profile](https://github.com/${github})
   `

    // Take the myMarkdown variable and print it to a file
    fs.writeFile("./generated-file/README.md", myMarkdown, (err) =>
        err ? console.log(err) : console.log("ReadMe.md created successfully!")
    );
}

writeReadMe();