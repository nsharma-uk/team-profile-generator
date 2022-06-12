const Employee = require('./Employee');

// - should be an instance of an Employee

    
// - should return the expected role
describe ("Tests", () => {
it ("should get role of employee", () => {
const expected = new Employee ("Employee");
const actual = expected.getRole();
expect(actual).toEqual(expected.role);
});

// - should return the expected name
it("should return the expected name", () => {
const expected = new Employee ("Nayan");
const actual = expected.getName();
expect(actual).toEqual(expected.name);
});

// - should return the expected id
it("should return the expected id", () => {
const expected = new Employee ("123");
const actual = expected.getId();
expect(actual).toEqual(expected.id);
});

// - should return the expected email
it("should get the email of the employee", () => {
const expected = new Employee ("nayan@email.com");
const actual = expected.getEmail();
expect(actual).toEqual(expected.email);
});
});
