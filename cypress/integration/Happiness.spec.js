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
