class LoginHelper{

    username = "automationTestUser111";
    password = "Password@1";

    getUsername = () => {
        return this.username;
    }

    getPassword = () => {
        return this.password;
    }
}

export const loginHelper = new LoginHelper();
