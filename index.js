const inquirer = require("inquirer");
const fs = require("fs");

/*
    getUserInput() uses inquirer to collect description, installation instructions, 
    usage information, contribution guidelines, and test instructions for the README file.
*/
async function getUserInput() {

    try{
const data = await inquirer.prompt([
    {
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
    }
])
return data;
} catch(error){
    console.log(error);
}
} // getUserInput()

async function writeReadMe(){

    // Destructure answers here 
const {name, description, installation, usage, contribution, test} = await getUserInput();

   const myHTML = 
   `
   # ${name}
   ## Description
   ${description}

   ## Installation Instructions
   ${installation}

   ## Usage Instructions
   ${usage}

   ## Contribution Instructions
   ${contribution}

   ## Testing Instructions
   ${test}
   `


fs.writeFile("./generated-file/README.md", myHTML, (err) =>
    err ? console.log(err) : console.log("ReadMe.md created successfully!")
);
}
writeReadMe();