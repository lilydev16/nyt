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

  

})

