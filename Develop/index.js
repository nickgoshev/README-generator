// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'user',
        },

        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },
    
        {
            type: 'input',
            message: 'What is your project titled?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Write a description of your project',
            name: 'desc',
        },
        {
            type:'list',
            choices: ["MIT", "GPL v3", "Apache 2.0", "BSD 3-clause", "none"],
            message: 'Which license would you like to use',
            name: 'license',
        },
        {
            type:'input',
            message: 'What command should be used to install dependencies',
            name:'install',
        },
        {
            type:'input',
            message: 'What command should be used to test',
            name:'test',
        },
        {
            type:'input',
            message: 'What should the user know about using this repo',
            name: 'usage',
        },
        {
            type:'input',
            message: 'What should the user know about contributing to this repo',
            name: 'contr',
        },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    inquirer.prompt(questions).then(answers =>{
        console.log(answers)
        fs.writeFile(fileName,generateMarkdown(answers), (err)=> 
        err? console.error(err):console.log('task completed'))
    })

}

// TODO: Create a function to initialize app
function init() {

    writeToFile('README.md',questions)
}

// Function call to initialize app
init();
