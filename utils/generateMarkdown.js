const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //let licenseType = 
  if (license !== 'no license') {
    return `
  ![badge](https://img.shields.io/badge/license-${license}-blue)`
  } else {
    return ' ';
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `
  [![badge](https://img.shields.io/badge/license-${license}-blue)](http://choosealicense.com/licenses/${license}/)`;
  } else {
    return ' ';
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `
  ## License
    
  The application is covered under the following license:
    
  ${renderLicenseLink(license)}
    `;
  } else {
    return ' '
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  let output = '';
renderLicenseBadge(data.license)
  output = 
  `
  # ${data.title}

${renderLicenseBadge(data.license)}

## Table-of-Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributers](#contributers)
  * [Tests](#tests)
  * [Questions](#questions)
  

  ## Description:


  #### ${data.description}


  ## Installation 


  #### ${data.installation}


  ## Usage


  #### ${data.usage}


  ![Example Image](./images/ExampleImg.png)


  ${renderLicenseSection(data.license)}


  ## Contributers


  #### ${data.contributers}


  ## Tests


  #### ${data.tests}


  ## Questions


  Please contact me using the following links:
  

  [GitHub](http://github.com/${data.github})

  [Email: ${data.email}](mailto:${data.email})

  `;

fs.writeFile('./README.md', output, err=>{if(err)throw err});
}

module.exports = generateMarkdown;
