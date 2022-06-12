const Engineer = require("./Engineer");

// should be an instance of an Engineer
const engineer = new Engineer({
  name: "nayan",
  id: "123",
  email: "nayan@email.com",
  github: "nsharma-uk",
});

const actual = new Engineer(engineer)
expect(actual).toBeInstanceOf(engineer);

// - should return the expected role
describe("Engineer", () => {
  test("role of Engineer", () => {
    const expected = "Engineer";
    const actual = engineer.getRole();

    expect(actual).toEqual(expected);
  });

  // - should return the expected name
  test("should return the expected name", () => {
    const expected = "Nayan";
    const actual = engineer.getName();

    expect(actual).toEqual(expected);
  });

  // - should return the expected id
  test("should return the expected id", () => {
    const expected = "123";
    const actual = engineer.getId();

    expect(actual).toEqual(expected);
  });

  // - should return the expected email
  test("should get the email of the employee", () => {
    const expected = "nayan";
    const actual = engineer.getEmail();

    expect(actual).toEqual(expected);
  });

  // - should return the expected github profile
  test("should return the expected github profile", () => {
    const expected = "nsharma-uk";
    const actual = engineer.getGitHub();

    expect(actual).toEqual(expected);
  });
});
