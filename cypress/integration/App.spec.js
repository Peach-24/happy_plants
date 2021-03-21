describe("The App - homepage", () => {
  it("has an title and subtitle", () => {
    cy.visit("localhost:3000");
    cy.get("h1").should("have.text", "Happy Plants");
    cy.get("#subtitle").should("have.text", "Weather tool for your garden");
  });
  it("have a form on it", () => {
    cy.get("form");
  });
  it("has a background", () => {
    cy.get("#background");
  });
});

describe("The form component", () => {
  it("has a text input for the postcode", () => {
    cy.visit("localhost:3000");
    cy.get("#postcode-input");
  });
  it("has text asking what the plants neeed", () => {
    cy.get("#needs-desc").should(
      "have.text",
      "What are your plants hoping for?"
    );
  });
  it("has a input checkbox for 'needs rainfall", () => {
    cy.get("#needs-rainfall");
  });
  it("has a input checkbox for 'needs sunshine", () => {
    cy.get("#needs-sunshine");
  });
  it("user can select, unselect single/multiple checkboxes", () => {
    cy.get("#needs-rainfall").click();
    cy.get("#needs-rainfall").should("be.checked");
    cy.get("#needs-sunshine").click();
    cy.get("#needs-sunshine").should("be.checked");
    cy.get("#needs-rainfall").click();
    cy.get("#needs-rainfall").should("not.be.checked");
    cy.get("#needs-sunshine").click();
    cy.get("#needs-sunshine").should("not.be.checked");
  });
  it("should take you to a results page when you enter a valid postcode and click go", () => {
    cy.get("#postcode-input").type("WN3 4DQ");
    cy.get("#postcode-input").should("have.value", "WN3 4DQ");
    cy.get("#submit-postcode").click();
    cy.get("h1").should("have.text", "Weather Report");
  });
  it("location is tailored to postcode", () => {
    cy.get("h4").should("have.text", "Ince In Makerfield, Greater Manchester");
  });
});

describe("The Happiness component", () => {
  it("shows the general advice message if plants don't need rainfall or sunshine", () => {
    cy.visit("localhost:3000");
    cy.get("button").click();
    cy.get("h1").should("have.text", "Happy Plants");
    cy.get("#postcode-input").type("WN3 4DQ");
    cy.get("#submit-postcode").click();
    cy.get("#happiness-results");
    cy.get("#no-required-weather-message");
  });
});
