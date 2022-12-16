// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licensebadges = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',

  }
  return licensebadges[license]
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## License:
  ${renderLicenseSection(data.License)}
  ### Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contributing](#contributing)
  5. [Testing](#testing)



  ## Description:
  ${data.Description}
  ## Installation:
  ${data.Installation}
  ## Usage:
  ${data.Usage}
  ## Contributing:
  ${data.Contribute}
  ## Tests:
  ${data.Tests}
  ## Contact:
  - Github [${data.github}](https://github.com/${data.github})
  - Email: [${data.Email}](mailto:${data.Email})`;
}


module.exports = generateMarkdown;
