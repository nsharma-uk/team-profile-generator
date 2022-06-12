
const Employee = require('./employee');

// should be an instance of an Employee
const employee = new Employee({
    name: "nayan",
    id: "123",
    email: "nayan@email.com",
  });


    
// - should return the expected role
describe ("Employee", () => {
it ("role of employee", () => {
const expected = "Employee";
const actual = employee.getRole();
expect(actual).toEqual(expected);
});

// - should return the expected name
it("should return the expected name", () => {
const expected = "Nayan";
const actual = employee.getName();
expect(actual).toEqual(expected);
});

// - should return the expected id
it("should return the expected id", () => {
const expected = "123";
const actual = employee.getId();
expect(actual).toEqual(expected);
});

// - should return the expected email
it("should get the email of the employee", () => {
const expected = "nayan";
const actual = employee.getEmail();
expect(actual).toEqual(expected);
});
});
