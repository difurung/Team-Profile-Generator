const Engineer =  require('../lib/engineer.js')

describe("Get", () => {
it('get engineer name', () => {  
  const engiName = "joe";
  const dummyEngi = new Engineer("joe", 10, "engi@mail.com", "joeGit");
  expect(dummyEngi.getName()).toBe(engiName);
});

it("Get Engineer by id", () => {
  const engiId = 10;
  const dummyEngi = new Engineer("joe", 10, "engi@mail.com", "joeGit");
  expect(dummyEngi.getId()).toBe(engiId);
});5

it("Get Engineer by email", () => {
  const engiEmail = "engi@mail.com";
  const dummyEngi = new Engineer("joe", 10, "engi@mail.com", "joeGit");
  expect(dummyEngi.getEmail()).toBe(engiEmail);
});

it("Get Engineer by github", () => {
  const engiGit = "Engineer";
  const dummyEngi = new Engineer("joe", 10, "engi@mail.com", "joeGit");
  expect(dummyEngi.getRole()).toBe(engiGit);
});

it("Get Engineer by role", () => {
  const engiRole = "Engineer";
  const dummyEngi = new Engineer("joe", 10, "engi@mail.com", "joeGit");
  expect(dummyEngi.getRole()).toBe(engiRole);
});


});