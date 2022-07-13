const Intern = require("./Intern");

// - should be an instance of an Intern
// - should return the expected role
describe("Tests", () => {
    it("should get the instance of new intern", () => {
      const expected = new Intern({
        name: "Nayan",
        id: "123",
        email: "nayan@email.com",
      });
  
      expect(expected).toBeInstanceOf(Intern);
    });
  
    it("should get role of intern", () => {
      const expected = new Intern({ role: "Intern" });
  
      const actual = expected.getRole();
      expect(actual).toEqual(expected.role);
    });
  
    // - should return the expected name
    it("should return the expected name", () => {
      const expected = new Intern({ name: "Nayan" });
  
      const actual = expected.getName();
      expect(actual).toEqual(expected.name);
    });
  
    // - should return the expected id
    it("should return the expected id", () => {
      const expected = new Intern({ id: "123" });
      const actual = expected.getId();
      expect(actual).toEqual(expected.id);
    });
  
    // - should return the expected email
    it("should get the email of the intern", () => {
      const expected = new Intern({ email: "nayan@email.com" });
      const actual = expected.getEmail();
      expect(actual).toEqual(expected.email);
    });

     // - should return the github userid
     it("should get the email of the intern", () => {
        const expected = new Intern({ school: "nsharma-uk" });
        const actual = expected.getSchool();
        expect(actual).toEqual(expected.school);
      });
  });
