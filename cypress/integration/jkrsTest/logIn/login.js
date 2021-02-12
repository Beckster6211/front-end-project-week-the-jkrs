//Log in to account created

function logIn() {
  describe("Log in to app", () => {
    it("Click Log in button", () => {
      cy.get("a[href*='/login']")
        .should("have.id", "logIn")
        .contains("Log in")
        .click();
      cy.wait(1500);
    });
    it("Check for Log in heading", () => {
      cy.get("h3").should("have.id", "signInTitle").contains("Log in");
      cy.wait(1500);
    });
    it("Check for Email input field and type email in", () => {
      cy.get("form")
        .find("label")
        .eq(0)
        .contains("Your Email:")
        .find("input[name=email]")
        .type("cypresstest@gmail.com");
      cy.wait(1500);
    });
    it("Check for Password input field and type password in", () => {
      cy.get("form")
        .find("label")
        .eq(1)
        .contains("Password:")
        .find("input[name=password]")
        .type("cypresstest");
      cy.wait(1500);
    });
    it("Check for Log In button and click it", () => {
      cy.get("form")
        .find("div")
        .should("have.class", "formButtonsContainer")
        .find("button")
        .should("have.id", "nextButton")
        .contains("Log In")
        .click();
      cy.wait(1500);
    });
  });
}

export default logIn;
