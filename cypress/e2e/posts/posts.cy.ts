describe("post tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("should render post table", () => {
    cy.get('[data-testid="ListOfPostsButton"]').click();
    cy.contains("Posts").should("be.visible");
  });

  it("should check the post", () => {
    cy.get('[data-testid="ListOfPostsButton"]').click();
    cy.get(
      '[data-id="1"] > .MuiDataGrid-cellCheckbox > .MuiButtonBase-root > .PrivateSwitchBase-input'
    ).check();
  });
  it("should render the comments section", () => {
    cy.get('[data-testid="ListOfPostsButton"]').click();
    cy.get(
      '[data-id="1"] > .MuiDataGrid-cellCheckbox > .MuiButtonBase-root > .PrivateSwitchBase-input'
    ).check();

    cy.get('[data-testid="commentsSection"]')
      .find("li")
      .should("have.length", 5);
  });
});
