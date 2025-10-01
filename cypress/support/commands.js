import { elements } from "./elements";
import { constsDatas } from "../support/constants";
const { faker } = require("@faker-js/faker");
import { generatePassword } from "../support/constants";

Cypress.Commands.add("visitSite", () => {
  cy.visit("/");
  cy.url().should("eq", Cypress.config().baseUrl);
});

Cypress.Commands.add("selectProduct", () => {
  cy.get(elements.laptopImageId).click();
  cy.get(elements.laptopProductId).click();
  cy.get(elements.addMoreQuantity).click();
});

Cypress.Commands.add("addToCart", () => {
  cy.get(elements.addToCart).click();
  cy.get(elements.shoppingCartLink).click();
  cy.contains(constsDatas.productType[0]).should("be.visible");
  cy.get(elements.cartProductQuantity).should("have.text", "2");
  cy.contains("CHECKOUT").click();
});

Cypress.Commands.add("registrationNewUser", () => {
  cy.get(elements.btnRegistration)
    .click()
    .then(() => {
      cy.get(elements.registerUsername).type(
        faker.person.firstName().toLowerCase() +
          faker.number.int({ min: 1000, max: 9999 }).toString()
      );
      cy.get(elements.registerEmail).type(faker.internet.exampleEmail());

      const password = generatePassword();
      cy.get(elements.registerPassword).type(password);
      cy.get(elements.registerConfirmPassword).type(password);

      cy.get(elements.registerFirstName).type(faker.person.firstName());
      cy.get(elements.registerLastName).type(faker.person.lastName());
      cy.get(elements.registerPhoneNumber).type(
        faker.phone.number().substring(0, 20)
      );
      cy.get(elements.registerCountry).select("Brazil");
      cy.get(elements.registerCity).type(faker.location.city());
      cy.get(elements.registerAddress).type(faker.location.streetAddress());
      cy.get(elements.registerState).type(faker.location.state(), {
        force: true,
      });
      cy.wait(5000);
      cy.get(elements.registerPostalCode).type(faker.location.zipCode());

      cy.get(elements.agreeTerms).check();
      cy.get(elements.btnRegister).click();
    });
});

Cypress.Commands.add("finishOrder", () => {
  cy.get(elements.btnNext).click();
  cy.get(elements.safepayUsername).type(
    faker.person.firstName().substring(0, 5)
  );
  const password = generatePassword();
  cy.get(elements.safepayPassword).type(password);
  cy.get(elements.btnSaveSafepay).click();
  cy.get(elements.btnPayNow).click();

  cy.contains("Thank you for buying with Advantage").should("be.visible");
  cy.contains("Your order number is").should("be.visible");
  cy.url().should("include", "orderPayment");
});
