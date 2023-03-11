const Employee = require('../lib/employee.js')

//describe -> it -> expect.toEqual 
describe('Get', () => {
it('Get employee name', () => {    
    const empName = 'denart'
    const dummyEmp = new Employee( 'denart', 1, 'mail@mail.com');
    expect(dummyEmp.getName()).toBe(empName);
});

it('Get employee id', () => {
    const empId = 1;
    const dummyEmp = new Employee("denart", 1, "mail@mail.com");
    expect(dummyEmp.getId()).toBe(empId);

});

it('Get employee email', () => {
    const empEmail = 'mail@mail.com';
    const dummyEmp = new Employee("denart", 1, "mail@mail.com");
    expect(dummyEmp.getEmail()).toBe(empEmail);

});


it('Get employee role', () => {
    const empRole = 'Employee';
    const dummyEmp = new Employee("denart", 1, "mail@mail.com");
    expect(dummyEmp.getRole()).toBe(empRole);

});

});
