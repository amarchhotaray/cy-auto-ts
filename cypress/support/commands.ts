/// <reference types="cypress" />
export {}
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable
      visitUrl(value: string): Chainable<Element>
    //   drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
    //   dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
    //   visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
    }
  }
}

// Cypress.Commands.add('getRandomString') {
//     const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let result = '';
//     for (let i = 0; i < length; i++) {
//       result += chars.charAt(Math.floor(Math.random() * chars.length));
//     }
//     return result;
//   }
  
//   console.log(getRandomString(10))

Cypress.Commands.add('login', (email: string, password: string) => {
  cy.visit('/')
  if(email && password) {
    cy.get('[id="email-id"]').type(email)
    cy.get('[id="password-id"]').type(password)
    cy.get('button[type="submit"]').click()
  }
})
Cypress.Commands.add('visitUrl', (value: string) => {
  cy.visit(value)
})

// Cypress.LocalStorage.clear = () => {}
// Clear sessionStorage directly using the browser's sessionStorage API
// cy.window().then((win) => {
//   win.sessionStorage.clear = () => {}
// })
