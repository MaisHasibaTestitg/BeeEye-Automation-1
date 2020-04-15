//This code to Test if Deploying a flow done correctly or not
const MainNavigationBarSelectors = require("../Selectors/MainNavigationBarSelectors");
const ProductionSelectors = require("../Selectors/ProductionSelectors");

const {
    assert
} = require('chai').assert
const {
    expect
} = require('chai')
const setup = require("../utils/setup");
const configrationReader = require("../utils/configrationReader");

//Navigate to Production Tab 
exports.ProductionPage = (browser) => {
    browser
        //wait the body to be loadded
        .waitForElementVisible('body', configrationReader.getPeriod()) // Wait till page loads
        //check the Logo if it is display
        .assert.elementPresent(MainNavigationBarSelectors.elements.Production, 'The assertion failed because the Production tab was not displayed in Main Navigation Bar')
        .click(MainNavigationBarSelectors.elements.Production)
        .assert.elementPresent(ProductionSelectors.elements.NewDeploybutton, 'The assertion failed because the New Deploy button was not displayed in Production Page')
        .assert.elementPresent(MainNavigationBarSelectors.elements.ProductsCount)
        //get pause value
        .pause(configrationReader.getPauseValue());
}

//Click on "+ Deploy flow" button and verify if the wizard was display or not
exports.DeployFlow = (browser) => {
    browser
        //wait the body to be loadded
        .waitForElementVisible('body', configrationReader.getPeriod()) // Wait till page loads
        //check the Logo if it is display
        .assert.elementPresent(ProductionSelectors.elements.NewDeploybutton, 'The assertion failed because the New Deploy button was not displayed in Production Page')
        .click(ProductionSelectors.elements.NewDeploybutton)
        .assert.elementPresent(ProductionSelectors.elements.DeployFlowWizard, 'The assertion failed after you click on New Deploy button because the Deploy Flow wizard was not displayed')
        //get pause value
        .pause(configrationReader.getPauseValue());
}

//Verify that the displayed flow in Deploy flow wizard has at least  one experiment 
exports.CheckNumberOfExp = (browser) => {
    browser
        //wait the body to be loadded
        .waitForElementVisible('body', configrationReader.getPeriod()) // Wait till page loads
        //check the Logo if it is display
        .assert.elementPresent(ProductionSelectors.elements.ExperimentColumnInDeployWizard, 'The assertion failed because the Experiment column was not displayed in Deploy Flow Wizard')
        .getText(ProductionSelectors.elements.FirstElementInExpColumn, function (result) {
            browser
            Firstvalue = result.value;
        })
        .perform(function () {
            browser
            if (Firstvalue > 0) {
                console.log('The Flow has an experiment')
            } else {
                console.log('The Flow has not had an experiment and it must not display in Deploy Wizard')
            }
            browser.pause(configrationReader.getPauseValue())
        })
        //get pause value
        .pause(configrationReader.getPauseValue());
}

//select flow in in Deploy Flow wizard
exports.SelectFlow = (browser) => {
    browser
        //wait the body to be loadded
        .waitForElementVisible('body', configrationReader.getPeriod()) // Wait till page loads
        .assert.elementPresent(ProductionSelectors.elements.FirstFlowinDeployWizard, 'The assertion failed because there is no flow displayed in the Deploy Wizard')
        .click(ProductionSelectors.elements.FirstFlowinDeployWizard)
        .assert.not.elementPresent(ProductionSelectors.elements.NextButtonDisabled, 'The assertion failed because Next step button was still disbled eventhough you select flow in the wizard')


        //get pause value
        .pause(configrationReader.getPauseValue());
}
//select exp in Trained Model in Deploy Flow wizard
exports.TrainedModel = (browser) => {
    browser
        //wait the body to be loadded
        .waitForElementVisible('body', configrationReader.getPeriod()) // Wait till page loads
        //check the Logo if it is display
        .assert.elementPresent(ProductionSelectors.elements.NextButton, 'The assertion failed because Next step button was not display in Deploy flow wizard')
        .click(ProductionSelectors.elements.NextButton)
        .assert.elementPresent(ProductionSelectors.elements.FirstExpInTrainedModel, 'The assertion failed because there is no Experiment for the selected flow')
        .assert.not.elementPresent(ProductionSelectors.elements.NextButtonDisabled, 'The assertion failed because Next step button was still disbled eventhough you select flow in the wizard')
        //get pause value
        .pause(configrationReader.getPauseValue());
}

//Verify that the test was succeeded 
exports.TestStep = (browser) => {
    browser
        //wait the body to be loadded
        .waitForElementVisible('body', configrationReader.getPeriod()) // Wait till page loads
        //check the Logo if it is display
        .assert.elementPresent(ProductionSelectors.elements.NextButton, 'The assertion failed because Next step button was not display in Deploy flow wizard')
        .click(ProductionSelectors.elements.NextButton)
        .assert.elementPresent(ProductionSelectors.elements.TestWrap, 'The assertion failed because Test wrap was not display in Test step to see the result of the test')
        .assert.containsText(ProductionSelectors.elements.TestWrap, 'Test  succeeded', 'The assertion failed because Test was not Succeeded')
        .assert.elementPresent(ProductionSelectors.elements.NumOfRecordsFailedIntestStep, 'The assertion failed because the number of Records failed was not displayed in Test step')
        .assert.containsText(ProductionSelectors.elements.NumOfRecordsFailedIntestStep,' 0 records failed ','The assertion failed because there is a record failed in Test step')
        .assert.elementPresent(ProductionSelectors.elements.ReTestButton, 'The assertion failed because the Re-Test button was not displayed in Test Step')
        .click(ProductionSelectors.elements.ReTestButton)
        //verify that after you click on Re-Test Button the test status was succeeded
        .assert.containsText(ProductionSelectors.elements.TestWrap, 'Test  succeeded', 'The assertion failed because Test was not Succeeded')
        .assert.elementPresent(ProductionSelectors.elements.NumOfRecordsFailedIntestStep, 'The assertion failed because the number of Records failed was not displayed in Test step')
        .assert.containsText(ProductionSelectors.elements.NumOfRecordsFailedIntestStep,' 0 records failed ','The assertion failed because there is a record failed in Test step')
        //get pause value
        .pause(configrationReader.getPauseValue());
}