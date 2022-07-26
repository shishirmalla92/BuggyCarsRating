import { homePage } from "../page/homePage";
import { carListPage } from "../page/carListPage";
import { carModelPage } from '../page/modelPage';
import { loginHelper } from '../helper/loginHelper';

describe('carListPageTest', () => {
    const username = loginHelper.getUsername();
    const password = loginHelper.getPassword();
    const carname = 'Diablo';
    const comment = 'This is an automated comment';

    beforeEach(() => {
        cy.visit('https://buggy.justtestit.org/');
        homePage.loginToPage(username, password);
        homePage.gotoCarListPage();
        carListPage.selectACar(carname);
    });

    it('should redirect to car details page', () => {
        cy.url().should('include', '/model');
        cy.contains('Specification');
        cy.contains('Votes');
        cy.contains('Your Comment');
        cy.contains('Vote!');
    });

    it('should vote for a car', () => {
        carModelPage.enterComment(comment);
        carModelPage.submitVote();
        cy.contains(carModelPage.voteSuccessMessage);
    });

    it('should not be able to vote for the same car', () => {
        cy.contains(carModelPage.voteSuccessMessage);
    });

});