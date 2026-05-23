Cypress.Commands.add('openRegisterPage', () => {

    cy.visit('https://testzootopia.loremipsum.ge/ka')

   cy.contains('შესვლა')
    .click({ force: true })

    cy.contains('გაიარეთ რეგისტრაცია')
        .click()

})
Cypress.Commands.add('fillRegistrationForm', (user) => {

    cy.contains('სახელი გვარი')
        .parent()
        .find('input')
        .type(`${user.firstName} ${user.lastName}`)

    cy.contains('ელ.ფოსტა')
        .parent()
        .find('input')
        .type(user.validEmail)

    cy.contains('პირადი ნომერი')
        .parent()
        .find('input')
        .type(user.personalId)

    cy.contains('ტელ')
        .parent()
        .find('input')
        .type(user.phone)

    cy.contains('პაროლი')
        .parent()
        .find('input')
        .first()
        .type(user.validPassword)

    cy.contains('პაროლის გამეორება')
        .parent()
        .find('input')
        .type(user.validPassword)

    cy.get('input[type="checkbox"]')
    .check({ force: true })

})