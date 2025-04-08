import UserCheckOutPage from "../framework/smoke/userE2EPage"
import { existingUserJdplc as testData } from "../../../fixtures/globalConfig"
import { deliveryOptions } from "../../../fixtures/userCheckout"

describe('JD Sports New User E2E Test', () => {
    before('Visit JD Sports', () => {
        cy.visit('/')
    })

    it('Verify e2e flow from product search to checkout', () => {
        UserCheckOutPage.clickShoppingOnUK()
        cy.wait(1000)
        UserCheckOutPage.clickAcceptAll()
        UserCheckOutPage.searchProduct(testData.product.shoe.infantShoe)
        UserCheckOutPage.getItemTitle().each((el) => {
            cy.wrap(el).should('contain', testData.product.shoe.infantShoe)
        })

    // Verify Basket Details by adding item
        UserCheckOutPage.clickOnProductListItemByIndex(0)
        UserCheckOutPage.clickProductBySize(testData.product.size.infantShoe)
        UserCheckOutPage.clickOnAddToBasketButton()
        UserCheckOutPage.clickShoppingOnUK()
        UserCheckOutPage.clickOnBasketDetails()
        cy.get('[class="itemName"]').should('contain', testData.product.shoe.infantShoe)
        cy.get('[class="itemCost"]').should('contain', `£${testData.product.price.infantShoe}.00`)
        cy.get('[class="itemSize"]').should('contain', testData.product.size.infantShoe)
        // cy.intercept('GET', '**/jdsportsuk/carts/*/deliveryOptions*').as('getDeliveryOptions')
        // cy.wait('@getDeliveryOptions').then((response) => {
        //     expect(response.response?.statusCode).to.eq(200)
        // })

    // Verify Checkout page
        UserCheckOutPage.clickOnCheckoutButton()
        cy.wait(10000)
        UserCheckOutPage.enterUsername(testData.userData.existingUser.username)
        UserCheckOutPage.getSubmitButton().contains('Continue').click()
        cy.wait(1000)
        UserCheckOutPage.getPassword()
            .should('be.visible')
            .type(testData.userData.existingUser.password)
        cy.wait(2000)
        UserCheckOutPage.getSubmitButton().contains('Sign In').click()
        cy.wait(2000)
        cy.contains('Delivery Options', { timeout: 60000 }).parent().parent().siblings().find('span[class^="StyledRadioButton"]').each(($el, index) => {
            cy.wrap($el).should('contain', Object.values(deliveryOptions)[index])
        })

    // Verify selected payment method
        UserCheckOutPage.selectPaymentMethod('PayPal')
        UserCheckOutPage.clickOnCheckoutToPayment()
        cy.wait(2000)
        UserCheckOutPage.verifyPaypalPayment()
    })
})
