class LoginPage {
    get loginButton() {
        return $('header a[href*="portal.telnyx"]:nth-child(4)');
    }

    get acceptCookie() {
        return $('[aria-label="close and deny"]~div button');
    }

    async acceptCookieClick() {
        await this.acceptCookie.click();
    }

    async loginButtonClick() {
        await this.loginButton.click();
    }

    get emailInputField() {
        return $('[name="login"] [name="email"]');
    }

    get passwordInputField() {
        return $('[name="login"] [name="password"]');
    }

    get submitButton() {
        return $('[aria-label="loginForm"] [type="submit"]');
    }

    get sighOutBtn() {
        return $('[role="menuitem"] button');
    }

    get dropDownIcon() {
        return $('[data-icon="angle-down"]');
    }

    get headerText() {
        return $("div.offset--sideNav:nth-child(2) h1");
    }

    async submitButtonClick() {
        await this.submitButton.waitForClickable({ timeout: 10000 });
        await this.submitButton.click();
        await this.errorMessageEmail.waitForDisplayed({ timeout: 10000 });
    }

    get errorMessageEmail() {
        return $("//form/div[1]/div[1]/label/div/div[2]");
    }

    get errorMessagePassword() {
        return $("//form/div[1]/div[2]/label/div/div[2]");
    }

    get invalidEmailError() {
        return $('div[class*="TextField__ErrorMessage"]');
    }

    get listAnotherProviders() {
        return $('button[class*="LoginOAuth__MoreProvidersButton"]');
    }

    async listAnotherProvidersClick() {
        await this.listAnotherProviders.waitForClickable({ timeout: 10000 });
        await this.listAnotherProviders.click();
    }

    get gitHubLogin() {
        return $('[aria-label="githubForm"]');
    }

    async gitHubLoginClick() {
        await this.gitHubLogin.waitForClickable({ timeout: 10000 });
        await this.gitHubLogin.click();
    }

    get facebookLogin() {
        return $('[aria-label="facebookForm"]');
    }

    async facebookLoginClick() {
        await this.facebookLogin.waitForClickable({ timeout: 10000 });
        await this.facebookLogin.click();
    }

    get linkedInLogo() {
        return $(".in__logo");
    }

    get passwordResetBtn() {
        return $('a[href*="password-reset"]');
    }

    async passwordResetBtnCLick() {
        await this.passwordResetBtn.waitForClickable({ timeout: 10000 });
        await this.passwordResetBtn.click();
    }

    get microsoftLogin() {
        return $('form span[class*="LoginOAuth__OAuthButtonLabel"]');
    }

    async microsoftLoginBtnClick() {
        await this.microsoftLogin.waitForClickable({ timeout: 10000 });
        await this.microsoftLogin.click();
    }

    async linkedInLoginClick() {
        await this.linkedInLogin.waitForClickable({ timeout: 10000 });
        await this.linkedInLogin.click();
    }

    get sighInToGh() {
        return $(".auth-form p:nth-child(2)");
    }

    get linkedInLogin() {
        return $('[aria-label="linkedinForm"]');
    }

    get signUpBtn() {
        return $("a[href*=sign-up]");
    }

    async signUpBtnClick() {
        await this.signUpBtn.waitForClickable({ timeout: 10000 });
        await this.signUpBtn.click();
    }

    get singleSignOnBtn() {
        return $('[data-testid="login.signin.tab.sso"]');
    }

    async singleSignOnBtnClick() {
        await this.singleSignOnBtn.waitForClickable({ timeout: 10000 });
        await this.singleSignOnBtn.click();
    }

    get companyEmailTextField() {
        return $('[placeholder="e.g. jane@acme.com"]');
    }

    get companyEmailLabel() {
        return $('[aria-label="ssoForm"] span[class*=align]');
    }

    get businessNameLabel() {
        return $('[aria-label="ssoForm"] span[class*=align]');
    }

    get companyNameBtnLink() {
        return $('button[class*="ButtonLink"]');
    }

    get businessNameInputField() {
        return $('[placeholder="Acme"]');
    }

    async companyNameBtnLinkClick() {
        await this.companyNameBtnLink.waitForClickable({ timeout: 10000 });
        await this.companyNameBtnLink.click();
    }

    get createAccountBtn() {
        return $('[aria-label="signup-form"] [type="submit"]');
    }

    async createAccountBttn() {
        await this.createAccountBtn.waitForDisplayed({ timeout: 8000 });
    }

    async invalidEmailInput(email) {
        await this.emailInputField.setValue(email);
    }
}

module.exports = new LoginPage();
