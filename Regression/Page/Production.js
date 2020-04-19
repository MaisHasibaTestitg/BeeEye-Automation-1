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
        .getText(ProductionSelectors.elements.FlowNameInFlowStep, function (result) {
            FlowName = result.value;
        })

        //get pause value
        .pause(configrationReader.getPauseValue());
}
//select exp in Trained Model in Deploy Flow wizard
exports.TrainedModel = (browser) => {
    browser
        //wait the body to be loadded
        .waitForElementVisible('body', configrationReader.getPeriod()) // Wait till page loads
        .assert.elementPresent(ProductionSelectors.elements.NextButton, 'The assertion failed because Next step button was not display in Deploy flow wizard')
        .click(ProductionSelectors.elements.NextButton)
        .assert.elementPresent(ProductionSelectors.elements.FirstExpInTrainedModel, 'The assertion failed because there is no Experiment for the selected flow')
        .assert.not.elementPresent(ProductionSelectors.elements.NextButtonDisabled, 'The assertion failed because Next step button was still disbled eventhough you select flow in the wizard')
        .getText(ProductionSelectors.elements.ExpID, function (result) {
            browser
            ExpIdValue = result.value;
        })
        //get pause value
        .pause(configrationReader.getPauseValue());
}

//Verify that the test was succeeded 
exports.TestStep = (browser) => {
    browser
        //wait the body to be loadded
        .waitForElementVisible('body', configrationReader.getPeriod()) // Wait till page loads
        .assert.elementPresent(ProductionSelectors.elements.NextButton, 'The assertion failed because Next step button was not display in Deploy flow wizard')
        .click(ProductionSelectors.elements.NextButton)
        .assert.elementPresent(ProductionSelectors.elements.TestWrap, 'The assertion failed because Test wrap was not display in Test step to see the result of the test')
        .getText(ProductionSelectors.elements.TestWrap, function (result) {
            browser
                .assert.equal(result.value, 'TEST SUCCEEDED', 'The assertion failed because Test was not Succeeded')
                .pause(configrationReader.getPauseValue())
        })
        .assert.elementPresent(ProductionSelectors.elements.NumOfRecordsFailedIntestStep, 'The assertion failed because the number of Records failed was not displayed in Test step')

        .getText(ProductionSelectors.elements.NumOfRecordsFailedIntestStep, function (result) {
            browser
                .assert.equal(result.value, '0 records failed', 'The assertion failed because there is a record failed in Test step')
                .pause(configrationReader.getPauseValue())
        })
        .assert.elementPresent(ProductionSelectors.elements.ReTestButton, 'The assertion failed because the Re-Test button was not displayed in Test Step')
        .click(ProductionSelectors.elements.ReTestButton)
        //verify that after you click on Re-Test Button the test status was succeeded
        .assert.elementPresent(ProductionSelectors.elements.TestWrap, 'The assertion failed because Test wrap was not display in Test step to see the result of the test')
        .getText(ProductionSelectors.elements.TestWrap, function (result) {
            browser
                .assert.equal(result.value, 'TEST SUCCEEDED', 'The assertion failed because Test was not Succeeded')
                .pause(configrationReader.getPauseValue())

        })
        .assert.elementPresent(ProductionSelectors.elements.NumOfRecordsFailedIntestStep, 'The assertion failed because the number of Records failed was not displayed in Test step')
        .getText(ProductionSelectors.elements.NumOfRecordsFailedIntestStep, function (result) {
            browser
                .assert.equal(result.value, '0 records failed', 'The assertion failed because there is a record failed in Test step')
                .pause(configrationReader.getPauseValue())

        })
        .assert.not.elementPresent(ProductionSelectors.elements.NextButtonDisabled, 'The assertion failed because Next step button was still disbled eventhough you select flow in the wizard')
        //get pause value
        .pause(configrationReader.getPauseValue());
}

//Verify the data in Review Model for Deployment and Approve
exports.ApprovalStep = (browser) => {
    browser
        //wait the body to be loadded
        .waitForElementVisible('body', configrationReader.getPeriod()) // Wait till page loads
        .assert.elementPresent(ProductionSelectors.elements.NextButton, 'The assertion failed because Next step button was not display in Deploy flow wizard')
        .click(ProductionSelectors.elements.NextButton)
        .pause(configrationReader.getDelayValue())
        .assert.elementPresent(ProductionSelectors.elements.PrevButton, 'The assertion failed because the Previous was not displayed')
        .assert.elementPresent(ProductionSelectors.elements.ExpIdInApprovalStep, 'The assertion failed because the Exp Id was not displayed')
        .getText(ProductionSelectors.elements.ExpIdInApprovalStep, function (result1) {
            ExpIdValueInApprovalStep = result1.value;
        })

        .perform(function () {
            browser
            ExpIdValueAfterSplit = ExpIdValueInApprovalStep.split(": ")
            console.log('The Exp Id Value In Approval Step is : ' + ExpIdValueAfterSplit[1])
            if (ExpIdValue && ExpIdValueAfterSplit[1]) {
                console.log('The Exp ID from Trained Model: ' + ExpIdValue)
                console.log('The Exp ID from Approval Step: ' + ExpIdValueAfterSplit[1])
                console.log('The Experiment ID selected for the flow selected was display in Approval Step')
            } else {
                console.log('The Experiment ID selected for the flow selected was not display in Approval Step and that means sth is wrong')
            }
        })

        //get pause value
        .pause(configrationReader.getPauseValue());
}
//Verify the deployed flow is displayed in production tab
exports.FinishDeployFlow = (browser) => {
    browser
        //wait the body to be loadded
        .waitForElementVisible('body', configrationReader.getPeriod()) // Wait till page loads
        .assert.elementPresent(ProductionSelectors.elements.FinishButton, 'The assertion failed because Finish button was not display in Deploy flow wizard')
        .click(ProductionSelectors.elements.FinishButton)
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(ProductionSelectors.elements.SearchbyFlowNameInProdPage, 'The assertion failed because the search field was not display in the Production Page')
        .perform(function () {
            browser
                .setValue(ProductionSelectors.elements.SearchbyFlowNameInProdPage, FlowName) // send values
                .assert.elementPresent(ProductionSelectors.elements.ProductionCard, 'The assertion failed because the Production card was not display in the Production Page')
                .assert.elementPresent(ProductionSelectors.elements.ProductionCardName, 'The assertion failed because the Production Card Name Field was not display on Production Card in the Production Page')
                .assert.containsText(ProductionSelectors.elements.ProductionCardName, FlowName, 'The assertion failed because the Production card name field was not contain the selected flow')

        })
        //get pause value
        .pause(configrationReader.getPauseValue());
}