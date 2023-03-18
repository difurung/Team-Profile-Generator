const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
let empInfo = [];
const template = require("./src/template.js");
const { generateHTML } = template;


// Add member function

function addMember() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "New member?",
        name: 'members',
        choices: ["Manager", "Engineer", "Intern", "Done"],
      },
    ])
    .then((choices) => {
  switch(choices.members) {
    case "Manager":
      manPrompt();
      break;
      case "Engineer":
        engiPrompt();
        break;
    case "Intern":
      intPrompt();
      break;
    default:
      genHTML();
      break;
  }
    });
}


function manPrompt() {
inquirer
  .prompt([
    { type: "input", name: "manName", message: "What is the manager name?" },
    { type: "input", name: "manId", message: "What is the manager ID?" },
    { type: "input", name: "manEmail", message: "What is the manager email?" },
    {type: "input", name: "manOfficeNum", message: "What is the manager office number?",}
  ])

  .then((answers) => {
    let manInfo = new Manager(
      answers.manName,
      answers.manId,
      answers.manEmail,
      answers.officeNum
    );
    empInfo.push(manInfo);
    addMember();
  });
}


// Add engineer
function engiPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engiName",
        message: "What is the engineer name?",
      },
      {
        type: "input",
        name: "engiId",
        message: "What is the engineer ID?",
      },
      {
        type: "input",
        name: "engiEmail",
        message: "What is the engineer email?",
      },
      {
        type: "input",
        name: "engiGithub",
        message: "What is the engineer Github username?",
      },
    ])
    .then((answers) => {
      let engiInfo = new Engineer(
        answers.engiName,
        answers.engiId,
        answers.engiEmail,
        answers.engiGithub
      );
      empInfo.push(engiInfo);
      addMember();
    });
}

// Add intern

function intPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "intName",
        message: "What is the intern name?",
      },
      {
        type: "input",
        name: "intId",
        message: "What is the intern ID?",
      },
      {
        type: "input",
        name: "intEmail",
        message: "What is the intern email?",
      },
      {
        type: "input",
        name: "intSchool",
        message: "What is the intern school?",
      },
    ])
    .then((answers) => {
      let intInfo = new Intern(
        answers.intName,
        answers.intId,
        answers.intEmail,
        answers.intSchool      )
      empInfo.push(intInfo)
      addMember();
    });
}

function genHTML(){
  let html = generateHTML(empInfo);
fs.writeFile('dist/team.html', html, (err) => 
err ? console.log(err): console.log('Team profiles have been created'))  
};

addMember()