import UserCheckOutPage from "../framework/smoke/userE2EPage"
import { guestUserJdplc as testData } from "../../../fixtures/globalConfig"
import { deliveryOptions } from "../../../fixtures/userCheckout"

describe('JD Sports New User E2E Test', () => {
    beforeEach('Visit JD Sports', () => {
        cy.visit('/')
    })

    it('Sign Up with Guest User by adding existing address', () => {
        UserCheckOutPage.clickShoppingOnUK()
        cy.wait(1000)
        UserCheckOutPage.clickAcceptAll()
        UserCheckOutPage.searchProduct(testData.product.shoe.infantShoe)
        UserCheckOutPage.getItemTitle().each((el, index) => {
            cy.wrap(el).should('contain', testData.product.shoe.infantShoe)
        })
        UserCheckOutPage.clickOnProductListItemByIndex(0)
        UserCheckOutPage.clickProductBySize(testData.product.size.infantShoe)
        UserCheckOutPage.clickOnAddToBasketButton()
        UserCheckOutPage.clickShoppingOnUK()
        UserCheckOutPage.clickOnBasketDetails()
        // cy.intercept('GET', '**/jdsportsuk/carts/*/deliveryOptions*').as('getDeliveryOptions')
        // cy.wait('@getDeliveryOptions').then((response) => {
        //     expect(response.response?.statusCode).to.eq(200)
        // })

        UserCheckOutPage.clickOnCheckoutButton()
        cy.wait(10000)
        UserCheckOutPage.enterUsername(testData.userData.newUser.username)

        UserCheckOutPage.getSubmitButton().contains('Continue').click()
        cy.wait(1000)
        UserCheckOutPage.getSubmitButton().contains('Continue as a guest').click()
        cy.wait(10000).then(() => {
            UserCheckOutPage.enterFirstName(testData.userData.newUser.firstName)
            UserCheckOutPage.enterLastName(testData.userData.newUser.lastName)
            UserCheckOutPage.enterMobile(Number(testData.userData.newUser.mobile))
            cy.get('[id="AddressFinder"]').type('BL98RR')
            cy.get('a').contains('BL9 8RR, Hollins Brook Way, Bury - 8 Addresses').click({ force: true})
            cy.get('a').contains('Warwick House, Hollins Brook Way, Bury, BL9 8RR').click({ force: true})
            cy.wait(5000)
            UserCheckOutPage.getSubmitButton().contains('Save and Continue').click()
            cy.get('[class^="StyledRadioButton"]', {timeout: 120000 }).contains('Standard').click()
        })
        cy.wait(5000)
        UserCheckOutPage.selectPaymentMethod('PayPal')
        UserCheckOutPage.clickOnCheckoutToPayment()
        cy.wait(2000)
        UserCheckOutPage.verifyPaypalPayment()
    })

    it('Sign Up with Guest User by adding address manually', () => {
        UserCheckOutPage.clickShoppingOnUK()
        cy.wait(1000)
        UserCheckOutPage.clickAcceptAll()
        UserCheckOutPage.searchProduct(testData.product.shoe.infantShoe)
        UserCheckOutPage.getItemTitle().each((el, index) => {
            cy.wrap(el).should('contain', testData.product.shoe.infantShoe)
        })
        UserCheckOutPage.clickOnProductListItemByIndex(0)
        UserCheckOutPage.clickProductBySize(testData.product.size.infantShoe)
        UserCheckOutPage.clickOnAddToBasketButton()
        UserCheckOutPage.clickShoppingOnUK()
        UserCheckOutPage.clickOnBasketDetails()

        UserCheckOutPage.clickOnCheckoutButton()
        cy.wait(10000)
        UserCheckOutPage.enterUsername(testData.userData.newUser.username)

        UserCheckOutPage.getSubmitButton().contains('Continue').click()
        cy.wait(1000)
        UserCheckOutPage.getSubmitButton().contains('Continue as a guest').click()
        cy.wait(10000).then(() => {
            cy.contains('Delivery Options').parent().parent().siblings().find('span[class^="StyledRadioButton"]').each(($el, index) => {
                cy.wrap($el).should('contain', Object.values(deliveryOptions)[index])
            })
            UserCheckOutPage.enterFirstName(testData.userData.newUser.firstName)
            UserCheckOutPage.enterLastName(testData.userData.newUser.lastName)
            UserCheckOutPage.enterMobile(Number(testData.userData.newUser.mobile))

            cy.get('button[data-testid="enterManualAddressBtn"]').click()
            cy.get('[id="address1-id"]').type('123 Test Street')
            cy.get('[id="address2-id"]').type('Test Address 2')
            cy.get('[id="town-id"]').type('Test City')
            cy.get('[id="postcode-id"]').type('PO167GZ')
            cy.get('[id="county-id"]').type('United Kingdom')
            
            UserCheckOutPage.getSubmitButton().contains('Save and Continue').click()
            cy.get('[class^="StyledRadioButton"]', {timeout: 120000 }).contains('Standard').click()
        })
        cy.wait(5000)
        UserCheckOutPage.selectPaymentMethod('PayPal')
        UserCheckOutPage.clickOnCheckoutToPayment()
        cy.wait(2000)
        UserCheckOutPage.verifyPaypalPayment()
    })
})
