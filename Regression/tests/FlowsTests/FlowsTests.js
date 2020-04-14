const loginPage = require("../../Page/login");
const Flows = require("../../Page/Flows");
const title = require("../../Page/Title");
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


describe('Flows Page : Test if Create new flow, Edit flow, Delete flow and check if the flow card display correctly', function () {
  before(function (browser, done) {
    browser.waitForElementVisible('body', configrationReader.getPeriod())
    done();
  });

  after(function (browser, done) {
    browser.end(function () {
      browser.waitForElementVisible('body', configrationReader.getPeriod())
      console.log("End Browser");
      done();
    });
  });

  beforeEach(function (browser, done) {
    browser.waitForElementVisible('body', configrationReader.getPeriod())
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

  //New flow
  it('Create New Flow', function (browser) {

    //setup.logTestDetails(this, "Try to Create New Flow")
    Flows.CreateNewFlow(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new Flow");
    Flows.CheckBackButton(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new flow Page after you create a new flow to verify that Flow name was displayed on the back button");
    browser.end();
  });


  //Upload File to new Flow
  it('Upload File : Uploading File is successfully', function (browser) {
    setup.logTestDetails(this, " Try to test if Upload file is successfully ")
    Flows.CreateNewFlow(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new Flow");
    Flows.CheckBackButton(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new flow Page after you create a new flow to verify that Flow name was displayed on the back button");
    Flows.UploadFile(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after uploading File is successfully");
    browser.end();
  });





  //Edit Flow
  it('Edit Flow', function (browser) {
    setup.logTestDetails(this, "Try to Edit the Flow ")
    Flows.SortByDateCreated(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the Date create sort Ascending");
    Flows.SortByDateCreated(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the Date create sort Descending");
    Flows.EditFlow(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for Edit the Flow");
    browser.end();

  });

  //Delete Flow 
  it('Delete Flow', function (browser) {
    setup.logTestDetails(this, "Try to Delete the flow")
    Flows.SortByDateCreated(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the Date create sort Ascending");
    Flows.SortByDateCreated(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the Date create sort Descending");
    Flows.DeleteFlow(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for Delete the flow");
    browser.end();


  });


  //Card in the Flows Page
  it('Card in Flows Page ', function (browser) {
    setup.logTestDetails(this, "Try to test if the flow card display correctly or not")
    Flows.FlowCard(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the flow card display in FLOWS Page");
    browser.end();


  });


  //Sort by Name
  it('Sort by Name', function (browser) {
    setup.logTestDetails(this, " Try to test if sort Sort by Name process works well ")
    Flows.SortByName(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the Name sort Descending");
    Flows.SortByName(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the Name sort Ascending");

    browser.end();
  });

  //sort by Gini
  it('Sort by Gini', function (browser) {
    setup.logTestDetails(this, " Try to test if Sort by Gini process works well ")
    Flows.SortByGini(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the Gini sort Ascending");
    Flows.SortByGini(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the Gini sort Descending");
    browser.end();
  });

  //Sort by Date created
  it('Sort by Date created', function (browser) {
    setup.logTestDetails(this, " Try to test if Sort by Date created process works well ")
    Flows.SortByDateCreated(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the Date create sort Ascending");
    Flows.SortByDateCreated(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the Date create sort Descending");
    browser.end();
  });

  //No File Chosen
  it('Upload File : No File Chosen', function (browser) {
    setup.logTestDetails(this, "When No file was chosen ")
    Flows.CreateNewFlow(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new Flow");
    Flows.CheckBackButton(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new flow Page after you create a new flow to verify that Flow name was displayed on the back button");
    Flows.NoFileChosen(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot When No file was chosen");

    browser.end();
  });

  //Upload File extension is not CSV
  it('Upload File : The upload file extension is not CSV', function (browser) {
    setup.logTestDetails(this, " Try to test When The upload file extension is not CSV")
    Flows.CreateNewFlow(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new Flow");
    Flows.CheckBackButton(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new flow Page after you create a new flow to verify that Flow name was displayed on the back button");
    Flows.ExtensionOfTheFileUploaded(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot When The upload file extension is not CSV");
    browser.end();
  });



  //Check after You upload the file, if File Information section have the correct data and check Data if are display in Preview Data section
  it('Upload File : Check The data after you upload the file', function (browser) {
    setup.logTestDetails(this, " Try to heck The data after you upload the file")
    Flows.CreateNewFlow(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new Flow");
    Flows.CheckBackButton(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new flow Page after you create a new flow to verify that Flow name was displayed on the back button");
    Flows.UploadFile(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after uploading File is successfully");
    Flows.CheckDataAfterYouUploadFile(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the File Information Section after you upload the file");
    browser.end();
  });

  //Check two cases once when you select valid label and another one select not valid label
  it('Valid Label : Check when you select valid label ', function (browser) {
    setup.logTestDetails(this, " Try to Check when you select valid label")
    Flows.CreateNewFlow(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new Flow");
    Flows.CheckBackButton(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new flow Page after you create a new flow to verify that Flow name was displayed on the back button");
    Flows.UploadFile(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after uploading File is successfully");
    Flows.SelectValidLabel(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you select valid label");
    browser.end();
  });

  it('Not Valid Label : Check when you select not valid label', function (browser) {
    setup.logTestDetails(this, " Try to Check when you select not valid label")
    Flows.CreateNewFlow(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new Flow");
    Flows.CheckBackButton(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new flow Page after you create a new flow to verify that Flow name was displayed on the back button");
    Flows.UploadFile(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after uploading File is successfully");
    Flows.SelectNotValidLabel(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you select not valid label");

    browser.end();
  });

  //Run DataSources
  it('Run DataSources', function (browser) {
    setup.logTestDetails(this, " Try to Run DataSources after you upload correct file and select valid label")
    Flows.CreateNewFlow(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new Flow");
    Flows.CheckBackButton(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new flow Page after you create a new flow to verify that Flow name was displayed on the back button");
    Flows.UploadFile(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after uploading File is successfully");
    Flows.SelectValidLabel(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you select valid label");
    Flows.RunDataSources(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you Click on DataSources butto to run it ");
    browser.end();
  });



  //Log File without error
  it('Log File without error', function (browser) {
    setup.logTestDetails(this, " Try to verify no errors display in the log file")
    Flows.CreateNewFlow(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new Flow");
    Flows.CheckBackButton(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new flow Page after you create a new flow to verify that Flow name was displayed on the back button");
    Flows.UploadFile(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after uploading File is successfully");
    Flows.SelectValidLabel(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you select valid label");
    Flows.RunDataSources(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you Click on DataSources butto to run it ");
    Flows.VerifyTheLogFile(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you Run DataSources and no errors are display in Log File");
    browser.end();
  });

  //Verify Data Sources section is display as expected
  it('Verify Data Sources section in Flow Page', function (browser) {
    setup.logTestDetails(this, " Try to verify the Data Sources section is display as expected After you Upload File for the New Flow")
    Flows.CreateNewFlow(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new Flow");
    Flows.CheckBackButton(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new flow Page after you create a new flow to verify that Flow name was displayed on the back button");
    Flows.UploadFile(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after uploading File is successfully");
    Flows.VerifyDatasourceSection(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for Data Sources section after you Upload File to the new Flow");
    browser.end();
  });

  //Preview data - search by feature name is working as expected 
  it('Verify that search by feature name is working as expected ', function (browser) {
    setup.logTestDetails(this, " Try to verify that the search by feature name is working as expected After you Upload File for the New Flow")
    Flows.CreateNewFlow(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new Flow");
    Flows.CheckBackButton(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new flow Page after you create a new flow to verify that Flow name was displayed on the back button");
    Flows.UploadFile(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after uploading File is successfully");
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
    Flows.UploadFile(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after uploading File is successfully");
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
    Flows.UploadFile(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after uploading File is successfully");
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
    Flows.UploadFile(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after uploading File is successfully");
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
    Flows.UploadFile(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after uploading File is successfully");
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
    Flows.UploadFile(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after uploading File is successfully");
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
    Flows.UploadFile(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after uploading File is successfully");
    Flows.AddAnotherCSVFile(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you Upload Another CSV File");
    Flows.SelectJoinValue(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you select the Join Value");
    browser.end();
  });


  //Delete CSV File
  it('Verify if Delete the second CSV File is done correctly', function (browser) {
    setup.logTestDetails(this, "Try to delete the CSV File to verify the quantity of columns in the Data Panel is updated on the left")
    Flows.CreateNewFlow(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new Flow");
    Flows.CheckBackButton(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new flow Page after you create a new flow to verify that Flow name was displayed on the back button");
    Flows.UploadFile(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after uploading File is successfully");
    Flows.AddAnotherCSVFile(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you Upload Another CSV File");
    Flows.SelectJoinValue(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you select the Join Value");
    Flows.DeleteCSVFile(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you delete the second CSV File");
    browser.end();
  });

  //Delete All Data Sources
  it('Verify if Delete All Data Sources are  done correctly', function (browser) {
    setup.logTestDetails(this, "Try to delete All Data Sources ")
    Flows.CreateNewFlow(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new Flow");
    Flows.CheckBackButton(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new flow Page after you create a new flow to verify that Flow name was displayed on the back button");
    Flows.UploadFile(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after uploading File is successfully");
    Flows.AddAnotherCSVFile(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you Upload Another CSV File");
    Flows.SelectJoinValue(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you select the Join Value");
    Flows.DeleteAllDataSource(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you delete the second CSV File");
    browser.end();
  });

  //Flow edit nav header
  it('Verify if Flow edit nav header are navigates you to the correct page', function (browser) {
    setup.logTestDetails(this, "Try to verify if the buttons in Flow edit nav header are navigates you to the correct page")
    Flows.CreateNewFlow(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new Flow");
    Flows.CheckBackButton(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new flow Page after you create a new flow to verify that Flow name was displayed on the back button");
    Flows.IsFlowEditNavHeaderDisplay(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for Flow edit nav header");
    browser.end();
  });
  //Flow name button navigates to flow manager dashboard
  it('Verify if Flow name button navigates to flow manager dashboard page', function (browser) {
    setup.logTestDetails(this, "Try to verify if Flow name button navigates to flow manager dashboard")
    Flows.CreateNewFlow(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new Flow");
    Flows.CheckBackButton(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new flow Page after you create a new flow to verify that Flow name was displayed on the back button");
    Flows.FlowNameButton(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you click on Flow name button in Flow edit nav header");
    browser.end();
  });

  //Transformations button navigates to transformations
  it('Verify if Transformations button navigates to transformations Page', function (browser) {
    setup.logTestDetails(this, "Try to verify if Transformations button navigates to transformations Page")
    Flows.CreateNewFlow(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new Flow");
    Flows.CheckBackButton(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new flow Page after you create a new flow to verify that Flow name was displayed on the back button");
    Flows.TransformationButton(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you click on Transformations button in Flow edit nav header");
    browser.end();
  });



  //AutoFG navigates to AFG
  it('Verify if AutoFG button navigates to AFG page', function (browser) {
    setup.logTestDetails(this, "Try to verify if AutoFG navigates to AFG page")
    Flows.CreateNewFlow(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new Flow");
    Flows.CheckBackButton(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new flow Page after you create a new flow to verify that Flow name was displayed on the back button");
    Flows.UploadFile(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after uploading File is successfully");
    Flows.SelectValidLabel(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you select valid label");
    Flows.RunDataSources(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you Click on DataSources butto to run it ");
    Flows.AutoFGButton(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you click on AFG button in Flow edit nav header");
    browser.end();
  });


  //Experiments navigates to experiments
  it('Verify if Experiments button navigates to experiments page', function (browser) {
    setup.logTestDetails(this, "Try to verify if Experiments button navigates to experiments page")
    Flows.CreateNewFlow(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new Flow");
    Flows.CheckBackButton(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new flow Page after you create a new flow to verify that Flow name was displayed on the back button");
    Flows.UploadFile(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after uploading File is successfully");
    Flows.AddAnotherCSVFile(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you Upload Another CSV File");
    Flows.SelectJoinValue(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you click on experiments button in Flow edit nav header");
    browser.end();
  });


  //Bell button opens the messages dialog
  it('Verify if Bell button opens the messages dialog', function (browser) {
    setup.logTestDetails(this, "Try to verify if Bell button opens the messages dialog")
    Flows.CreateNewFlow(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new Flow");
    Flows.CheckBackButton(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new flow Page after you create a new flow to verify that Flow name was displayed on the back button");
    Flows.BellButton(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you click on Bell button in Flow edit Header");
    browser.end();
  });

  //Stop flow is disabled for new flow (tool tip explains why)
  it('Verify if Stop flow is disabled for new flow', function (browser) {
    setup.logTestDetails(this, "Try to verify if Run flow is disabled for new flow")
    Flows.CreateNewFlow(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new Flow");
    Flows.CheckBackButton(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new flow Page after you create a new flow to verify that Flow name was displayed on the back button");
    //Go to StopFlow function immediatly afetr you create new flow to check that the button is disabled for the new flow
    Flows.StopFlow(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the Stop Flow Button when it is disabled in Flow Edit Header after you create new flow");
    browser.end();
  });


  //Run flow is disabled for new flow (tool tip explains why)
  it('Verify if Run flow is disabled for new flow', function (browser) {
    setup.logTestDetails(this, "Try to verify if Run flow is disabled for new flow")
    Flows.CreateNewFlow(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new Flow");
    Flows.CheckBackButton(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new flow Page after you create a new flow to verify that Flow name was displayed on the back button");
    //Go to RunFlow function immediatly afetr you create new flow to check that the button is disabled for the new flow
    Flows.RunFlow(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the tool tip displayed after you clcik on Run Flow button when you create new flow");

  });

});