class Employee {
    constructor(name, id, email){
        this.Name = name;
        this.Id = id;
        this.Email = email;
    }
    getName() {
        return this.Name
    }
    getId() {
        return this.Id
    }
    getEmail() {
        return this.Email
    }
    getRole() {
        return 'Employee'
    }
}

const employee = new Employee("denart", 1, "mail@mail.com");
employee.getName();
employee.getId();
employee.getEmail();
employee.getRole();

module.exports = Employee;