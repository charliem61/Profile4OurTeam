const Intern = require("../lib/Intern");

test("does the school get set", () => {
  const school = "UW";
  const newEmployee = new Intern("laurie", 1, "laurieT@gmail.com", school);
  expect(newEmployee.school).toBe(school);
});
test("see if we can run school", () => {
  const school = "UW";
  const newEmployee = new Intern("laurie", 1, "laurieT@gmail.com", school);
  expect(newEmployee.getSchool()).toBe(school);
});
test("see if we can getRole", () => {
const school = "UW";
  const newEmployee = new Intern("laurie", 1, "laurieT@gmail.com", school);
  expect(newEmployee.getRole()).toBe("Intern");
});
