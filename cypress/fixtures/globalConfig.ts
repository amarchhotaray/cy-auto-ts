const guestUserJdplc = {
    userData: {
        newUser: {
            username: `${Math.random().toString(36).substring(2, 8).toLowerCase()}@jdplc.com`,
            password: 'automation@123',
            firstName: 'Automation',
            lastName: 'NewUser',
            mobile: '+449876543210',
        },
    },
    product: {
        shoe: {
            infantShoe: 'Nike Dunk Low Infant',
            adultShoe: 'Nike Air Max 90'
        },
        size: {
            infantShoe: '9.5',
            adultShoe: '8.5'
        },
        price: {
            infantShoe: '45',
        },
    }
}

const existingUserJdplc = {
    userData: {
        existingUser: {
            username: 'AutomationUser@jdplc.com',
            password: 'automation@123',
            firstName: 'Automation',
            lastName: 'User',
            mobile: '9876543210',
        },
    },
    product: {
        shoe: {
            infantShoe: 'Nike Dunk Low Infant',
            adultShoe: 'Nike Air Max 90'
        },
        size: {
            infantShoe: '9.5',
            adultShoe: '8.5'
        },
        price: {
            infantShoe: '45',
        },
    }
}

export {
    guestUserJdplc,
    existingUserJdplc
}