
const Employee = require('./employee');

// should be an instance of an Employee
describe ("Employee", () => {
it("should return the name Nayan", () => {

const employee = new Employee ("Nayan")
const actual = employee.getName ()
expect (actual).toEqual("Nayan")

}


}
// - should return the expected name
// - should return the expected id
// - should return the expected email
// - should return the role of Employee