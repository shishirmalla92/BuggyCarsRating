import { links } from '../helper/link';

describe('should check for all links', () => {
    it('should check for all broken links', () => {
        links.forEach(link => {
            cy.visit(link)
            cy.get('a').each(page => {
                cy.request(page.prop('href'))
            })
        })
    })
});
