describe("The App - homepage", () => {
  it("has an title and subtitle", () => {
    cy.visit("localhost:3000");
    cy.get("h1").should("have.text", "Happy Plants");
    cy.get("p").should("have.text", "Weather tool for your garden");
  });
  it("have a form on it", () => {
    cy.get("form");
  });
  it("has a background", () => {
    cy.get("#background");
  });
  it("should take you to a results page when you enter a valid postcode and click go", () => {
    cy.get("#postcode-input").type("WN3 4DQ");
    cy.get("#postcode-input").should("have.value", "WN3 4DQ");
    cy.get("#submit-postcode").click();
    cy.get("h1").should("have.text", "Weather Report");
  });
});

describe("The form component", () => {
  it("has a text input for the postcode", () => {
    cy.visit("localhost:3000");
    cy.get("#postcode-input");
  });
  it("has a input checkbox for 'needs rainfall'", () => {
    cy.get("#needs-rainfall");
  });
  it("has a input checkbox for 'needs sunshine'", () => {
    cy.get("#needs-sunshine");
  });
});

describe("The Happiness component", () => {
  it("has an icon for the overall happiness", () => {
    cy.visit("localhost:3000");
    cy.get("#emotion-icon");
  });
  it("has a text description of happiness level'", () => {
    cy.get("#emotion-text");
  });
  it("has a text message for guidance / relating to weather'", () => {
    cy.get("#emotion-text");
  });
});
