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

//Click "+ Deploy flow" button 
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

//Wizard
exports.Wizard = (browser) => {
    browser
        //wait the body to be loadded
        .waitForElementVisible('body', configrationReader.getPeriod()) // Wait till page loads
        //check the Logo if it is display
        .assert.elementPresent(ProductionSelectors.elements.ExperimentColumnInDeployWizard, 'The assertion failed because the Experiment column was not displayed in Deploy Flow Wizard')
        .getText(ProductionSelectors.elements.FirstElementInExpColumn, function (result) {
            browser
            Firstvalue = result.value;
          })
            .perform(function() {
              browser
              if(Firstvalue>0)
              {
                  console.log('The Flow has an experiment')
              }
              else {
                  console.log('The flow has not had an experiment and it must not display in Deploy Wizard')
              }
           browser.pause(configrationReader.getPauseValue())
            })
        //get pause value
        .pause(configrationReader.getPauseValue());
}
