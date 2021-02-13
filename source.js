//https://medium.com/@dannykrug/how-to-link-files-in-node-js-using-require-d4a6571aeab0
module.exports = resource;

function generateMarkdown(resource) {
    //https://shields.io/category/license(for the licenses)
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
    ${response.Installation}
    
    ## Usage:
    ${response.Usage}
    
    ## Contributers:
    ${response.Contributers}

    ## Test:
    ${response.Test}

    ## Questions:
    For more information see my GitHub page
    - [Profile](https://github.com/${response.UserName})

    For additional information or questions please reach out to my email: ${response.Email}
    `
}

async function init() {
    try {
        const response = await promptUser();

        const readMe = generateMarkdown(resource);

        await writeFileSync("README.md", readMe)
        console.log("Responses are completed")
    } catch (err) {
        console.log(err);
    }
}

init();