const inquirer = require('inquirer');
const fs = require('fs');  
const manager = require('../lib/manager.js');
const engineer = require('../lib/engineer.js');
const intern = require('../lib/intern.js')

inquirer
.createPromptModule([
{type: 'input',
name: 'manName',
message: 'What is the manager name?'
},
{type: 'input',
name: 'manID',
message: 'What is the manager ID?'
},
{type: 'input',
name: 'manEmail',
message: 'What is the manager email?'
},
{type: 'input',
name: 'manOfficeNum',
message: 'What is the manager office number?'
},
])

//.then