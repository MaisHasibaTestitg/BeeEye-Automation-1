const loginPage = require("../../Page/login");
const Flows = require("../../Page/Flows");
const title = require("../../Page/Title");
const FlowEditDS = require("../../Page/FlowEditDS");
const FlowEditTransformation = require("../../Page/FlowEditTransformation");
const FlowEditDataExplorationSelectors = require("../../Selectors/FlowEditDataExplorationSelectors");
const FlowEditDataExploration = require("../../Page/FlowEditDataExploration");
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
describe('Flow Edit - Data exploration : Verify the Feature Analysis and Transformed Data', function () {

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
    //Verify that export button is displayed and no errors displayed after exporting 
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
        FlowEditDataExploration.Exportbutton(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you click on export button ");
        FlowEditTransformation.CheckLogWindow(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the Logs Window after you click on export button ");
        FlowEditDataExploration.Pagination(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the Pagination wrapper in Feature List Page");
        FlowEditDataExploration.SortColumn(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you click on sort icon for the Mean column");
        FlowEditDataExploration.SearchInFeatureList(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you Search on Feature Name In Feature List Tab");
        FlowEditDataExploration.FeatureAnalysis(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you navigate to Feature Analysis Tab");
        FlowEditDataExploration.SelectFeatureInFeatureAnalysis(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the Result after you select Feature In Feature Analysis");
        FlowEditDataExploration.FilterInFeatureAnalysis(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you enter the Query in Filter Query");
        FlowEditDataExploration.ApplyFilter(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you apply the filter in Feature Analysis");
        browser.end();
    });

//Data Visualization Tab 
it(' Flow Edit - Data exploration : Data Visualization ', function (browser) {
    setup.logTestDetails(this, "Try to Verify That Top features and Correlation heatmap tables are loaded when selected ")
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
    FlowEditDataExploration.DataVisualization(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you navigate to Data Visualization Tab");
    FlowEditDataExploration.TopFeatures(browser); 
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you select Top Features Radio button");
   FlowEditDataExploration.CorrelationHeatmap(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you select Correlation Heatmap Radio button");

    browser.end();
});



});