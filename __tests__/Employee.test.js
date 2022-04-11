const Employee = require("../lib/Employee");

test("is the constuctor an object", () => {
  const newEmployee = new Employee();
  expect(typeof newEmployee).toBe("object");
});

test("does the constuctor set a name", () => {
  const name = "Laurie";
  const newEmployee = new Employee(name);
  expect(newEmployee.name).toBe(name);
});
test("does the constuctor set an id", () => {
  const id = 1;
  const newEmployee = new Employee("Yulii", id);
  expect(newEmployee.id).toBe(id);
});
test("does the contructor set an email", () => {
  const email = "yulii24@gmail.com";
  const newEmployee = new Employee("name", 1, email);
  expect(newEmployee.email).toBe(email);
});
test("test the getName function", () => {
  const name = "Laurie";
  const newEmployee = new Employee(name);
  expect(newEmployee.getName()).toBe(name);
});
test("test the id function", () => {
  const id = 1;
  const newEmployee = new Employee("Yulii", id);
  expect(newEmployee.getId()).toBe(id);
});
test("test the email function", () => {
  const email = "yulii24@gmail.com";
  const newEmployee = new Employee("name", 1, email);
  expect(newEmployee.getEmail()).toBe(email);
});
test("test the getRole function", () => {
          const newEmployee = new Employee();
          expect(newEmployee.getRole()).toBe("Employee");
        });
