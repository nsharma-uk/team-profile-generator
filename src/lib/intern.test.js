const Intern = require("./Intern");

// // should be an instance of an Intern

   
// - should return the expected role
describe ("Tests", () => {
it ("should get role of Intern", () => {
const expected = new Intern ("Intern");
const actual = expected.getRole();
expect(actual).toEqual(expected.role);
});

// - should return the expected name
it("should return the expected name", () => {
const expected = new Intern ("Nayan");
const actual = expected.getName();
expect(actual).toEqual(expected.name);
});

// - should return the expected id
it("should return the expected id", () => {
const expected = new Intern ("123");
const actual = expected.getId();
expect(actual).toEqual(expected.id);
});

// - should return the expected email
it("should get the email of the intern", () => {
const expected = new Intern ("nayan@email.com");
const actual = expected.getEmail();
expect(actual).toEqual(expected.email);
});

// - should return school name
it("should get the school name", () => {
    const expected = new Intern ("Office Number 012");
    const actual = expected.getSchool();
    expect(actual).toEqual(expected.school);
    });


});
