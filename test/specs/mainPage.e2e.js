const mainPage = require("../pageobjects/mainPage.page");
const LoginPage = require("../pageobjects/login.page");

describe("Main page functional", () => {
    it("Drop-down appears when user hover on Products in header", async () => {
        await browser.url("https://telnyx.com/");
        await LoginPage.acceptCookieClick();
        await mainPage.hoverOnProduct();
        await expect(mainPage.productDropDownCell).toBeDisplayedInViewport();
    });

    it("Drop-down appears when user hover on Solutions in header", async () => {
        await browser.url("https://telnyx.com/");
        await mainPage.hoverOnSolutions();
        await expect(mainPage.solutionsDropDownCell).toBeDisplayedInViewport();
    });

    it("Drop-down appears when user hover on Resources in header", async () => {
        await browser.url("https://telnyx.com/");
        await mainPage.hoverOnResources();
        await expect(mainPage.resourcesDropDownCell).toBeDisplayedInViewport();
    });

    it("Drop-down appears when user hover on Company in header", async () => {
        await browser.url("https://telnyx.com/");
        await mainPage.hoverOnCompany();
        await expect(mainPage.companyDropDownCell).toBeDisplayedInViewport();
    });

    it("Drop-down appears when user hover on Pricing in header", async () => {
        await browser.url("https://telnyx.com/");
        await mainPage.hoverOnPricing();
        await expect(mainPage.pricingDropDownCell).toBeDisplayedInViewport();
    });

    it("User directed to sign-up page with empty email, when email field in try for free form empty", async () => {
        await browser.url("https://telnyx.com/");
        await mainPage.tryForFreeClick();
        await expect(mainPage.signUpEmailField).toHaveValue("");
    });

    it("In Powerful products block displayed: Messanging API card", async () => {
        await browser.url("https://telnyx.com/");
        await mainPage.messangingApiCard.scrollIntoView();
        await expect(mainPage.messangingApiCard).toBeDisplayedInViewport();
    });

    it("In Powerful products block displayed: Video API card", async () => {
        await browser.url("https://telnyx.com/");
        await mainPage.videoApiCard.scrollIntoView();
        await expect(mainPage.videoApiCard).toBeDisplayedInViewport();
    });
});
