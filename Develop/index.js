// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
console.log("Welcome, Lets create a ReadMe.md")
console.log("Answer the questions to create a ReadMe.md")

// TODO: Create an array of questions for user input
const questions = [
    //Name of project
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
        validate: your_Input => {
            if (your_Input) {
                return true;
            } else {
                console.log('Enter a title to continue!');
                return false;
            }
        }
    },
    // Description
    {
        type: 'input',
        name: 'Description',
        message: 'What is your project? Tell us about it',
        validate: your_Input => {
            if (your_Input) {
                return true;
            } else {
                console.log('Enter a description to continue!');
                return false;
            }
        }
    },
    // Table of Content
    {
        type: 'input',
        name: 'Table of Content',
        message: 'Table of Content',
        validate: your_Input => {
            if (your_Input) {
                return true;
            } else {
                console.log('Table of Content');
                return false;
            }
        }
    },
    // Installation
    {
        type: 'input',
        name: 'Installation',
        message: 'Instalations?',
        validate: your_Input => {
            if (your_Input) {
                return true;
            } else {
                console.log('Installation!');
                return false;
            }
        }
    },
    // Usage
    {
        type: 'input',
        name: 'Usage',
        message: 'How can we use?',
        validate: your_Input => {
            if (your_Input) {
                return true;
            } else {
                console.log('Enter a title to continue!');
                return false;
            }
        }
    },
    // License 
    {
        type: 'list',
        name: 'License',
        message: 'Choose a license!',
        choices: [
            'MIT', 'Mozilla' , 'Public' , 'Boost Software' , 'GNU' , 'None of the above'
        ],
        validate: your_Input => {
            if (your_Input) {
                return true;
            } else {
                console.log('What license did you use?');
                return false;
            }
        }
    },
    // Contributing
    {
        type: 'input',
        name: 'Contribute',
        message: 'How can users contribute to the project?',
        validate: your_Input => {
            if (your_Input) {
                return true;
            } else {
                console.log('How can users contribute to the project?');
                return false;
            }
        }
    },
    // Tests
    {
        type: 'input',
        name: 'Tests',
        message: 'Tests?',
        validate: your_Input => {
            if (your_Input) {
                return true;
            } else {
                console.log('Enter who test it to continue!');
                return false;
            }
        }
    },
    // Github Username
    {
        type: 'input',
        name: 'github',
        message: 'Whats your Github username?',
        validate: your_Input => {
            if (your_Input) {
                return true;
            } else {
                console.log('Enter your Github user name');
                return false;
            }
        }
    },
    // Email Address 
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email?',
        validate: your_Input => {
            if (your_Input) {
                return true;
            } else {
                console.log('Enter your Email');
                return false;
            }
        }
    },
    // Questions
    {
        type: 'input',
        name: 'Questions',
        message: 'Question?',
        validate: your_Input => {
            if (your_Input) {
                return true;
            } else {
                console.log('Do you have any question about the project?');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data){
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }console.log('Sucess!')

    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userInput) {
        console.log(userInput)
        writeToFile("ReadME.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
