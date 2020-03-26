//This Code to create new Experiment
const FlowsSelector = require("../Selectors/FlowsSelector");
const ExperimentsSelector = require("../Selectors/ExperimentsSelector");
const configrationReader = require("../utils/configrationReader");
const {
    assert
} = require('chai').assert
const {
    expect
} = require('chai')


//Create New Experiment
exports.CreateExperiments = (browser) => {
    browser
        //wait the body to be loadded
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        // click on escape to close the Log Window
        .keys(browser.Keys.ESCAPE)
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(FlowsSelector.elements.ExperimentsButton, 'The assertion failed because the Experiment button was not exist in Main Navigation bar')
        .click(FlowsSelector.elements.ExperimentsButton)
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(ExperimentsSelector.elements.CreateExpButton, 'The assertion failed because Create Experiment Button was not exist in Experiment Page')
        .click(ExperimentsSelector.elements.CreateExpButton)
        .pause(configrationReader.getPauseValue())
}

//Select Experiment Model
exports.SelectExpModel = (browser) => {
    browser
        .assert.elementPresent(ExperimentsSelector.elements.MachineLearningModel, 'The assertion failed because Machine Learning Model was not displayed in Experiment type List')
        .click(ExperimentsSelector.elements.MachineLearningModel)
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(ExperimentsSelector.elements.NewExpModal, 'The assertion failed because New Experiment Model was not displayed after you click on Plus icon')
        .pause(configrationReader.getPauseValue())
}

//Submit Experiment Model
exports.SubmitExpModel = (browser) => {
    browser
        .assert.elementPresent(ExperimentsSelector.elements.SecondControllerButton, 'The assertion failed because the Second Controller Button (>>) was not displayed in New Experiment Model')
        .click(ExperimentsSelector.elements.SecondControllerButton)
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(ExperimentsSelector.elements.Submitbutton, 'The assertion failed because Submit button was not displayed in New Experiment Model')
        .click(ExperimentsSelector.elements.Submitbutton)
        .pause(configrationReader.getPauseValue())
}

//Run Flow button to see the Result for the created Experiment
exports.RunExpAndChecktheResult = (browser) => {
    browser
        .assert.elementPresent(ExperimentsSelector.elements.ExperimentsCard, 'The assertion failed because the Experiment Card was not displayed in Experiments Page after you creat a new one')
        .assert.elementPresent(ExperimentsSelector.elements.RunFlow, 'The assertion failed because the Run Flow button was not displayed in Experiments Page')
        .click(ExperimentsSelector.elements.RunFlow)
        .pause(configrationReader.getDelayValue())
        .assert.elementPresent(ExperimentsSelector.elements.ModelParameters, 'The assertion failed because the Model Parameters section was not displayed in Experiments Page afetr you run flow for the new Experiment')
        .assert.elementPresent(ExperimentsSelector.elements.ROCCurve, 'The assertion failed because the ROC Curve section was not displayed in Experiments Page afetr you run flow for the new Experiment')
        .assert.elementPresent(ExperimentsSelector.elements.ExperimentStats, 'The assertion failed because the Experiment Stats section was not displayed in Experiments Page afetr you run flow for the new Experiment')
        .assert.elementPresent(ExperimentsSelector.elements.SelectedFeatures, 'The assertion failed because the Selected Features section was not displayed in Experiments Page afetr you run flow for the new Experiment')
        .pause(configrationReader.getPauseValue)
}