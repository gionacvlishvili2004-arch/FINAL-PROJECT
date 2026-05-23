describe('Authorization', () => {

  it('ავტორიზაცია არავალიდური მონაცემებით', () => {

    cy.fixture('user').then((user) => {

      cy.visit('https://testzootopia.loremipsum.ge/ka')

      cy.contains('შესვლა')
        .click({ force: true })

      cy.contains('ელ.ფოსტა')
        .parent()
        .find('input')
        .type(user.invalidEmail)

      cy.contains('პაროლი')
        .parent()
        .find('input')
        .type(user.invalidPassword)

      cy.contains('button', 'ავტორიზაცია')
        .click({ force: true })

      cy.wait(1000)

      cy.contains('button', 'ავტორიზაცია')
        .should('be.visible')

    })
  })

  it('ავტორიზაცია ცარიელი ველებით', () => {

    cy.visit('https://testzootopia.loremipsum.ge/ka')

    cy.contains('შესვლა')
      .click({ force: true })

    cy.contains('button', 'ავტორიზაცია')
      .click({ force: true })

    cy.wait(1000)

    cy.contains('button', 'ავტორიზაცია')
      .should('be.visible')

  })

})