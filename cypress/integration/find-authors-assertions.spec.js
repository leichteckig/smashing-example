describe('Find author at smashing', () => {
    it('Find the author Ramona Schwering', () => {
        // Open website
        cy.visit('/');

        // Enter author's name in search field
        cy.get('.headline-content').should('be.visible');
        cy.get('#js-search-input').type('Ramona Schwering');

        // Wait for the search result and one in particular
        cy.get('#js-search-results-dropdown').should('be.visible');
        cy.contains('h2 > a', 'It’s A (Front-End Testing) Trap!').should('be.visible');

        // Navigate to author's article
        cy.contains('h2 > a', 'It’s A (Front-End Testing) Trap!').click();

        // Wait for the search result and one particular one to load
        cy.get('.author-post__author-title').should('be.visible');

        // Open the author's page
        cy.get('.author-post__author-title').click();

        // Check if we're on the author's site
        cy.contains('.author__title', 'Ramona Schwering').should('be.visible');
    });
});
