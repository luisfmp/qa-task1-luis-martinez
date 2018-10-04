const page = require('../page_objects/page');
const homePage = require('../page_objects/homePage');
const loginPage = require('../page_objects/loginPage');
var casual = require('casual');

beforeAll(function () {
  page.openUrl()
})

describe("Login process", function() {
    it("Verify error when no email is captured", function() {
        homePage.goToLogin();
        loginPage.clickOnCreateButton();
        expect(loginPage.isEmailErrorVisible()).toBe(true);
    });

    it("Verify registration process", function() {
        homePage.goToLogin();
        loginPage.captureEmail(casual.email);
        loginPage.clickOnCreateButton();
    });
});
