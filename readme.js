const inquirer = require('inquirer');
const fs = require("fs");
//https://nodejs.org/api/util.html
//https://www.npmjs.com/package/util
const util = require("util");
//https://www.codota.com/code/javascript/functions/fs/writeFileAsync
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
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
            message: "Describe the installation for the project if none are required type 'none' ",
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
            type: "input",
            message: "How do you test to see if the app is working properly?",
            name: "Test",
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
            name: "License"
        },

        {
            type: "input",
            message: "What is your github user name?",
            name: "UserName",
        },

        {
            type: "input",
            message: "What is your email address",
            name: "Email",
        },
    ])
}


//https: //www.markdownguide.org/api/v1/
//https://shields.io/category/license(for the licenses)
function generateMarkdown(user) {
    return `
    # ${user.Title}
    
    #Table of Contents
    
    - [Description](#Description)
    - [Installation](#Installation)
    - [Usage](#usage)
    - [Contributing](#Contributers)
    - [Test](#Test)
    - [Licenses](#License)
    - [Responses](#Responses)
    
    ## Description:
    ![License](https://img.shields.io/badge/License-${user.License}-red.svg "License Badge")
   
    - Info on how the project works:
    ${user.Description}
    
    ## Installation:
    ${user.Installation}
    
    ## Usage:
    ${user.Usage}
    
    ## Contributers:
    ${user.Contributers}

    ## Test:
    ${user.Test}

    ## My-info:
    To see deployed site look at my GitHub page
    - [Profile](github.com/${user.UserName})

    For additional information or questions please reach out to my email: ${user.Email}
    `
}

//https://javascript.info/async-await
async function init() {
    try {
        const user = await promptUser();

        const readMe = generateMarkdown(user);

        await writeFileAsync("README.md", readMe)
        console.log("Responses are completed")
    } catch (err) {
        console.log(err);
    }
}

init();