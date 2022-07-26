import { registrationPage } from "../page/registrationPage";
import { homePage } from "../page/homePage";
import { storage } from "../helper/localStore";
import { generateRandomUserName } from "../helper/randomUserNameGenerator";

describe('registrationPageTest', () => {
  const username = generateRandomUserName();
  storage.setUserName(username);
  const password = 'Password@11';

  beforeEach(() => {
    cy.visit('https://buggy.justtestit.org/');
  });

  it('should redirect to registration page', () => {
    homePage.gotoRegistrationPage();
    cy.url().should('include', '/register');
  });

  it('should register successfully', ()=>{
    homePage.gotoRegistrationPage();
    registrationPage.enterUserName(username);
    registrationPage.enterFirstName(generateRandomUserName());
    registrationPage.enterLastName(generateRandomUserName());
    registrationPage.enterPassword(password);
    registrationPage.enterConfirmPassword(password);
    registrationPage.clickRegister();
    cy.get(registrationPage.messageClassName).contains(registrationPage.successMessage)
  });

  it('should throw an error if user tries to register with existing username', ()=>{
    homePage.gotoRegistrationPage();
    registrationPage.enterUserName(username);
    registrationPage.enterFirstName(generateRandomUserName());
    registrationPage.enterLastName(generateRandomUserName());
    registrationPage.enterPassword(password);
    registrationPage.enterConfirmPassword(password);
    registrationPage.clickRegister();
    cy.get(registrationPage.messageClassName).contains(registrationPage.errorMessage);
  })

});
