// TODO: Include packages needed for this application
const { prompt } = require("inquirer");
const MDGen = require('./utils/generateMarkdown');
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
        type: 'list',
        name: 'license',
        message: 'Please select license',
        choices: ['mit', 'apache', 'agpl', 'no license']
      },
    { 
        type: 'input',
        message: "Please enter your name.",
        name: 'contributers',
        validate: (value) => {if (value) {return true} else {return 'Please enter a value to continue.'}}
    },
    { 
        type: 'input',
        message: "How do we test application?",
        name: 'tests',
        validate: (value) => {if (value) {return true} else {return 'Please enter a value to continue.'}}
        
    },
    { 
        type: 'input',
        message: "Enter your GitHub username",
        name: 'github',
        validate: (value) => {if (value) {return true} else {return 'Please enter a value to continue.'}}
        
    },
    { 
        type: 'input',
        message: "Enter email you can be contacted at",
        name: 'email',
        validate: (value) => {if (value) {return true} else {return 'Please enter a value to continue.'}}
        
    }
]
    
prompt(questions).then(MDGen);