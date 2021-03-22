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
    cy.get("#needs-desc").should("have.text", "What do your plants need?");
  });
  it("has a input checkbox for 'needs rainfall", () => {
    cy.get("#needs-rainfall");
  });
  it("has a input checkbox for 'needs sunshine", () => {
    cy.get("#needs-sunshine");
  });
  it("shows error message when entered invalid postcode", () => {
    cy.get("#postcode-input").type("WN3");
    cy.get("#submit-postcode").click();
    cy.get("#postcode-error");
    cy.get("#postcode-input").clear();
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
    cy.get("h4").contains("Greater Manchester");
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

describe("The results page/component", () => {
  it("has all of the required components", () => {
    cy.visit("localhost:3000");
    cy.get("button").click();
    cy.get("h1").should("have.text", "Happy Plants");
    cy.get("#postcode-input").type("WN3 4DQ");
    cy.get("#needs-rainfall").click();
    cy.get("#submit-postcode").click();
    cy.get("#your-plants-need");
    cy.get("#happiness-results");
    cy.get("#weather-info");
  });
  it("changes forecast data when selecting a different day option", () => {
    cy.get(".tomorrow").click();
    cy.get(".day_after").click();
    cy.get(".today").click();
  });
  it("returns to home page when reset button is clicked", () => {
    cy.get("#reset-button").click();
    cy.get("#postcode-input");
  });
});
