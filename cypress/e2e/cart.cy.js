describe('Cart', () => {
  it('პროდუქტის კალათაში დამატება', () => {

    cy.visit('https://testzootopia.loremipsum.ge/ka/product/100-Sanabelle-Urinary-10-kg')

    cy.contains('b', 'კალათში დამატება')
      .click({ force: true })

  })
})
describe('Cart', () => {
  it('პროდუქტის კალათიდან წაშლა', () => {
    cy.visit('https://testzootopia.loremipsum.ge/ka/product/100-Sanabelle-Urinary-10-kg')

    cy.contains('b', 'კალათში დამატება')
      .click({ force: true })

    cy.wait(1000)

    cy.visit('https://testzootopia.loremipsum.ge/ka/cart')

    cy.get('#Ellipse_42')
      .click({ force: true })

    cy.wait(1000)

    cy.contains('Sanabelle Urinary 10 kg')
      .should('not.exist')
  })
})