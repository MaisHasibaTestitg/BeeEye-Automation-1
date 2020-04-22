const FlowEditDataExplorationSelectors = require("../Selectors/FlowEditDataExplorationSelectors");
const configrationReader = require("../utils/configrationReader");
const {
    assert
} = require('chai').assert
const {
    expect
} = require('chai')


//Verify that export button is displayed and no errors displayed after exporting 
exports.Exportbutton = (browser) => {
    browser
        //wait the body to be loadded 
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .assert.elementPresent(FlowEditDataExplorationSelectors.elements.ExportButton, 'The assertion failed because the Export Button was not displayed in Feature List page')
        .click(FlowEditDataExplorationSelectors.elements.ExportButton)
        .pause(configrationReader.getDelayValue())
}

//Verify pagination is displayed 
exports.Pagination = (browser) => {
    browser
        //wait the body to be loadded 
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .assert.elementPresent(FlowEditDataExplorationSelectors.elements.Pagination, 'The assertion failed because the Pagination wrapper was not displayed in Feature List page')
        .pause(configrationReader.getPauseValue())
}

/*
//Verify sort for some columns
exports.SortColumn = (browser) => {
    browser
        //wait the body to be loadded 
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .assert.elementPresent(FlowEditDataExplorationSelectors.elements.MeanColumn, 'The assertion failed because The Mean Column was not display ')
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(FlowEditDataExplorationSelectors.elements.SortIconForTheFifthColumn, 'The assertion failed because the sort icon was not display in the header of the Column')
        .pause(configrationReader.getPauseValue())
        .click(FlowEditDataExplorationSelectors.elements.SortIconForTheFifthColumn)
        .click(FlowEditDataExplorationSelectors.elements.SortIconForTheFifthColumn)
        .pause(configrationReader.getPauseValue())

        .getText(FlowEditDataExplorationSelectors.elements.FirstElementInFifthColumn, function (result) {
            browser
            FirstValue = result.value;
        })

        .getText(FlowEditDataExplorationSelectors.elements.SecondElementInFifthColumn, function (result1) {
            browser
            SecondValue = result1.value;
        })

        .perform(function () {
            browser
            console.log('The First value: ' + FirstValue)
            console.log('The Second value: ' + SecondValue)
            //  if ( SecondValue<FirstValue )
            if (FirstValue > SecondValue) {
                console.log('The sort works correctly')
            } else {

                console.log('The sort was not worked correctly')
            }
            browser.pause(configrationReader.getDelayValue())
        })

}
*/

//Verify search is working correctly 
exports.SearchInFeatureList = (browser) => {
    browser
        //wait the body to be loadded 
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .assert.elementPresent(FlowEditDataExplorationSelectors.elements.SearchField, 'The assertion failed because the Search by feature name field was not display in Feature List Page')
        .setValue(FlowEditDataExplorationSelectors.elements.SearchField, configrationReader.getFeature())
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(FlowEditDataExplorationSelectors.elements.FirstRowAfterSearch, 'The assertion failed after you search on Feature name because the Row for this feature was not display')
        .assert.containsText(FlowEditDataExplorationSelectors.elements.FirstRowAfterSearch, configrationReader.getFeature(), 'The assertion failed after you search on Feature name because the Result for the search has not contained the feature name that you searched on')
        .pause(configrationReader.getPauseValue())
}

//Go To Feature Analysis Tab
exports.FeatureAnalysis = (browser) => {
    browser
        //wait the body to be loadded 
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .assert.elementPresent(FlowEditDataExplorationSelectors.elements.FeatureAnalysis, 'The assertion failed because the Feature Analysis was not display in Exploration Tab')
        .click(FlowEditDataExplorationSelectors.elements.FeatureAnalysis)
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(FlowEditDataExplorationSelectors.elements.SelectFeatureAnalysis, 'The assertion failed because the Select Feature Analysis was not display in Feature Analysis Tab')
        .click(FlowEditDataExplorationSelectors.elements.SelectFeatureAnalysis)
        .assert.elementPresent(FlowEditDataExplorationSelectors.elements.MenuInFeatureAnalysis, 'The assertion failed because the Menu was not display after you click on the Select Feature Analysis')
        .pause(configrationReader.getPauseValue())
}
//Verify that tables are displayed for the selected feature
exports.SelectFeatureInFeatureAnalysis = (browser) => {
    browser
        //wait the body to be loadded 
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .click(FlowEditDataExplorationSelectors.elements.SelectFeatureAnalysis, function (result) {
            browser
        .assert.elementPresent(FlowEditDataExplorationSelectors.elements.MenuInFeatureAnalysis, 'The assertion failed because the Menu was not display after you click on the Select Feature Analysis')
        .setValue(FlowEditDataExplorationSelectors.elements.SelectFeatureAnalysis, configrationReader.getFeature())
        .pause(configrationReader.getDelayValue())
        .assert.elementPresent(FlowEditDataExplorationSelectors.elements.MenuInFeatureAnalysis, 'The assertion failed because the Menu was not display after you enter a feature Name in the Select Feature Analysis')
        .pause(configrationReader.getDelayValue())
        .click(FlowEditDataExplorationSelectors.elements.FeatureInMenu)
        .pause(configrationReader.getLongWait())
        .keys(browser.Keys.ENTER)
        .assert.elementPresent(FlowEditDataExplorationSelectors.elements.TableInFeatureAnalysis, 'The assertion failed after you select feature because the Table was not display for the selected feature')
    })
        .pause(configrationReader.getPauseValue())
}