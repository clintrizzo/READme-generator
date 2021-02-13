//https://medium.com/@dannykrug/how-to-link-files-in-node-js-using-require-d4a6571aeab0
module.exports = resources;

function generateMarkdown(resources) {
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
    ![License](https://img.shields.io/badge/License-${response.License}-red.svg "License Badge")
    ${response.Description}
    
    ## Installation:
    ${response.Installation}`
}