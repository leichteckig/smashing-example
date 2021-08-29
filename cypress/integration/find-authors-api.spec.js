describe('Find author at smashing', () => {
    it('Find the author Ramona Schwering', () => {

        // Route to wait for later
        cy.intercept({
            url: '*/indexes/smashingmagazine/*',
            method: 'POST'
        }).as('search');

        // Open website
        cy.visit('/');

        // Enter author's name in search field
        cy.get('#js-search-input').type('Ramona Schwering');

        // Later: Assertion of the search request’s status code
        cy.wait('@search')
            .its('response.statusCode').should('equal', 200);

        // Navigate to author's article
        cy.get('h2 > a').first().click();

        // Open the author's page
        cy.get('.author-post__author-title').click();

        // Check if we're on the author's site
        cy.contains('.author__title', 'Ramona Schwering').should('be.visible');
    });
});
