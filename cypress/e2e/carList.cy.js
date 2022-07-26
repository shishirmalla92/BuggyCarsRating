import { homePage } from "../page/homePage";
import { carListPage } from "../page/carListPage";
import { loginHelper } from '../helper/loginHelper';

describe('carListPageTest', () => {
    const username = loginHelper.getUsername();
    const password = loginHelper.getPassword();

    beforeEach(() => {
        cy.visit('https://buggy.justtestit.org/');
        homePage.loginToPage(username, password);
        homePage.gotoCarListPage();
    });

    it('should visit all cars list page', () => {
        cy.url().should('include', '/overall');
        cy.contains('Make');
        cy.contains('Model');
        cy.contains('Rank');
        cy.contains('Votes');
        cy.contains('Engine');
        cy.contains('Comments');
    });

    it('should navigate back and forth between pages', () => {
        cy.contains(carListPage.firstPageMessage);
        carListPage.gotoNextPage();
        cy.contains(carListPage.secondPageMessage);
        carListPage.gotoPreviousPage();
        cy.contains(carListPage.firstPageMessage);
    });

});
