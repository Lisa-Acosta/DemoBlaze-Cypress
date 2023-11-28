import { LoginMethods } from "./pages/login/login.methods";

describe('template spec', () => {
  it('passes', () => {
    const user = 'random01';
    const pass = 'random01';
    cy.visit('https://www.demoblaze.com/index.html');
    cy.get('a[data-target="#logInModal"]').click();
    LoginMethods.login(user, pass);
    cy.get('a#nameofuser').should('contain.text', user);
    cy.wait(10000);
  })
})