import { homePage } from '../page/homePage';
import { loginHelper } from '../helper/loginHelper';


describe('loginTest', () => {
	const username = loginHelper.getUsername();
	const password = loginHelper.getPassword();

	beforeEach(() => {
		cy.visit('https://buggy.justtestit.org/');
	});

	it('should not let you login with invalid credentials', () => {
		homePage.loginToPage('invalidUserName123', password);
		cy.contains(homePage.invalidUsernameOrPasswordMessage);

	});

	it('should login successfully with valid credentials', () => {
		homePage.loginToPage(username, password);
		cy.contains('Profile');
	})

});
