const LoginPage = require("../pageobjects/login.page");

describe("Login page", () => {

    it("Error message appears when user try to login with empty input", async () => {
        await browser.url("https://telnyx.com/");
        await LoginPage.acceptCookieClick();
        await LoginPage.loginButtonClick();
        await LoginPage.submitButtonClick();
        await expect(LoginPage.errorMessageEmail).toHaveText("Required");
        await expect(LoginPage.errorMessagePassword).toHaveText("Required");
    });

    it.only('Error message "Please enter a valid email address." appears when user email input without "@"', async () => {
        await browser.url("https://telnyx.com/");
        await LoginPage.loginButtonClick();
        await LoginPage.invalidEmailInput("monatanagmail.com");
        await LoginPage.submitButtonClick();
        await expect(LoginPage.invalidEmailError).toHaveText("Please enter a valid email address.");
    });

    it('List with another autorization methods appears when user click "Log in with another OAuth Provider" button', async () => {
        await browser.url("https://telnyx.com/");
        await LoginPage.loginButtonClick();
        await LoginPage.listAnotherProvidersClick();
        await expect(LoginPage.gitHubLogin).toBeDisplayedInViewport();
        await expect(LoginPage.facebookLogin).toBeDisplayedInViewport();
        await expect(LoginPage.linkedInLogin).toBeDisplayedInViewport();
    });

    it("User directed on Github login form by click [Log in with Github] button", async () => {
        await browser.url("https://telnyx.com/");
        await LoginPage.loginButtonClick();
        await LoginPage.listAnotherProvidersClick();
        await LoginPage.gitHubLoginClick();
        await expect(LoginPage.sighInToGh).toHaveTextContaining("Sign in to GitHub");
    });

    it("User directed on LinkedIn login form by click [Log in with LinkedIn] button", async () => {
        await browser.url("https://telnyx.com/");
        await LoginPage.loginButtonClick();
        await LoginPage.listAnotherProvidersClick();
        await LoginPage.linkedInLoginClick();
        await expect(LoginPage.linkedInLogo).toHaveTextContaining("LinkedIn");
    });

    it("User directed on Facebook login form by click [Log in with Facebook] button", async () => {
        await browser.url("https://telnyx.com/");
        await LoginPage.loginButtonClick();
        await LoginPage.listAnotherProvidersClick();
        await LoginPage.facebookLoginClick();
        await expect(browser).toHaveUrlContaining("facebook");
    });

    it('User directed on reset password page by click "Forgot your password?" button', async () => {
        await browser.url("https://telnyx.com/");
        await LoginPage.loginButtonClick();
        await LoginPage.passwordResetBtnCLick();
        await expect(browser).toHaveUrlContaining("password-reset");
    });

    it('User directed on microsoft login page by click "Log in with Microsoft" button', async () => {
        await browser.url("https://telnyx.com/");
        await LoginPage.loginButtonClick();
        await LoginPage.microsoftLoginBtnClick();
        await expect(browser).toHaveUrlContaining("microsoft");
    });

    it('User directed on sigh-up page by click "Sign up" button from login page', async () => {
        await browser.url("https://telnyx.com/");
        await LoginPage.loginButtonClick();
        await LoginPage.signUpBtnClick();
        await browser.pause(3000)
        await browser.switchWindow("https://telnyx.com/sign-up");
        await LoginPage.createAccountBttn()
        await expect(LoginPage.createAccountBtn).toBeDisplayed();
        await expect(browser).toHaveUrlContaining("sign-up");
    });

    it('Company email input field appears, when user click "Single Sign-On button"', async () => {
        await browser.url("https://telnyx.com/");
        await LoginPage.loginButtonClick();
        await LoginPage.singleSignOnBtnClick();
        await expect(LoginPage.companyEmailLabel).toBeDisplayed();
        await expect(LoginPage.companyEmailTextField).toExist();
    });

    it('Business name input field appears, when user click "Company name" button in Single Sign-On form', async () => {
        await browser.url("https://telnyx.com/");
        await LoginPage.loginButtonClick();
        await LoginPage.singleSignOnBtnClick();
        await browser.pause(3000)
        await LoginPage.companyNameBtnLinkClick();
        await expect(LoginPage.businessNameLabel).toBeDisplayed();
        await expect(LoginPage.businessNameInputField).toExist();
    });
});
