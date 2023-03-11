const Intern = require("../lib/intern.js");

describe("Get", () => {
  it("get intern name", () => {
    const intName = "Darren";
    const dummyInt = new Intern("Darren", 14, "intern@mail.com", "Rutgers");
    expect(dummyInt.getName()).toBe(intName);
  });

  it("get intern id", () => {
    const intId = 14;
    const dummyInt = new Intern("Darren", 14, "intern@mail.com", "Rutgers");
    expect(dummyInt.getId()).toBe(intId);
  });

  it("get intern email", () => {
    const intEmail = "intern@mail.com";
    const dummyInt = new Intern("Darren", 14, "intern@mail.com", "Rutgers");
    expect(dummyInt.getEmail()).toBe(intEmail);
  });

  it("get intern school", () => {
    const intSchool = "Rutgers";
    const dummyInt = new Intern("Darren", 14, "intern@mail.com", "Rutgers");
    expect(dummyInt.getSchool()).toBe(intSchool);
  });

  it("get intern name", () => {
    const intRole = "Intern";
    const dummyInt = new Intern("Darren", 14, "intern@mail.com", "Rutgers");
    expect(dummyInt.getRole()).toBe(intRole);
  });
});
