//This code to Test if Logo is display or not , and check every Link in this Navigation Bar if navigates you the correct screen
const MainNavigationBarSelectors = require("../Selectors/MainNavigationBarSelectors");
const DashboardSelector = require("../Selectors/DashboardSelector");
const FlowsSelector = require("../Selectors/FlowsSelector");
const {
  assert
} = require('chai').assert
const {
  expect
} = require('chai')
const setup = require("../utils/setup");
const configrationReader = require("../utils/configrationReader");

//Check Logo and Main Navigation Bar
exports.MainNavigationBar = (browser) => {
  browser
    //wait the body to be loadded
    .waitForElementVisible('body', configrationReader.getPeriod()) // Wait till page loads
    //check the Logo if it is display
    .waitForElementVisible(MainNavigationBarSelectors.elements.Logo, 'Test is failed because the logo was not found in the Main Navigation Bar')
    .assert.elementPresent(MainNavigationBarSelectors.elements.Logo, 'The assertion failed because the logo was not found in the Main Navigation Bar')

    //Check if the Main Navigation Bar is display or not
    .waitForElementVisible(MainNavigationBarSelectors.elements.NavigationBar, 'Test is failed because the Navigation Bar was not found in the site')
    .assert.elementPresent(MainNavigationBarSelectors.elements.NavigationBar, 'The assertion failed because the Navigation Bar was not found in the site')
    //get pause
    .pause(configrationReader.getPauseValue());
}

//Check the DASHBOARD Link in Main Navigation Bar if it takes you to the correct Page (Dashboard Page)
exports.DashboardNavigation = (browser) => {
  browser
    //wait the body to be loadded
    .waitForElementVisible('body', configrationReader.getPeriod()) // Wait till page loads
    //Check if Dashboard Link is display in Main Navigation Bar
    .waitForElementVisible(MainNavigationBarSelectors.elements.Dashboard, 'Test is failed because the Dashboard Link was not found in the Main Navigation Bar')
    .assert.elementPresent(MainNavigationBarSelectors.elements.Dashboard, 'The assertion failed because the Dashboard Link was not found in the Main Navigation Bar')
    //Check what happen after you click on Dashboard link in the Navigation Bar
    .click(MainNavigationBarSelectors.elements.Dashboard, function (result) {
      browser
        //Here to make sure that you are in Dashboard Page when you click on Dashboard Link by check if Small Card is display or not
        .waitForElementVisible(DashboardSelector.elements.SmallCardForBestFlow, 'Test is failed After you click on Dashboard Link because the link does not take you to Dashboard Page')
        .assert.elementPresent(DashboardSelector.elements.SmallCardForBestFlow, 'The assertion failed After you click on Dashboard Link because the link does not take you to Dashboard Page')
    })
    //get pause
    .pause(configrationReader.getPauseValue());
}

//Check the FLOWS Link in Main Navigation Bar if it takes you to the correct Page (FLOWS Page)
exports.FlowsNavigation = (browser) => {
  browser
    //wait the body to be loadded
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    //Check if Flows Link is display in Main Navigation Bar
    .waitForElementVisible(FlowsSelector.elements.NavFlows, 'Test is failed because the Flows Link was not found in the Main Navigation Bar')
    .assert.elementPresent(FlowsSelector.elements.NavFlows, 'The assertion failed because the Flows Link was not found in the Main Navigation Bar')
    //Check what happen after you click on Flows link in the Navigation Bar
    .click(FlowsSelector.elements.NavFlows, function (result) {
      browser
        //Here to make sure that you are in Flows Page when you click on Flows Link by check if Flow Title is display or not
        .waitForElementVisible(MainNavigationBarSelectors.elements.FlowTitle, 'Test is failed After you click on Flows Link because the link does not take you to Flows Page')
        .assert.elementPresent(MainNavigationBarSelectors.elements.FlowTitle, 'The assertion failed After you click on Flows Link because the link does not take you to Flows Page')
    })
    //get pause
    .pause(configrationReader.getPauseValue());
}

//Check the PRODUCTION Link in Main Navigation Bar if it takes you to the correct Page (PRODUCTION Page)
exports.ProductionNavigation = (browser) => {
  browser
    //wait the body to be loadded
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    //Check if Production Link is display in Main Navigation Bar
    .waitForElementVisible(MainNavigationBarSelectors.elements.Production, 'Test is failed because the Production Link was not found in the Main Navigation Bar')
    .assert.elementPresent(MainNavigationBarSelectors.elements.Production, 'The assertion failed because the Production Link was not found in the Main Navigation Bar')
    //Check what happen after you click on Production link in the Navigation Bar
    .click(MainNavigationBarSelectors.elements.Production, function (result) {
      browser
        //Here to make sure that you are in Production Page when you click on Production Link by check if product count is display or not
        .waitForElementVisible(MainNavigationBarSelectors.elements.ProductsCount, 'Test is failed After you click on Production Link because the link does not take you to Production Page')
        .assert.elementPresent(MainNavigationBarSelectors.elements.ProductsCount, 'The assertion failed After you click on Production Link because the link does not take you to Production Page')
    })
    //get pause
    .pause(configrationReader.getPauseValue());
}

//EXPLAIN
exports.ExplainNavigation = (browser) => {
  browser
    //wait the body to be loadded
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    //Check if Explain Link is display in Main Navigation Bar
    .waitForElementVisible(MainNavigationBarSelectors.elements.Explain, 'Test is failed because the Explain Link was not found in the Main Navigation Bar')
    .assert.elementPresent(MainNavigationBarSelectors.elements.Explain, 'The assertion failed because the Explain Link was not found in the Main Navigation Bar')
    //Check what happen after you click on Explain link in the Navigation Bar
    .click(MainNavigationBarSelectors.elements.Explain, function (result) {
      browser
        //Here to make sure that you are in Explain Page when you click on Explain Link by check if Explain Wrapper is display or not
        .waitForElementVisible(MainNavigationBarSelectors.elements.ExplainWrapper, 'Test is failed After you click on Explain Link because the link does not take you to Explain Page')
        .assert.elementPresent(MainNavigationBarSelectors.elements.ExplainWrapper, 'The assertion failed After you click on Explain Link because the link does not take you to Explain Page')
    })
    //get pause
    .pause(configrationReader.getPauseValue());
}