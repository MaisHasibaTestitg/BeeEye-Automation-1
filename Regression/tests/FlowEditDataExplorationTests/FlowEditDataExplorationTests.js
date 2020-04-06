const loginPage = require("../../Page/login");
const Flows = require("../../Page/Flows");
const title = require("../../Page/Title");
const FlowEditDS = require("../../Page/FlowEditDS");
const FlowEditTransformation = require("../../Page/FlowEditTransformation");
const FlowEditDataExplorationSelectors = require("../../Selectors/FlowEditDataExplorationSelectors");
const screenShotUtils = require("../../utils/screenShotUtils");
const logReport = require("mochawesome-screenshots/logReport");
const setup = require("../../utils/setup");
const configrationReader = require("../../utils/configrationReader");
const FlowsSelector = require("../../Selectors/FlowsSelector");

const {
    assert
} = require('chai')
const {
    expect
} = require('chai')
describe('Flow Edit - DS : Verify if the user is navigated to the last confguring step for the selected flow then Upload Valid/Not Valid CSV file, Select Valid/Not Valid Label and Check if search process works as expected in all tabs in DS Page', function () {

    before(function (browser, done) {
        logReport.log(this, "Test Cases for Flow Edit - DS");
        done();

    });

    after(function (browser, done) {
        browser.end(function () {
            console.log("End Browser");
            done();
        });
    });

    beforeEach(function (browser, done) {
        logReport.log(this, "Open the site");
        setup.lunchBrowser(browser, '');
        logReport.log(this, "Login with valid Information");
        loginPage.LoginWithValidInformation(browser);
        logReport.log(this, "Check The title of the Page");
        title.getTitle(browser);
        console.log("before each");
        done();
    });

    afterEach(function (browser, done) {
        done();
    });

    //Feature list - Verify the data is displayed correctly
    it('Feature list - Verify the data is displayed correctly', function (browser) {
        setup.logTestDetails(this, "Try to Verify user is navigated to the last confguring step for the selected flow")
        Flows.CreateNewFlow(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new Flow");
        Flows.CheckBackButton(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new flow Page after you create a new flow to verify that Flow name was displayed on the back button");
        FlowEditDS.LastConfiguringStep(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the last confguring step for the selected flow");
        FlowEditDS.SearchOnSpecificFlowName(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the last confguring step for the selected flow after you search on this flow");
        Flows.UploadFile(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you Upload CSV File for the selected Flow");
        Flows.SelectValidLabel(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you select a valid Label");
        Flows.RunDataSources(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you run the data Source");
        FlowEditTransformation.RunTransformation(browser);
        //Take screenshot for the result by call takeScreenShot function
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you run the Transformation ");
        browser.end();
    });

    

});
