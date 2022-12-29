/// <reference types="cypress" />

describe("user tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("should check the row", () => {
    cy.contains("Users");
    cy.get(
      '[data-id="1"] > .MuiDataGrid-cellCheckbox > .MuiButtonBase-root > .PrivateSwitchBase-input'
    ).check();
  });

  it("should render the card with user details", () => {
    cy.get(
      '[data-id="1"] > .MuiDataGrid-cellCheckbox > .MuiButtonBase-root > .PrivateSwitchBase-input'
    ).check();
    cy.get('[data-testid="UserSectionCard"]').should("be.visible");
    cy.contains("Romaguera-Crona").should("be.visible");
  });
});
