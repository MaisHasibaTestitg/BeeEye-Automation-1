const loginPage = require("../../Page/login");
const Flows = require("../../Page/Flows");
const title = require("../../Page/Title");
const FlowEditDS = require("../../Page/FlowEditDS");
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

    //Verify user is navigated to the last confguring step for the selected flow
    it('Verify user is navigated to the last confguring step for the selected flow', function (browser) {
        setup.logTestDetails(this, "Try to Verify user is navigated to the last confguring step for the selected flow")
        Flows.CreateNewFlow(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new Flow");
        Flows.CheckBackButton(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new flow Page after you create a new flow to verify that Flow name was displayed on the back button");
        FlowEditDS.LastConfiguringStep(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the last confguring step for the selected flow");
        FlowEditDS.SearchOnSpecificFlowName(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the last confguring step for the selected flow after you search on this flow");
        browser.end();
    });

    //Upload CSV file to not new flow
    it('Verify Upload CSV file function is working as expected', function (browser) {
        setup.logTestDetails(this, "Try to Verify Uploading CSV file function is working as expected")
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
        browser.end();
    });

    //Select a new Label
    it('Verify Selecting a new Label', function (browser) {
        setup.logTestDetails(this, "Try to Verify Select a new Label")
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
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you Select a new Label for the selected flow");
        browser.end();
    });

    //Run the Data Source
    it('Run the Data Source', function (browser) {
        setup.logTestDetails(this, "Try to Run the Data Source")
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
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you Select a new Label for the selected flow");
        Flows.RunDataSources(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you Run the Data Source");
        browser.end();
    });

    //Verify no errors displayed in the log file
    it('Verify no errors displayed in the log file', function (browser) {
        setup.logTestDetails(this, "Try to Verify no errors displayed in the log file")
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
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you Select a new Label for the selected flow");
        Flows.RunDataSources(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you Run the Data Source");
        Flows.VerifyTheLogFile(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the log file with no errors");
        browser.end();
    });

    //Select label with more than 2 values - show error message
    it('Verify the error message was displayed when you select not valid Label', function (browser) {
        setup.logTestDetails(this, " Try to verify the error message was displayed when you select not valid Label")
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
        Flows.SelectNotValidLabel(browser)
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you select not valid Label");
        browser.end();
    });

    //Verify Data Sources section is display as expected
    it('Verify Data Sources section is display as expected', function (browser) {
        setup.logTestDetails(this, " Try to verify the Data Sources section is display as expected After you Upload File for the Flow")
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
        Flows.VerifyDatasourceSection(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for Data Sources section after you Upload File to the Selected Flow");
        browser.end();
    });


    //Preview data - search by feature name is working as expected 
    it('Verify that search by feature name is working as expected ', function (browser) {
        setup.logTestDetails(this, " Try to verify that the search by feature name is working as expected After you Upload File for the Flow")
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
        Flows.SearchByfeatureName(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the result After you search by feature name in Preview Data section");
        browser.end();
    });

    //Check if Data are displayed in Columns tab
    it('Verify if Data are displayed in Columns tab ', function (browser) {
        setup.logTestDetails(this, " Try to verify if Data are displayed in Columns tab")
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
        Flows.CheckColumnsTab(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the Data that are displayed in Columns tab");
        browser.end();
    });

    //Check if search by Column is working as expected in columns tab
    it('Verify that search by Column is working as expected in Columns tab ', function (browser) {
        setup.logTestDetails(this, " Try to verify if search by Column is working as expected in Columns tab ")
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
        Flows.SearchByFeatureNameInColumnTab(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you search by Column in Columns tab");
        browser.end();
    });

    //Check if Data are displayed in Statistics tab
    it('Verify if Data are displayed in Statistics tab ', function (browser) {
        setup.logTestDetails(this, " Try to verify if Data are displayed in Statistics tab")
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
        Flows.CheckStatisticsTab(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for Statistics tab");
        browser.end();
    });

    //Check if search by feature name is working as expected in Statistics tab
    it('Verify that search by feature name is working as expected in in Statistics tab', function (browser) {
        setup.logTestDetails(this, "Try to verify if search by feature name is working as expected in Statistics tab ")
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
        Flows.SearchByFeatureNameInStatisticsTab(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you search by feature name in Statistics tab");
        browser.end();
    });

    //Delete Column
    it('Verify if Delete Column from Columns Tab is done correctly', function (browser) {
        setup.logTestDetails(this, "Try to Delete Column from Columns Tab then Verify that this column will no longer be in the Data Panel")
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
        Flows.DeleteColumn(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot in Preview Data Tab after you delete the column from Columns Tab");
        browser.end();
    });

    //Add Another CSV File
    it('Verify if Add Another CSV File is done correctly', function (browser) {
        setup.logTestDetails(this, "Try to add another CSV file")
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
        Flows.AddAnotherCSVFile(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after uploading Second CSV File for the selected Flow");
        Flows.SelectJoinValue(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you Select Join value");
        browser.end();
    });


    //Add invalid CSV file and verify the error 
    it('Upload File : The upload file extension is not CSV', function (browser) {
        setup.logTestDetails(this, " Try to test When The upload file extension is not CSV")
        Flows.CreateNewFlow(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new Flow");
        Flows.CheckBackButton(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new flow Page after you create a new flow to verify that Flow name was displayed on the back button");
        FlowEditDS.LastConfiguringStep(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the last confguring step for the selected flow");
        FlowEditDS.SearchOnSpecificFlowName(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the last confguring step for the selected flow after you search on this flow");
        Flows.ExtensionOfTheFileUploaded(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot When The upload file extension is not CSV");
        browser.end();
    });


    //Remove all datasets
    it('Verify if Delete All Data Sources are done correctly', function (browser) {
        setup.logTestDetails(this, " Try to test When The upload file extension is not CSV")
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
        Flows.AddAnotherCSVFile(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after uploading Second CSV File for the selected Flow");
        Flows.SelectJoinValue(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you select the Join Value for the selected Flow");
        Flows.DeleteAllDataSource(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you delete All data sources");
        browser.end();
    });

});
