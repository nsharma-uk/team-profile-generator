
const Manager = require('./Manager');

// // should be an instance of an Manager

    
// - should return the expected role
describe ("Tests", () => {
it ("should get role of manager", () => {
const expected = new Manager ("Manager");
const actual = expected.getRole();
expect(actual).toEqual(expected.role);
});

// - should return the expected name
it("should return the expected name", () => {
const expected = new Manager ("Nayan");
const actual = expected.getName();
expect(actual).toEqual(expected.name);
});

// - should return the expected id
it("should return the expected id", () => {
const expected = new Manager ("123");
const actual = expected.getId();
expect(actual).toEqual(expected.id);
});

// - should return the expected email
it("should get the email of the manager", () => {
const expected = new Manager ("nayan@email.com");
const actual = expected.getEmail();
expect(actual).toEqual(expected.email);
});

// - should return the expected office no
it("should get expected office no", () => {
    const expected = new Manager ("Office Number 012");
    const actual = expected.getOffice();
    expect(actual).toEqual(expected.office);
    });


});

