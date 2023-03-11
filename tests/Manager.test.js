const Manager = require("../lib/manager");

describe("Get", () => {
  it("Get manager name", () => {
    const manName = "Toni";
    const dummyMan = new Manager("Toni", 1, "manager@mail.com", 5);
    expect(dummyMan.getName()).toBe(manName);
  });

  it("Get manager id", () => {
    const manId = 1;
    const dummyMan = new Manager("Toni", 1, "manager@mail.com", 5);
    expect(dummyMan.getId()).toBe(manId);
  });

  it("Get manager email", () => {
    const manEmail = "manager@mail.com";
    const dummyMan = new Manager("Toni", 1, "manager@mail.com", 5);
    expect(dummyMan.getEmail()).toBe(manEmail);
  });

  it("Get manager role", () => {
    const manRole = "manager";
    const dummyMan = new Manager("Toni", 1, "manager@mail.com", 5);
    expect(dummyMan.getRole()).toBe(manRole);
  });
});
