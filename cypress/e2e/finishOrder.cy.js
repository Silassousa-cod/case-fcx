describe('Finish Order Flow', { testIsolation: false }, () => {
  before('Visit Site', () => {
    cy.visitSite();
  });
  
  it('Select Product and Add More Quantity', () => {
    cy.selectProduct();
  });

  it('Add to Cart', () => {
    cy.addToCart();
  });

  it('Registration New User', () => {
    cy.registrationNewUser();
  });

  it('Finish Order', () => {
    cy.finishOrder();
  });

});