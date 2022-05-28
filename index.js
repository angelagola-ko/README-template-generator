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
        type: 'checkbox',
        name: 'license',
        message: 'Please select license',
        choices: ['MIT', 'GNU']
      },
    { 
        type: 'input',
        message: "Please enter your name.",
        name: 'developer',
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
        message: "Enter instructions for how to contact for questions:",
        name: 'questions',
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