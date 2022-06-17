const Engineer = require("./Engineer");

// - should be an instance of an Engineer
// - should return the expected role
describe("Tests", () => {
    it("should get the instance of new engineer", () => {
      const expected = new Engineer({
        name: "Nayan",
        id: "123",
        email: "nayan@email.com",
      });
  
      expect(expected).toBeInstanceOf(Engineer);
    });
  
    it("should get role of engineer", () => {
      const expected = new Engineer({ role: "Engineer" });
  
      const actual = expected.getRole();
      expect(actual).toEqual(expected.role);
    });
  
    // - should return the expected name
    it("should return the expected name", () => {
      const expected = new Engineer({ name: "Nayan" });
  
      const actual = expected.getName();
      expect(actual).toEqual(expected.name);
    });
  
    // - should return the expected id
    it("should return the expected id", () => {
      const expected = new Engineer({ id: "123" });
      const actual = expected.getId();
      expect(actual).toEqual(expected.id);
    });
  
    // - should return the expected email
    it("should get the email of the engineer", () => {
      const expected = new Engineer({ email: "nayan@email.com" });
      const actual = expected.getEmail();
      expect(actual).toEqual(expected.email);
    });

     // - should return the github userid
     it("should get the email of the engineer", () => {
        const expected = new Engineer({ github: "nsharma-uk" });
        const actual = expected.getGithub();
        expect(actual).toEqual(expected.github);
      });
  });


