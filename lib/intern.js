const Employee = require("./employee.js");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

const intern = new Intern("Darren", 14, "intern@mail.com", "Rutgers");
intern.getName();
intern.getId();
intern.getEmail();
intern.getSchool();
intern.getRole();

module.exports = Intern;
