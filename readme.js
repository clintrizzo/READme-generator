const inquirer = require('inquirer');
const fs = require("fs");
const util = require("util");
//https://www.geeksforgeeks.org/node-js-fs-writefilesync-method/
const writeFileSync = util.promisify(fs.writeFile);

function user() {
    return inquirer.prompt([{
            type: "input",
            message: "What is the title of your project?",
            name: "title",
        },

        {
            type: "input",
            message: "What is the title of your project?",
            name: "title",
        },

        {
            type: "input",
            message: "What is the title of your project?",
            name: "title",
        },

        {
            type: "input",
            message: "What is the title of your project?",
            name: "title",
        },

        {
            type: "input",
            message: "What is the title of your project?",
            name: "title",
        },

        {
            type: "input",
            message: "What is the title of your project?",
            name: "title",
        }
    ])
}