import { homePage } from "../page/homePage";
import { profilePage } from '../page/profilePage';

import { loginHelper } from '../helper/loginHelper';

describe('profilePageTest', () => {
    const username = loginHelper.getUsername();
    const password = loginHelper.getPassword();
    const newPassword = 'Password@1';

    beforeEach(() => {
        cy.visit('https://buggy.justtestit.org/');
        homePage.loginToPage(username, password);
        homePage.gotToProfilePage();
    });

    it('should redirect to profile page', () => {
        cy.url().should('include', '/profile');
        cy.contains('Basic');
        cy.contains('Additional Info');
    });

    it('should update your profile', () => {
        profilePage.enterFirstName('Updated First Name');
        profilePage.enterLastName('Updated Last Name');
        profilePage.enterGender('Male');
        profilePage.enterAge('30');
        profilePage.enterAddress('Auckland CBD');
        profilePage.enterPhone('123456789');
        profilePage.selectHobby('Biking');
        profilePage.saveProfile();
        cy.contains(profilePage.profileSaveSuccessMessage);
    });

    it('should update the password', () => {
        profilePage.enterCurrentPassword(password);
        profilePage.enterNewPassword(newPassword);
        profilePage.enterNewPasswordConfirmation(newPassword);
        profilePage.saveProfile();
        cy.contains(profilePage.profileSaveSuccessMessage);
    });

});