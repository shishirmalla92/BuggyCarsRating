class ProfilePage {

	username = '#username';
	firstName = '#firstName';
	lastName = '#lastName';
	gender = '#gender';
	age = '#age';
	address = '#address';
	phone = '#phone';
	hobby = '#hobby';
	currentPassword = '#currentPassword';
	newPassword = '#newPassword';
	newPasswordComfirmation = '#newPasswordConfirmation';
	saveBtn = 'Save';
	profileSaveSuccessMessage = 'The profile has been saved successful';

	enterUserName  = (usernameValue) => {
  		cy.get(this.username).clear().type(usernameValue);
  	}
  	
  	enterFirstName  = (firstNameValue) => {
  		cy.get(this.firstName).clear().type(firstNameValue);
  	}
  	
  	enterLastName  = (lastNameValue) => {
  		cy.get(this.lastName).clear().type(lastNameValue);
  	}

	enterGender  = (genderValue) => {
  		cy.get(this.gender).clear().type(genderValue);
  	}
  	
  	enterAge  = (ageValue) => {
  		cy.get(this.age).clear().type(ageValue);
  	}
  	
  	enterAddress  = (addressValue) => {
  		cy.get(this.address).clear().type(addressValue);
  	}
  	
  	enterPhone  = (phoneValue) => {
  		cy.get(this.phone).clear().type(phoneValue);
  	}
  	
  	selectHobby  = (hobbyValue) => {
  		cy.get(this.hobby).select(hobbyValue);
  	}

	enterCurrentPassword = (currentPassword) => {
		cy.get(this.currentPassword).clear().type(currentPassword);
	};

	enterNewPassword = (newPassword) => {
		cy.get(this.newPassword).clear().type(newPassword);
	};

	enterNewPasswordConfirmation = (newPasswordConfirmation) => {
		cy.get(this.newPasswordComfirmation).clear().type(newPasswordConfirmation);
	};

  	saveProfile = () => {
  		cy.contains(this.saveBtn).click();
  	}

}

export const profilePage = new ProfilePage();
