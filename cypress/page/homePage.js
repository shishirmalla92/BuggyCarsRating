class HomePage {
	registerButton = 'a[href="/register"]';
	loginButton = 'html>body>my-app>header>nav>div>my-login>div>form>button';
	carList = 'a[href="/overall"]';
	userName = '[name="login"]';
	password = '[name="password"]';
	invalidUsernameOrPasswordMessage = 'Invalid username/password';
	profile = 'a[href="/profile"]';


	gotoRegistrationPage = ()=> {
		cy.get(this.registerButton).click();
	}

	loginToPage = (username, password) => {
		cy.get(this.userName).type(username);
		cy.get(this.password).type(password);
		cy.get(this.loginButton).click();
	}

	gotoCarListPage = () => {
		cy.get(this.carList).click();
	}

	gotToProfilePage = () => {
		cy.get(this.profile).click();
	}

}

export const homePage = new HomePage();
