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
                .pause(configrationReader.getPauseValue())
                .assert.elementPresent(FlowEditDataExplorationSelectors.elements.MenuInFeatureAnalysis, 'The assertion failed because the Menu was not display after you enter a feature Name in the Select Feature Analysis')
                .pause(configrationReader.getPauseValue())
                .click(FlowEditDataExplorationSelectors.elements.FeatureInMenu)
                .pause(configrationReader.getPauseValue())
                .keys(browser.Keys.ENTER)
                .assert.elementPresent(FlowEditDataExplorationSelectors.elements.TableInFeatureAnalysis, 'The assertion failed after you select feature because the Table was not display for the selected feature')
        })
        .assert.elementPresent(FlowEditDataExplorationSelectors.elements.CountValueForTheSelectedFeature, 'The assertion failed because the Count value was not display in the Table')
        .getText(FlowEditDataExplorationSelectors.elements.CountValueForTheSelectedFeature, function (result) {
            browser
            CountValue = result.value;
        })
        .pause(configrationReader.getPauseValue())
}

//Verify that filter is working as expected
exports.FilterInFeatureAnalysis = (browser) => {
    browser
        //wait the body to be loadded 
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .waitForElementVisible(FlowEditDataExplorationSelectors.elements.FilterInFeatureAnalysis, 'The Test failed because the filter was not display after you select the feature')
        .assert.elementPresent(FlowEditDataExplorationSelectors.elements.FilterInFeatureAnalysis, 'The assertion failed because the filter was not display after you select the feature')
        .pause(configrationReader.getPauseValue())
        .click(FlowEditDataExplorationSelectors.elements.FilterInFeatureAnalysis)
        .waitForElementVisible(FlowEditDataExplorationSelectors.elements.ModalViewForFilter, 'The Test failed because the modal was not display after you click on Filter button')
        .assert.elementPresent(FlowEditDataExplorationSelectors.elements.ModalViewForFilter, 'The assertion failed because the modal was not display after you click on Filter button')
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(FlowEditDataExplorationSelectors.elements.FilterQuery, 'The assertion failed because the Filter Query was not display in the Filter Modal')
        .perform(function () {
            browser
            Query = configrationReader.getExpression() + CountValue;
            console.log('The Query is: ' + Query)
            browser.setValue(FlowEditDataExplorationSelectors.elements.FilterQuery, Query)
                .pause(configrationReader.getPauseValue())

        })
        .pause(configrationReader.getPauseValue())

}

//Apply the filter and verify if it works correctly
exports.ApplyFilter = (browser) => {
    browser
        //wait the body to be loadded 
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .assert.elementPresent(FlowEditDataExplorationSelectors.elements.SubmitButton, 'The assertion failed because the Submit button was not display in the Filter Modal view')
        .click(FlowEditDataExplorationSelectors.elements.SubmitButton)
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(FlowEditDataExplorationSelectors.elements.CountValueForTheSelectedFeature, 'The assertion failed after you click on Submit button because the count value for the selected feature was not display')
        .getText(FlowEditDataExplorationSelectors.elements.CountValueForTheSelectedFeature, function (result) {
            browser
            CountValueAfterApplyingFilter = result.value;
            browser.verify.notEqual(CountValueAfterApplyingFilter, CountValue, 'The assertion failed because the Count value was not changed after applyijng the filter');
        })
        .pause(configrationReader.getPauseValue())

}

//Data visualizations - Top features and Correlation heatmap tables are loaded when seleced
exports.DataVisualization = (browser) => {
    browser
        //wait the body to be loadded 
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .assert.elementPresent(FlowEditDataExplorationSelectors.elements.DataVisualization, 'The assertion failed because the Data Visualization was not display in Exploration Tab')
        .click(FlowEditDataExplorationSelectors.elements.DataVisualization)
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(FlowEditDataExplorationSelectors.elements.TopFeaturesRadioBtn, ' The assertion failed because the Top Features Radio button was not display')
        .assert.elementPresent(FlowEditDataExplorationSelectors.elements.CorrelationHeatmapRadioBtn, ' The assertion failed because the Correlation Heatmap Radio button was not display')
        .pause(configrationReader.getPauseValue())

}

//Data visualizations - Top features is loaded when seleced
exports.TopFeatures = (browser) => {
    browser
        //wait the body to be loadded 
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .assert.elementPresent(FlowEditDataExplorationSelectors.elements.TopFeaturesRadioBtn, ' The assertion failed because the Top Features Radio button was not display')

        .click(FlowEditDataExplorationSelectors.elements.TopFeaturesRadioBtn)
        .pause(configrationReader.getDelayValue())
        .assert.not.elementPresent(FlowEditDataExplorationSelectors.elements.TopFeaturesTableNotDisplay, 'The assertion failed because Top Features Table was still not display eventhough you select Top Features radio button')
        .pause(configrationReader.getPauseValue())

}
//Data visualizations - Correlation Heatmap Tables is loaded when seleced
exports.CorrelationHeatmap = (browser) => {
    browser
        //wait the body to be loadded 
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .assert.elementPresent(FlowEditDataExplorationSelectors.elements.CorrelationHeatmapRadioBtn, ' The assertion failed because the Top Features Radio button was not display in Exploration Tab')
        .click(FlowEditDataExplorationSelectors.elements.CorrelationHeatmapRadioBtn)
        .pause(configrationReader.getPauseValue())
        .assert.not.elementPresent(FlowEditDataExplorationSelectors.elements.CorrelationHeatmapTableNotDisplay, 'The assertion failed because Correlation Heatmap Table was still not display eventhough you select Correlation Heatmap radio button')
        .pause(configrationReader.getPauseValue())

}


//Navigate to Transformed Data 
exports.TransformedData = (browser) => {
    browser
        //wait the body to be loadded 
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .assert.elementPresent(FlowEditDataExplorationSelectors.elements.TransformedData, ' The assertion failed because the Transformed Data was not display')
        .click(FlowEditDataExplorationSelectors.elements.TransformedData)
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(FlowEditDataExplorationSelectors.elements.TransformedDataTable, 'The assertion failed after you click on Transformed Data because the Transformed Data Table was not display')
        .assert.containsText(FlowEditDataExplorationSelectors.elements.IdColumnInTransformedData, configrationReader.getFeature(), 'The assertion failed because the ID Column was not contained ID as in the File Uploaded')

        .pause(configrationReader.getPauseValue())

}

//check if the Pagination is work fine or not
exports.PaginationInTransformedData = (browser) => {
    browser
        //wait the body to be loadded 
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .assert.elementPresent(FlowEditDataExplorationSelectors.elements.Pagination, ' The assertion failed because the Pagination was not display In Transformed data')
        .assert.elementPresent(FlowEditDataExplorationSelectors.elements.NextIconInPagination, 'The assertion failed because the Next Icon In Pagination was not display')
        .assert.elementPresent(FlowEditDataExplorationSelectors.elements.PrevIconInPagination, 'The assertion failed because the Previous Icon In Pagination was not display')
        .assert.elementPresent(FlowEditDataExplorationSelectors.elements.PaginationItemActive, 'The assertion failed because there is no pagination item active ')
        //By default when you navigate to Transformed Data , the Active Pagination item should equal one 
        .assert.containsText(FlowEditDataExplorationSelectors.elements.PaginationItemActive, configrationReader.getFirstPaginationItem())
        .click(FlowEditDataExplorationSelectors.elements.NextIconInPagination)
        .pause(configrationReader.getPauseValue())
        //To verify that when you click on next icon on the pagination , it should navigates you to the next page
        .assert.elementPresent(FlowEditDataExplorationSelectors.elements.PaginationItemActive, 'The assertion failed because there is no pagination item active ')
        .assert.containsText(FlowEditDataExplorationSelectors.elements.PaginationItemActive, configrationReader.getSecondPagination())
        .pause(configrationReader.getPauseValue())

}
//Search by name is works fine
exports.SearchInTransformedData = (browser) => {
    browser
        //wait the body to be loadded 
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .assert.elementPresent(FlowEditDataExplorationSelectors.elements.TransformedDataSearch, ' The assertion failed because the Search Field was not display In Transformed data')
        .click(FlowEditDataExplorationSelectors.elements.TransformedDataSearch)
        .pause(configrationReader.getPauseValue())

        .setValue(FlowEditDataExplorationSelectors.elements.TransformedDataSearch, configrationReader.getFeatureName())
        .pause(configrationReader.getPauseValue())
        .assert.containsText(FlowEditDataExplorationSelectors.elements.LimitBalColumnInTransformedData, configrationReader.getFeatureName(), 'The assertion failed because the LIMIT_BAL Column was not display after you search by this feature name')
        .pause(configrationReader.getPauseValue())

}

//filter by column is works fine
exports.FilterByColumn = (browser) => {
    browser
        //wait the body to be loadded 
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .click(FlowEditDataExplorationSelectors.elements.DataVisualization)
        .pause(configrationReader.getPauseValue())
        .click(FlowEditDataExplorationSelectors.elements.TransformedData)
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(FlowEditDataExplorationSelectors.elements.FilterByColumnIcon, ' The assertion failed because the Filter By Column Icon was not display In Transformed data')
        .click(FlowEditDataExplorationSelectors.elements.FilterByColumnIcon)
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(FlowEditDataExplorationSelectors.elements.SelectFeatureField, 'The assertion faield after you click on filter icon because the select feature field was not display In the Filter by column Modal ')
        .setValue(FlowEditDataExplorationSelectors.elements.SelectFeatureField, configrationReader.getFeature())
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(FlowEditDataExplorationSelectors.elements.FeatureInMenu, 'The assertion faield because the Feature was not display after you enter the column name ')
        .click(FlowEditDataExplorationSelectors.elements.FeatureInMenu)
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(FlowEditDataExplorationSelectors.elements.SubmitButton, 'The assertion faield because the Submit button was not display in the Select Columns Modal')
        .click(FlowEditDataExplorationSelectors.elements.SubmitButton)
        .pause(configrationReader.getPauseValue())
        .assert.containsText(FlowEditDataExplorationSelectors.elements.IdColumnInTransformedData, configrationReader.getFeature(), 'The assertion failed because the ID Column was not display after you make filter to display just it')
        .pause(configrationReader.getPauseValue())

}