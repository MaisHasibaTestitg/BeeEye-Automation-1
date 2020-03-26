const loginPage = require("../../Page/login");
const title = require("../../Page/Title");
const FlowEditTransformation = require("../../Page/FlowEditTransformation");
const Flows = require("../../Page/Flows");
const screenShotUtils = require("../../utils/screenShotUtils");
const logReport = require("mochawesome-screenshots/logReport");
const setup = require("../../utils/setup");
const configrationReader = require("../../utils/configrationReader");

const {
    assert
} = require('chai')
const {
    expect
} = require('chai')
describe('Flow Edit - Transformations tab :Verify the Run Transformation , Creating New Transformations, Try to Add builting transformation and try to Add imputations', function () {

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

    //Run Transformation phase and verify data is loaded.
    //Creating New Transformation
    //Add builting transformation 
    it('Run Transformation phase and verify data is loaded Then Create Transformation function', function (browser) {
        setup.logTestDetails(this, "Try to Run Tranfsfromation phase and verify data is loaded")
        Flows.CreateNewFlow(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new Flow");
        Flows.CheckBackButton(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new flow Page after you create a new flow ");
        Flows.UploadFile(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you Upload File to the new flow");
        Flows.SelectValidLabel(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you select a valid Label");
        Flows.RunDataSources(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you run the data Source");
        FlowEditTransformation.RunTransformation(browser);
        //Take screenshot for the result by call takeScreenShot function
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you run the Transformation ");
        FlowEditTransformation.CheckLogWindow(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the Logs Window after you run the Transformation ");
        //Abs function
        FlowEditTransformation.CreateTransformationFunction(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you click on Add Transformation Button");
        FlowEditTransformation.SelectTransformationFunction_abs(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you Select abs function from Built in List ");
        FlowEditTransformation.DisplayDataforTransformationFunction_abs(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the Result value after you apply Abs function");
        //Sqrt function
        // already we are in transformation Tab
        FlowEditTransformation.SelectTransformationFunction_sqrt(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you Select sqrt function from Built in List ");
        FlowEditTransformation.DisplayDataforTransformationFunction_sqrt(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the Result value after you apply sqrt function ");
        browser.end();
    });


});