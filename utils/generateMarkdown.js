function renderLicenseBadge(license) {
  if (license == "None") {
    return ` `;
  } else if (license == "Apache License 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license == "Boost Software License 1.0") {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  } else if (license == "BSD 3-Clause New or Revised License") {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (license == "BSD 2-Clause Simplified License") {
    return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
  } else if (license == "Eclipse Public License 1.0") {
    return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
  } else if (license == "GNU General Public License v2.0") {
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  } else if (license == "GNU Affero Genral Public License v3.0") {
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
  } else if (license == "GNU General Public License v3.0") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license == "MIT License") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license == "Mozilla Public License 2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license == "The Unilicense") {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  }
}

function renderLicenseSection(license) {
  console.log(license);
  if (license == "None") {
    return ` `;
  } else {
    return `## License
    This application is covered under ${license}.`;
  }
}

const generateMarkdown = (data) => {
  return (
    `# ${data.title}` +
    renderLicenseBadge(data.license) +
    `
    ## Description
  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Test](#test)
  
  ## Installation

  ${data.installation}
  
  ## Usage

  ${data.usage}
  ` +
    renderLicenseSection(data.license) +
    `
  ## Contribution

  ${data.contribution}
  
  ## Test

  ${data.test}
  
  ## Questions

  To access more from me, refer to my GitHub linked <a href = "https://github.com/${data.github}" >here</a>.
  If you have any outstanding questions, you may email me by clicking <a href = "mailto:${data.email}" >here</a>.
  `
  );
};

module.exports = generateMarkdown;
