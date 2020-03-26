const DashboardPage = require("../../Page/Dashboard");
const Flows = require("../../Page/Flows");
const login = require("../../Page/login");
const title = require("../../Page/Title");
const Experiments = require("../../Page/Experiments"); 
const FlowEditTransformation = require("../../Page/FlowEditTransformation");

const screenShotUtils = require("../../utils/screenShotUtils");
const logReport = require("mochawesome-screenshots/logReport");
const setup = require("../../utils/setup");
const {
    assert
} = require('chai')
const {
    expect
} = require('chai')

describe('End To End Testing : ', function () {

    before(function (browser, done) {
        logReport.log(this, "Test Cases for Dashboard Page");
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
        login.LoginWithValidInformation(browser);
        logReport.log(this, "Check The title of the Page");
        title.getTitle(browser);
        console.log("before each");
        done();
    });

    afterEach(function (browser, done) {
        
        done();
    });

    //End To End Testing
    it('End To End Testing', function (browser) {
        setup.logTestDetails(this, "End To End Testing")
        Flows.CreateNewFlow(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you create a new flow");
        Flows.CheckBackButton(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new flow Page after you create a new flow");
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
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the Logs after you run the Transformation ");
        FlowEditTransformation.CreateTransformationFunction(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you click on Add Transformation Button");
        FlowEditTransformation.SelectTransformationFunction(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you Select Built In Type function from the list");
        FlowEditTransformation.DisplayDataforTransformationFunction(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you create transformation function and Run Transformation to see the result ");
        Experiments.CreateExperiments(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you click on Plus icon to create new Experiment");
        Experiments.SelectExpModel(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you select the Experiment Model from the List ");
        Experiments.SubmitExpModel(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you select the feature and Submit the Experiment Model ");
        Experiments.RunExpAndChecktheResult(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the Result displayed after you Run the Flow");
        browser.end();
    });

    
});
