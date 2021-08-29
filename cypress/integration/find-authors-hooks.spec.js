describe('Find author at smashing', () => {
    beforeEach(() => {
        // Open website
        cy.visit('/');
    });

    it('Find the author Ramona Schwering', () => {
        // Enter author's name in search field
        cy.get('#js-search-input').type('Ramona Schwering');

        // Navigate to author's article
        cy.get('h2 > a').first().click();

        // Open the author's page
        cy.get('.author-post__author-title').click();

        // Check if we're on the author's site
        cy.contains('.author__title', 'Ramona Schwering').should('be.visible');
    });
});
