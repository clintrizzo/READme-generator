const inquirer = require('inquirer');
const fs = require("fs");
const util = require("util");
//https://www.geeksforgeeks.org/node-js-fs-writefilesync-method/
const writeFileSync = util.promisify(fs.writeFile);

function user() {
    return inquirer.prompt([{
            type: "input",
            message: "What is the title of your project?",
            name: "Title",
        },

        {
            type: "input",
            message: "Give a description of your project",
            name: "Description",
        },

        {
            type: "input",
            message: "Describe in the installations for the project if none are required type 'none' ",
            name: "Installation",
        },

        {
            type: "input",
            message: "How would you like your app to be used?",
            name: "Usage",
        },

        {
            type: "input",
            message: "Who are the contributers to this project?",
            name: "Contributers",
        },

        {
            type: "checkbox",
            message: "Choose a license for the project",
            //https://www.freecodecamp.org/news/how-open-source-licenses-work-and-how-to-add-them-to-your-projects-34310c3cf94/
            choices: [
                "MIT",
                "Apache",
                "GPLv2",
                "BSD",
                "None for this project"
            ],
            name: "license"
        },

        {
            type: "input",
            message: "Who are the contributers to this project?",
            name: "Contributers",
        },

        {
            type: "input",
            message: "Who are the contributers to this project?",
            name: "Contributers",
        },

        {
            type: "input",
            message: "Who are the contributers to this project?",
            name: "Contributers",
        },
    ])
}