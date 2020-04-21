const Production = require("../../Page/Production");
const Flows = require("../../Page/Flows");
const login = require("../../Page/login");
const title = require("../../Page/Title");
const Experiments = require("../../Page/Experiments");
const FlowEditTransformation = require("../../Page/FlowEditTransformation");
const Explain = require("../../Page/Explain");
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
        logReport.log(this, "Test Cases for End To End Testing");
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
    it('End To End Testing : Create new flow , Upload file and Create transformation function', function (browser) {
        setup.logTestDetails(this, "End To End Testing : Create new flow , Upload file and Create transformation function")
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
        browser.end();
    });

    //Create Experiment, Deploy the selected flow, Upload Score File ,Go to Explain Page to see the Result for Records Prediction
    it('End To End Testing : Create Experiment, Deploy the selected flow, Upload Score File ,Go to Explain Page to see the Result for Records Prediction', function (browser) {
        setup.logTestDetails(this, "End To End Testing :  Create Experiment, Deploy the selected flow, Upload Score File ,Go to Explain Page to see the Result for Records Prediction")
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
        Experiments.CreateExperiments(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you click on Plus icon to create new Experiment");
        Experiments.SelectExpModel(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you select the Experiment Model from the List ");
        Experiments.SubmitExpModel(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you select the feature and Submit the Experiment Model ");
        Experiments.RunExpAndChecktheResult(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the Result displayed after you Run the Flow");
        Production.ProductionPage(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you click on Production Tab");
        Production.DeployFlow(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you click on New Deploy button");
        Production.CheckNumberOfExp(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the wizard after verifying that the displayed flow has at least one experiment");
        Production.SelectFlow(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you select the flow in Deploy wizard");
        Production.TrainedModel(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you click on Next button in Flow Step and select Experiment in Trained Model");
        Production.TestStep(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you click on Next button in Trained Model Step and Click on Re-Test button to verify the test status");
        Production.ApprovalStep(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you click on Next button in Test Step and verify if the data was displayed correctly in Approval Step");
        Production.FinishDeployFlow(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you click on Finish button in Approval Step and verify if the selected flow was deployed successfully");
        Production.ScoreFile(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you upload score file");
        Production.Requests(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you click on Requests button");
        Production.ExplainPage(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you click on Explain button in Main Navigaton Bar");
        Production.SelectFlowAndExp(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you select the Flow ID and Exp ID");
        Production.ResultInModelTab(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the Result In Model Tab for the selected Flow ID and Exp ID");
        Production.RecordsPrediction(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the Records Prediction after you enter the Record ID");
        browser.end();
    });
});