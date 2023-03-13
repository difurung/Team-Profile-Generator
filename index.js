const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
let empInfo = [];
const template = require("./src/template.js");
const { genHTML } = template;

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

// Add member function

function addMember() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "members",
        choices: ["Engineer", "Intern", "Done"],
      },
    ])
    .then((answers) => {
      if (answers.members === "Engineer") {
        engiPrompt();
      } else if (answers.members === "Intern") {
        intPrompt();
      } else {
        generateHTML();
        return;
      }
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
      employeeinfo.push(engiInfo);
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
        answers.engiName,
        answers.engiId,
        answers.engiEmail,
        answers.engiGithub
      )
      employeeInfo.push(intInfo)
      addMember();
    });
}

function generateHTML(){
  let html = genHTML(employeeInfo);
fs.writeFile('..dist/team.html', html, (err) => 
err ? console.log(err): console.log('Team profiles have been created'))  
};