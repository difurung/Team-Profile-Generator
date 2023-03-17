const Employee = require("./employee.js");

class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    super(name, id, email);
    this.github = officeNum;
  }
  getRole() {
    return "manager";
  }

  getOffice() {
    return "office no.";
  }
}

const manager = new Manager("Toni", 1, "manager@mail.com");
manager.getName();
manager.getId();
manager.getEmail();
manager.getRole();

module.exports = Manager;
