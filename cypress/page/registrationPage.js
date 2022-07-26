class RegistrationPage {
	username = '#username';
  	firstName = '#firstName';
  	lastName = '#lastName';
  	password = '#password';
  	confirmPassword = '#confirmPassword';
  	registerButton = 'html>body>my-app>div>main>my-register>div>div>form>button';
  	messageClassName = '.result';
  	errorMessage = 'UsernameExistsException: User already exists';
	successMessage = 'Registration is successful';

  	enterUserName  = (usernameValue) => {
  		cy.get(this.username).clear().type(usernameValue);
  	}
  	
  	enterFirstName  = (firstNameValue) => {
  		cy.get(this.firstName).clear().type(firstNameValue);
  	}
  	
  	enterLastName  = (lastNameValue) => {
  		cy.get(this.lastName).clear().type(lastNameValue);
  	}
  	
  	enterPassword  = (passwordValue) => {
  		cy.get(this.password).clear().type(passwordValue);
  	}
  	
  	enterConfirmPassword  = (confirmPasswordValue) => {
  		cy.get(this.confirmPassword).clear().type(confirmPasswordValue);
  	}

  	clickRegister = () => {
  		cy.get(this.registerButton).click();
  	}


}

export const registrationPage = new RegistrationPage();
