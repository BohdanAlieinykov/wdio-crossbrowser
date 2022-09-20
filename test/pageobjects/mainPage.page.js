class MainPage {
    get headerProducts() {
        return $("header div ul li[class]:nth-child(1)");
    }

    get headerSolutions() {
        return $("header div ul li:nth-child(3)");
    }

    get headerResources() {
        return $("header div ul li:nth-child(6)");
    }

    get headerCompany() {
        return $("header div ul li:nth-child(8)");
    }

    get headerPricing() {
        return $("header div ul li:nth-child(10)");
    }

    async hoverOnProduct() {
        await this.headerProducts.moveTo();
    }

    async hoverOnSolutions() {
        await this.headerSolutions.moveTo();
    }

    async hoverOnResources() {
        await this.headerResources.moveTo();
    }

    async hoverOnCompany() {
        await this.headerCompany.moveTo();
    }

    async hoverOnPricing() {
        await this.headerPricing.moveTo();
    }

    get productDropDownCell() {
        return $('header a[href*="number-lookup"]');
    }

    get solutionsDropDownCell() {
        return $('a[href*="contact-center"]');
    }

    get resourcesDropDownCell() {
        return $('a[href*="mission-control"]');
    }

    get companyDropDownCell() {
        return $('header a[href*="careers"]');
    }

    get pricingDropDownCell() {
        return $('header a[href*="elastic"]');
    }

    get tryForFreeBtn() {
        return $('[type="submit"]');
    }

    async tryForFreeClick() {
        await this.tryForFreeBtn.click();
    }

    get signUpEmailField() {
        return $("#email");
    }

    get messangingApiCard() {
        return $('a[href*="sms-api"] h3');
    }

    get videoApiCard() {
        return $('a[href*="video-api"] h3');
    }
}
module.exports = new MainPage();
