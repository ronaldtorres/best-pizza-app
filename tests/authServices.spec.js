import auth from "../src/services/authService";

describe("AuthService", () => {
  it("Should return user data when a user logged in correctly", () => {
    return expect(
      auth.login("pperez@perez.com", "pperezs123")
    ).resolves.toMatchObject({
      email: "pperez@perez.com",
      name: "Pepito Perez",
    });
  });

  it("Should return undefined when a user logged in fails", () => {
    return expect(auth.login("fake@fake.com", "fakepass")).resolves.toBe(
      undefined
    );
  });
});
