describe('Homepage_spec.cy.js', () => {
  // const apiKey = Cypress.env('api_key')

  beforeEach(() => {
    const url = 'http://localhost:3000'
    cy.intercept('GET', `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=Cypress.env('api_key')`, 
      { fixtures: 'allArticles.json' }).as('getArticles')
    cy.intercept('GET', `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=Cypress.env('api_key')`,
      { fixtures: 'selectedArticle.json' }).as('getSelectedArticle')
    cy.intercept('GET', `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=Cypress.env('api_key')`,
      { fixtures: 'noResults.json' }).as('getNoResults')
    cy.intercept('GET', `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=Cypress.env('api_key')`,
      { fixtures: 'filteredArticles.json' }).as('getFilteredArticles')
    cy.visit(url)
  })

  it('should visit the homepage', () => {
    cy.url('http://localhost:3000')
  })

  it('should display a header, form, list of articles, and footer', () => {
    cy.get('header > h1')
      .should('be.visible').and('contain', 'Top Stories')

    cy.get('footer > h3')
      .should('be.visible').and('contain', 'Copyright (c) 2022 The New York Times Company. All Rights Reserved.')

    cy.get('form')
      .should('be.visible')
      .children('.search-bar').should('be.visible').should('have.attr', 'placeholder').and('include', 'America')
      
    cy.get('button.search-btn')
      .should('be.visible').should('contain', 'Search').and('be.disabled')

    cy.get('.article-list')
      .should('not.be.empty')
    
    cy.get('a')
      .should('have.length', 15)
      .children().should('have.class', 'article-card')
      .within(card => {
        cy.get('img').should('be.visible').should('have.attr', 'alt').should('not.be.empty')
        cy.get('h2').should('be.visible').should('not.be.empty')
        cy.get('p').should('be.visible').should('not.be.empty')
      })  
  })

})

