const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  let output = '';
renderLicenseBadge(data.license)
  output = 
  `
  // <need more code here>
  # ${data.title}

  # Description:
  #### ${data.description}

  # installation 
  #### ${data.installation}

  # Usage
  #### ${data.usage}

  # License
  #### ${data.license}

  # Developer
  #### ${data.developer}

  # Tests
  #### ${data.tests}

  # Questions
  #### ${data.questions}
  #### ${data.email}

  `;

fs.writeFile('./README.md', output, err=>{if(err)throw err});
}

module.exports = generateMarkdown;
