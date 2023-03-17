const Employee = require("./employee.js");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github
    }
    getRole() {
        return 'Engineer'
    }
}

const engineer = new Engineer("joe", 10, "engi@mail.com", "joeGit");
engineer.getName();
engineer.getId();
engineer.getEmail();
//engineer.getGithub();
engineer.getRole();

module.exports = Engineer;
