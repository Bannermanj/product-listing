context("Tests", () => {
  it("should fetch products", () => {
    cy.visit("http://localhost:8080/", {
      onBeforeLoad(win) {
        cy.stub(win, "fetch")
          .withArgs("https://api.us-central1.gcp.commercetools.com/")
          .resolves({
            ok: true,
            json: () => []
          });
      }
    });
  });
});
