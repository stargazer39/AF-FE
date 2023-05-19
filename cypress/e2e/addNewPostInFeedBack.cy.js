describe("add new post test", () => {
  it("create post", () => {
    cy.visit("http://localhost:3000");
    cy.get("input[name=email]").type("dezoysalakshika813@gmail.com");
    cy.get("input[name=password]").type("Test@123");
    cy.get("button").contains("Login").click();
    cy.wait(1000);
    cy.get("div").contains("Add a new post").click();
    cy.wait(1000);
    cy.get("textarea[name=descrition]").type("Test 312321312");
    cy.get("input[type=submit]").click();
    cy.wait(1000);
    cy.location("pathname").should("equal", "/");
  });
  it("edit post", () => {
    cy.visit("http://localhost:3000");
    cy.get("input[name=email]").type("dezoysalakshika813@gmail.com");
    cy.get("input[name=password]").type("Test@123");
    cy.get("button").contains("Login").click();
    cy.wait(1000);
    cy.get("svg[id=Test312321312").click();
    cy.get("span").contains("Edit").click();
    cy.wait(1000);
    cy.get("textarea[name=descrition]").clear();
    cy.get("textarea[name=descrition]").type("Test 312321312 Edited");
    cy.get("input[type=submit]").click();
    cy.wait(1000);
    cy.location("pathname").should("equal", "/");
  });
  it("delete post", () => {
    cy.visit("http://localhost:3000");
    cy.get("input[name=email]").type("dezoysalakshika813@gmail.com");
    cy.get("input[name=password]").type("Test@123");
    cy.get("button").contains("Login").click();
    cy.wait(1000);
    cy.get("svg[id=Test312321312Edited").click();
    cy.get("span").contains("Delete").click();
    cy.wait(300);
    cy.get("button").contains("Remove Post").click();
    cy.wait(1000);
    cy.get("button").contains("Remove Post").should("not.exist");
  });
});
