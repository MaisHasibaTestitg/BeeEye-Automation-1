const loginPage = require("../../Page/login");
const title = require("../../Page/Title");
const FlowEditTransformation = require("../../Page/FlowEditTransformation");
const Flows = require("../../Page/Flows");
const screenShotUtils = require("../../utils/screenShotUtils");
const logReport = require("mochawesome-screenshots/logReport");
const setup = require("../../utils/setup");
const configrationReader = require("../../utils/configrationReader");
const FlowEditDS = require("../../Page/FlowEditDS");
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
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new flow Page after you create a new flow to verify that Flow name was displayed on the back button");
            FlowEditDS.LastConfiguringStep(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the last confguring step for the selected flow");
            FlowEditDS.SearchOnSpecificFlowName(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the last confguring step for the selected flow after you search on this flow");
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
            browser.end();
        });

        //Abs - run works fine
        it('Run Absolute transformation function and verify if it works fine', function (browser) {
            setup.logTestDetails(this, "Try to Run Absolute transformation function and verify if it works fine")
            Flows.CreateNewFlow(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new Flow");
            Flows.CheckBackButton(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new flow Page after you create a new flow to verify that Flow name was displayed on the back button");
            FlowEditDS.LastConfiguringStep(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the last confguring step for the selected flow");
            FlowEditDS.SearchOnSpecificFlowName(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the last confguring step for the selected flow after you search on this flow");
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
            browser.end();
        });
        
        //sqrt  - run works fine
        it('Run Sqrt transformation function and verify if it works fine', function (browser) {
            setup.logTestDetails(this, "Try to Run Sqrt transformation function and verify if it works fine")
            Flows.CreateNewFlow(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new Flow");
            Flows.CheckBackButton(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new flow Page after you create a new flow to verify that Flow name was displayed on the back button");
            FlowEditDS.LastConfiguringStep(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the last confguring step for the selected flow");
            FlowEditDS.SearchOnSpecificFlowName(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the last confguring step for the selected flow after you search on this flow");
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
            //Sqrt function
            FlowEditTransformation.CreateTransformationFunction(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you click on Add Transformation Button");
            FlowEditTransformation.SelectTransformationFunction_sqrt(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you Select sqrt function from Built in List ");
            FlowEditTransformation.DisplayDataforTransformationFunction_sqrt(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the Result value after you apply sqrt function ");
            browser.end();
        });
        
        //Subtraction - run works fine
        it('Run Subtraction transformation function and verify if it works fine', function (browser) {
            setup.logTestDetails(this, "Try to Run Subtraction transformation function and verify if it works fine")
            Flows.CreateNewFlow(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new Flow");
            Flows.CheckBackButton(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new flow Page after you create a new flow to verify that Flow name was displayed on the back button");
            FlowEditDS.LastConfiguringStep(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the last confguring step for the selected flow");
            FlowEditDS.SearchOnSpecificFlowName(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the last confguring step for the selected flow after you search on this flow");
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
            FlowEditTransformation.SelectTransformationFunction(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you Select Built In Type (Subtraction) function from the list");
            FlowEditTransformation.DisplayDataforTransformationFunction(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you create transformation function and Run Transformation to see the result ");
            browser.end();
        });
        //Trans - edit transformation
        it('Trans - edit transformation', function (browser) {
            setup.logTestDetails(this, "Try to edit transformation")
            Flows.CreateNewFlow(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new Flow");
            Flows.CheckBackButton(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new flow Page after you create a new flow to verify that Flow name was displayed on the back button");
            FlowEditDS.LastConfiguringStep(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the last confguring step for the selected flow");
            FlowEditDS.SearchOnSpecificFlowName(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the last confguring step for the selected flow after you search on this flow");
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
            //Create Abs function
            FlowEditTransformation.CreateTransformationFunction(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you click on Add Transformation Button");
            FlowEditTransformation.SelectTransformationFunction_abs(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you Select abs function from Built in List ");
            FlowEditTransformation.DisplayDataforTransformationFunction_abs(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the Result value after you apply Abs function");
            FlowEditTransformation.EditTransformation(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you click on Edit icon");
            FlowEditTransformation.SaveTransformation(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you click on Save transformation");
            FlowEditTransformation.DisplayDataforTransformationFunction_abs(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the Columns Preview Data");
            browser.end();
        });

        //Trans - Delete transformations
        it('Trans - Delete transformation', function (browser) {
            setup.logTestDetails(this, "Try to Delete transformation")
            Flows.CreateNewFlow(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new Flow");
            Flows.CheckBackButton(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new flow Page after you create a new flow to verify that Flow name was displayed on the back button");
            FlowEditDS.LastConfiguringStep(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the last confguring step for the selected flow");
            FlowEditDS.SearchOnSpecificFlowName(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the last confguring step for the selected flow after you search on this flow");
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
            //Create Abs function
            FlowEditTransformation.CreateTransformationFunction(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you click on Add Transformation Button");
            FlowEditTransformation.SelectTransformationFunction_abs(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you Select abs function from Built in List ");
            FlowEditTransformation.DisplayDataforTransformationFunction_abs(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the Result value after you apply Abs function");
            FlowEditTransformation.DeleteTransformation(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you click on Delete icon");
            browser.end();
        });

        //Add Manual Imputation with -1
        it('Manual Imputation with -1', function (browser) {
            setup.logTestDetails(this, "Try to Apply Manual Imputation with -1")
            Flows.CreateNewFlow(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new Flow");
            Flows.CheckBackButton(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new flow Page after you create a new flow to verify that Flow name was displayed on the back button");
            FlowEditDS.LastConfiguringStep(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the last confguring step for the selected flow");
            FlowEditDS.SearchOnSpecificFlowName(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the last confguring step for the selected flow after you search on this flow");
            Flows.UploadFileWithNullValues(browser);
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
            //Create Imputation function
            FlowEditTransformation.CreateTransformationFunction(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you click on Add Transformation Button");
            FlowEditTransformation.AddImputation(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you Select abs function from Built in List ");
            FlowEditTransformation.ImputeWithNegative(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for The Manual Imputation with -1");
            FlowEditTransformation.DisplayDataforTransformationFunction_ImputeWithNegative(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the Result after you apply The Manual Imputation with -1");

            browser.end();
        });

        //Add Manual Imputation with zero
        it('Manual Imputation With Zero', function (browser) {
            setup.logTestDetails(this, "Try to Apply Manual Imputation with zero")
            Flows.CreateNewFlow(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new Flow");
            Flows.CheckBackButton(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new flow Page after you create a new flow to verify that Flow name was displayed on the back button");
            FlowEditDS.LastConfiguringStep(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the last confguring step for the selected flow");
            FlowEditDS.SearchOnSpecificFlowName(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the last confguring step for the selected flow after you search on this flow");
            Flows.UploadFileWithNullValues(browser);
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
            //Create Imputation function
            FlowEditTransformation.CreateTransformationFunction(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you click on Add Transformation Button");
            FlowEditTransformation.AddImputation(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you Select abs function from Built in List ");
            FlowEditTransformation.ImputeWithZero(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for The Manual Imputation with zero");
            FlowEditTransformation.DisplayDataforTransformationFunction_ImputeWithZero(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the Result after you apply The Manual Imputation with zero");

            browser.end();
        });


        
        //Date Split - run works fine
        it('Run Date Split transformation function and verify if it works fine', function (browser) {
            setup.logTestDetails(this, "Try to Run Date Split transformation function and verify if it works fine")
            Flows.CreateNewFlow(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new Flow");
            Flows.CheckBackButton(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new flow Page after you create a new flow to verify that Flow name was displayed on the back button");
            FlowEditDS.LastConfiguringStep(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the last confguring step for the selected flow");
            FlowEditDS.SearchOnSpecificFlowName(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the last confguring step for the selected flow after you search on this flow");
            Flows.UploadFile(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you Upload File to the new flow");
            Flows.SelectValidLabel(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you select a valid Label");
            Flows.AddAnotherCSVFile(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after uploading Second CSV File for the selected Flow");
            Flows.SelectJoinValue(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you Select Join value");
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
            FlowEditTransformation.SelectTransformationFunction_DateSplit(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you Select Date Split function from Built in List ");
            FlowEditTransformation.DisplayDataforTransformationFunction_DateSplit(browser);
            screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the Result value after you apply Date Split function");
            browser.end();
        });


    //Add Manual Imputation with Most frequent
    it('Manual Imputation With Most frequent', function (browser) {
        setup.logTestDetails(this, "Try to Apply Manual Imputation with Most frequent")
        Flows.CreateNewFlow(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new Flow");
        Flows.CheckBackButton(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new flow Page after you create a new flow to verify that Flow name was displayed on the back button");
        FlowEditDS.LastConfiguringStep(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the last confguring step for the selected flow");
        FlowEditDS.SearchOnSpecificFlowName(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the last confguring step for the selected flow after you search on this flow");
        Flows.UploadFileWithNullValues(browser);
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
        //Create Imputation function
        FlowEditTransformation.CreateTransformationFunction(browser);
       screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you click on Add Transformation Button");
        FlowEditTransformation.AddImputation(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you Select abs function from Built in List ");
       FlowEditTransformation.ImputeWithMostFrequent(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for The Manual Imputation with Most frequent");
        FlowEditTransformation.DisplayDataforTransformationFunction_ImputeWithMostFrequent(browser);
       screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the Result after you apply The Manual Imputation with Most frequent");
        browser.end();
    });
   
});
 