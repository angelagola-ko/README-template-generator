// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What's the project title?",
        name: 'title',
        validate: (value) => {if (value) {return true} else {return 'Please enter a value to continue.'}}
    },
    { 
        type: 'input',
        message: "Please give a breif description of the project.",
        name: 'description',
        validate: (value) => {if (value) {return true} else {return 'Please enter a value to continue.'}}
        
    },
    { 
        type: 'input',
        message: "Please enter installation requirements.",
        name: 'installation',
        validate: (value) => {if (value) {return true} else {return 'Please enter a value to continue.'}}
        
    },
    { 
        type: 'input',
        message: "Please enter usage information.",
        name: 'usage',
        validate: (value) => {if (value) {return true} else {return 'Please enter a value to continue.'}}
        
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select license',
        choices: ['MIT', 'GNU']
      },
    { 
        type: 'input',
        message: "Please enter your name.",
        name: 'creator',
        validate: (value) => {if (value) {return true} else {return 'Please enter a value to continue.'}}
        
    },

    //Description,Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
    // installation instructions, usage information, contribution guidelines, and test instructions
    //choose a license for my application from a list of options //badge for that license appears
    //Questions, with a link to my GitHub profile
//WHEN I enter my email address
//THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
//WHEN I click on the links in the Table of Contents
//THEN I am taken to the corresponding section of the README
    {
        type: 'checkbox',
        message: "Please select license",
        name: 'license',
        choices: ['MIT', 'GNU']
    }
    { 
        type: 'input',
        message: "IDK",
        name: 'tests',
        validate: (value) => {if (value) {return true} else {return 'Please enter a value to continue.'}}
        
    },
    { 
        type: 'input',
        message: "Enter instructions for how to contact for questions:",
        name: 'questions',
        validate: (value) => {if (value) {return true} else {return 'Please enter a value to continue.'}}
        
    },
    { 
        type: 'input',
        message: "Enter email you can be contacted at",
        name: 'email',
        validate: (value) => {if (value) {return true} else {return 'Please enter a value to continue.'}}
        
    },
].then (({
    title,
    description,
    tableofcontents,
    installation,
    usage,
    license,
    contributing,
    tests,
    questions
}))
    
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
