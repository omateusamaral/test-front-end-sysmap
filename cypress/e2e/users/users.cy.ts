/// <reference types="cypress" />

describe("user tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("should render SysMap", () => {
    cy.contains("SysMap");
  });
});
