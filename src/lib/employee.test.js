
const Employee = require('./employee');

// should be an instance of an Employee
describe ("Tests", () => { 
it("should create an instance of Employee object") () = {

const actual = new Employee ();

expect(actual).toBeInstanceOf("object");
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
const expected = "nayan@email.com";
const actual = employee.getEmail();
expect(actual).toEqual(expected);
});
});
