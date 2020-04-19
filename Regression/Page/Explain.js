//This Code to verify the Explain Page
const MainNavigationBarSelectors = require("../Selectors/MainNavigationBarSelectors");
const ExplainSelector = require("../Selectors/ExplainSelector");
const configrationReader = require("../utils/configrationReader");

const {
    assert
} = require('chai').assert
const {
    expect
} = require('chai')


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
        .assert.elementPresent(ExplainSelector.elements.FlowIdSelect, 'The assertion failed because the Flow ID Select was not display in Model Tab')
        .assert.elementPresent(ExplainSelector.elements.ExpIdSelect, 'The assertion failed because the Exp ID Select was not display in Model Tab')
        .click(ExplainSelector.elements.FlowIdSelect)
        .pause(configrationReader.getPauseValue())
        .click(ExplainSelector.elements.FirstOptionInFlowIdList)
        .pause(configrationReader.getPauseValue())
        .click(ExplainSelector.elements.ExpIdSelect)
        .pause(configrationReader.getPauseValue())
        .click(ExplainSelector.elements.FirstOptionInExpIdList)
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