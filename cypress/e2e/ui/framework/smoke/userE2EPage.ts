class UserCheckOutPage {
    // Element Starts
    getShoppingOnUK = () => cy.contains('Continue shopping on JD Sports United Kingdom')

    getSearchProduct = () => cy.get('[id="srchInput"]')

    getItemTitle = () => cy.get('[class="itemTitle"]')

    getProductListItem = () => cy.get('#productListMain .productListItem')

    getProductListItemByIndex = (index: number) => cy.get('#productListMain .productListItem').eq(index)

    getProductBySize = (size: string) => cy.get(`[data-size="${size}"]`)

    getAddToBasketButton = () => cy.get('[id="addToBasket"]')

    getBasketDetails = () => cy.get('[class="basketDetails"]', { timeout: 60000 })

    getCheckoutButton = () => cy.get('[class="basketContinue"] [title="Checkout securely"]')

    getUsername = () => cy.get('[id="email-id"]', { timeout: 60000 })

    getPassword = () => cy.get('[id="password-id"]', { timeout: 30000 })

    getFirstName = () => cy.get('[id="firstName-id"]')

    getLastName = () => cy.get('[id="lastName-id"]')

    getMobile = () => cy.get('[id="phone-id"]')
    
    getSubmitButton = () => cy.get('button[type="submit"]')

    getCheckoutToPayment = () => cy.get('button[aria-label="Checkout Securely"]')

    // Element Ends

    // Action Starts

    clickShoppingOnUK = () => this.getShoppingOnUK().click()

    clickAcceptAll = () => cy.get('button:contains("Accept All")').eq(0).click()

    searchProduct = (product: string) => this.getSearchProduct().type(`${product}{enter}`)
    
    clickOnProductListItemByIndex = (index: number) => this.getProductListItemByIndex(index).click()

    clickProductBySize = (size: string) => this.getProductBySize(size).click()

    clickOnAddToBasketButton = () => this.getAddToBasketButton().click()

    clickOnBasketDetails = () => this.getBasketDetails().click()

    clickOnCheckoutButton = () => this.getCheckoutButton().click()

    selectPaymentMethod = (method: string) => cy.contains(method, { timeout: 60000 }).closest('div').find('input[type="radio"]').check({ force: true })

    clickOnCheckoutToPayment = () => this.getCheckoutToPayment().click()

    enterFirstName = (firstName: string) => this.getFirstName().type(firstName)

    enterLastName = (lastName: string) => this.getLastName().type(lastName)

    enterUsername = (username: string) => 
        this.getUsername()
            .should('be.visible')
            .clear({ force: true})
            .type(username, { delay: 300, force: true })
            .should('have.value', username)

    enterPassword = (password: string) => this.getPassword().type(password)

    enterMobile = (mobile: number) => this.getMobile().clear().type(mobile.toString())

    // Action Ends
     
    // Assertion Starts

    verifyPaypalPayment = () => {
        cy.url().should('includes', '/payment')
        cy.contains('Pay with PayPal').should('be.visible')
    }

    // Assertion Ends
}

export default new UserCheckOutPage();