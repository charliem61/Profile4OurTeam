const Manager = require("../lib/Manager");

test("does the officeNumber get set", () => {
  const officeNumber = "UW";
  const newEmployee = new Manager("laurie", 1, "laurieT@gmail.com", officeNumber);
  expect(newEmployee.officeNumber).toBe(officeNumber);
});
test("see if we can run officeNumber", () => {
  const officeNumber = "UW";
  const newEmployee = new Manager("laurie", 1, "laurieT@gmail.com", officeNumber);
  expect(newEmployee.getOfficeNumber()).toBe(officeNumber);
});
test("see if we can getRole", () => {
const officeNumber = "UW";
  const newEmployee = new Manager("laurie", 1, "laurieT@gmail.com", officeNumber);
  expect(newEmployee.getRole()).toBe("Manager");
});
