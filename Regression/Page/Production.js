//This code to Test if Deploying a flow done correctly or not
const MainNavigationBarSelectors = require("../Selectors/MainNavigationBarSelectors");
const ProductionSelectors = require("../Selectors/ProductionSelectors");
const ExplainSelector = require("../Selectors/ExplainSelector");
const configrationReader = require("../utils/configrationReader");
const {
    assert
} = require('chai').assert
const {
    expect
} = require('chai')
const setup = require("../utils/setup");

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
        .getText(ProductionSelectors.elements.FlowIDInFlowStep, function (result) {
            FlowIdValue = result.value;
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
exports.ScoreFile = (browser) => {
    browser
        //wait the body to be loadded
        .waitForElementVisible('body', configrationReader.getPeriod()) // Wait till page loads
        .click(ProductionSelectors.elements.ProductionCard)
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(ProductionSelectors.elements.DropdownBtn, 'The assertion failed because the Dropdown button was not display in selected Deployed flow Page')
        .pause(configrationReader.getPauseValue())
        .click(ProductionSelectors.elements.DropdownBtn)
        .assert.elementPresent(ProductionSelectors.elements.ScoreFileOption)
        .click(ProductionSelectors.elements.ScoreFileOption)
        .assert.elementPresent(ProductionSelectors.elements.InputFile, 'The assertion failed because the Input fie for the score file was not displayed in the score file Model')
        .setValue(ProductionSelectors.elements.InputFile, require('path').resolve(__dirname + '/Data/UCI_Credit_Card.csv'))
        .pause(configrationReader.getLongWait())
        .assert.elementPresent(ProductionSelectors.elements.SuccessMsg)
        .assert.containsText(ProductionSelectors.elements.SuccessMsg, 'Successfully scored the file')
        .pause(configrationReader.getPauseValue())
        .keys(browser.Keys.ESCAPE)
        //get pause value
        .pause(configrationReader.getPauseValue());
}

exports.Requests = (browser) => {
    browser
        //wait the body to be loadded
        .waitForElementVisible('body', configrationReader.getPeriod()) // Wait till page loads
        .assert.elementPresent(ProductionSelectors.elements.RequestsButton)
        .click(ProductionSelectors.elements.RequestsButton)
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(ProductionSelectors.elements.ProductionRequestsTable)
        .assert.elementPresent(ProductionSelectors.elements.FirstElementInPredIdcolumn)
        .pause(configrationReader.getPauseValue())
        .getText(ProductionSelectors.elements.FirstElementInPredIdcolumn, function (result1) {
            browser
            PredictionId = result1.value;
        })

        //get pause value
        .pause(configrationReader.getPauseValue());
}
//Explain 
//Navigate to Explain Page
exports.ExplainPage = (browser) => {
    browser
        //wait the body to be loadded
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .assert.elementPresent(MainNavigationBarSelectors.elements.Explain, 'The assertion failed because Explain Link was not display in Main Navigation Bar')
        .click(MainNavigationBarSelectors.elements.Explain)
        .assert.elementPresent(ExplainSelector.elements.ModelButtonSelected, 'The assertion failed because the Modal button was not clicked by default when you navigate to Explain Page')
        .pause(configrationReader.getPauseValue())
}

//Select Flow ID and Exp ID
exports.SelectFlowAndExp = (browser) => {
    browser
        //wait the body to be loadded
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads


        .perform(function () {
            browser
                .assert.elementPresent(ExplainSelector.elements.FlowIdSelect, 'The assertion failed because the Flow ID Select was not display in Model Tab')
                .assert.elementPresent(ExplainSelector.elements.ExpIdSelect, 'The assertion failed because the Exp ID Select was not display in Model Tab')
                .click(ExplainSelector.elements.FlowIdSelect)
                .pause(configrationReader.getPauseValue())
                //.setValue(ExplainSelector.elements.FlowIdSelect,'Flow_1587297792765')
                .setValue(ExplainSelector.elements.FlowIdSelect, FlowIdValue)
                //.click(ExplainSelector.elements.FirstOptionInFlowIdList)
                .pause(configrationReader.getPauseValue())
                .click(ExplainSelector.elements.ExpIdSelect)
                .setValue(ExplainSelector.elements.ExpIdSelect, ExpIdValue)
                .pause(configrationReader.getPauseValue())
                .click(ExplainSelector.elements.FirstOptionInExpIdList)
        })


        .pause(configrationReader.getPauseValue())
}

//Select Flow ID and Exp ID
exports.ResultInModelTab = (browser) => {
    browser
        //wait the body to be loadded
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .assert.elementPresent(ExplainSelector.elements.ConfusionMatrixCard, 'The assertion failed because the Confusion Matrix Card was not display after you select Flow ID and Exp ID')
        .assert.containsText(ExplainSelector.elements.ConfusionMatrixCard, configrationReader.getConfusionMatrixCardName(), 'The assertion failed because the card header of the card was not contained Confusion Matrix')
        .pause(configrationReader.getPauseValue())

        .assert.elementPresent(ExplainSelector.elements.RocCurveCard, 'The assertion failed because the ROC Curve Card was not display after you select Flow ID and Exp ID')
        .assert.containsText(ExplainSelector.elements.RocCurveCard, configrationReader.getRocCurveCardName(), 'The assertion failed because the card header was not contained ROC Curve')
        .pause(configrationReader.getPauseValue())

        .assert.elementPresent(ExplainSelector.elements.PredictionHistogramCard, 'The assertion failed because the Prediction Histogram Card was not display after you select Flow ID and Exp ID')
        .assert.containsText(ExplainSelector.elements.PredictionHistogramCard, configrationReader.getPredictionHistogramCardName(), 'The assertion failed because the card header was not contained Prediction Histogram')
        .pause(configrationReader.getPauseValue())

        .assert.elementPresent(ExplainSelector.elements.TrainedModelInfoCard, 'The assertion failed because the Trained Model Info Card was not display after you select Flow ID and Exp ID')
        .assert.containsText(ExplainSelector.elements.TrainedModelInfoCard, configrationReader.getTrainedModelInfoCardName(), 'The assertion failed because the card header was not contained Trained Model Info')
        .pause(configrationReader.getPauseValue())

        .assert.elementPresent(ExplainSelector.elements.FeatureRankingCard, 'The assertion failed because the Feature Ranking Card was not display after you select Flow ID and Exp ID')
        .assert.containsText(ExplainSelector.elements.FeatureRankingCard, configrationReader.getFeatureRankingCardName(), 'The assertion failed because the card header was not contained Feature Ranking')
        .pause(configrationReader.getPauseValue())

        .assert.elementPresent(ExplainSelector.elements.FlowDataLineageCard, 'The assertion failed because the Flow Data Lineage Card was not display after you select Flow ID and Exp ID')
        .assert.containsText(ExplainSelector.elements.FlowDataLineageCard, configrationReader.getFlowDataLineageCardName(), 'The assertion failed because the card header was not contained Flow Data Lineage')
        .pause(configrationReader.getPauseValue())


}
//Records Prediction
exports.RecordsPrediction = (browser) => {
    browser
        //wait the body to be loadded
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .assert.elementPresent(ExplainSelector.elements.RecordsPrediction, 'The assertion failed because ')
        .click(ExplainSelector.elements.RecordsPrediction)
        .assert.elementPresent(ExplainSelector.elements.FlowIdSelect, 'The assertion failed because Flow ID select field was not display in Records Prediction Tab ')
        //.click(ExplainSelector.elements.FirstOptionInFlowIdList)
        .assert.elementPresent(ExplainSelector.elements.ExpIdSelect, 'The assertion failed because Exp ID select field was not display in Records Prediction Tab ')
        //.click(ExplainSelector.elements.FirstOptionInRecordIdList)
        .assert.elementPresent(ExplainSelector.elements.RecordIdSelect, 'The assertion failed because Record ID select field was not display in Records Prediction Tab ')
        .pause(configrationReader.getPauseValue())
        .click(ExplainSelector.elements.RecordIdSelect)
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(ExplainSelector.elements.SelectSearchList, 'The assertion failed because no List of record ID and thats mean you do not upload score file to deployed flow')
        // .click(ExplainSelector.elements.FirstOptionInRecordIdList)
        .pause(configrationReader.getPauseValue())
        .perform(function () {
            browser
                .setValue(ExplainSelector.elements.RecordIdSelect, PredictionId) // send values
                .click(ExplainSelector.elements.FirstOptionInRecordIdList)
                .keys(browser.Keys.ENTER)
                .pause(configrationReader.getDelayValue())
        })
        .pause(configrationReader.getPauseValue())


        //.keys(browser.Keys.ENTER)
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(ExplainSelector.elements.RecordPredictionWrapper, 'The assertion failed because Record Prediction Wrapper was not display in Records Prediction Tab after you enter Record ID')
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(ExplainSelector.elements.ShapleyValuesForceDiagram, 'The assertion failed because Shapley Values Force Diagram was not display in Records Prediction Tab after you enter Record ID')
        .assert.elementPresent(ExplainSelector.elements.ShapleyInfoListAppCard, 'The assertion failed because Shapley Info List App Card was not display in Records Prediction Tab after you enter Record ID')
        .assert.elementPresent(ExplainSelector.elements.CustomTableWrapper, 'The assertion failed because Record Custom Table Wrapper was not display in Records Prediction Tab after you enter Record ID')

}