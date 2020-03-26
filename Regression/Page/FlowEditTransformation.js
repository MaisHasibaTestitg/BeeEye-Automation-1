const FlowEditTransformationsSelector = require("../Selectors/FlowEditTransformationsSelector");
const FlowsSelector = require("../Selectors/FlowsSelector");
const configrationReader = require("../utils/configrationReader");
const {
    assert
} = require('chai').assert
const {
    expect
} = require('chai')


//Verify Transformation are displayed and no errors in the log
//Run Transformation Tab
exports.RunTransformation = (browser) => {
    browser
        //wait the body to be loadded 
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .assert.elementPresent(FlowEditTransformationsSelector.elements.TransformationButton)
        .click(FlowEditTransformationsSelector.elements.TransformationButton)
        .pause(configrationReader.getDelayValue())
        .assert.elementPresent(FlowEditTransformationsSelector.elements.TransformationTab)
        .click(FlowEditTransformationsSelector.elements.TransformationTab)
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(FlowEditTransformationsSelector.elements.FeaturesTable)
        .assert.elementPresent(FlowsSelector.elements.ID, 'The assertion failed because the ID Row was not display')
        .assert.containsText(FlowsSelector.elements.ID, configrationReader.getFeature(), 'The assertion failed because the ID Row was not contained ID as in the File Uploaded')
        //get pause value
        .pause(configrationReader.getPauseValue())

}
//Check if there is an error in Log window after you run Transformation Tab
exports.CheckLogWindow = (browser) => {
    browser
        //wait the body to be loadded 
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .assert.elementPresent(FlowsSelector.elements.FlowLogButton)
        .click(FlowsSelector.elements.FlowLogButton, function (result) {
            browser
                .pause(configrationReader.getDelayValue())
                .elements('css selector', FlowEditTransformationsSelector.elements.WarningLog, (results) => {
                    if (results.value && results.value.ELEMENT) {
                        console.log('There is an error in the Log Window')
                    } else {
                        // Error is not present.
                        console.log('There is no error in the Log Window')
                    }
                })
        })
        .pause(configrationReader.getPauseValue())

}



//Create Transformation function (In general)
exports.CreateTransformationFunction = (browser) => {
    browser
        // click on escape to close the Log Window
        .keys(browser.Keys.ESCAPE)
        //wait the body to be loadded 
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .assert.elementPresent(FlowEditTransformationsSelector.elements.TransformationTabLink, 'The assertion failed because Transformation Tab was not displayed in Transformation Page')
        .click(FlowEditTransformationsSelector.elements.TransformationTabLink)
        .pause(configrationReader.getPauseValue())
    //.assert.elementPresent(FlowEditTransformationsSelector.elements.AddTransformationButton, 'The assertion failed because Add Transformation button was not displayed in Transformation Page')
}

//select Transformation Function - Built-In Type (Subtraction Function)
exports.SelectTransformationFunction = (browser) => {
    browser
        .assert.elementPresent(FlowEditTransformationsSelector.elements.BuiltInClicked, 'The assertion failed because Built In button was not clicked by default when you enetr Transformation Page')
        .assert.elementPresent(FlowEditTransformationsSelector.elements.BuiltInTypeList, 'The assertion failed because Built In Type List was not displayed in Transformation Page After you click on Add Transformation Button')
        .click(FlowEditTransformationsSelector.elements.BuiltInTypeList)
        .pause(configrationReader.getPauseValue())
        .setValue(FlowEditTransformationsSelector.elements.BuiltInTypeList, configrationReader.getTransformationFunction())
        .keys(browser.Keys.ENTER)
        .pause(configrationReader.getDelayValue())
        .assert.elementPresent(FlowEditTransformationsSelector.elements.FirstInputFeaturesList, 'The assertion failed because First Input Feature List was not displayed after you select the type of transformation function')
        .click(FlowEditTransformationsSelector.elements.FirstInputFeaturesList)
        .setValue(FlowEditTransformationsSelector.elements.FirstInputFeaturesList, configrationReader.getFeature())
        .pause(configrationReader.getPauseValue())
        .click(FlowEditTransformationsSelector.elements.FirstElementInFirstList)
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(FlowEditTransformationsSelector.elements.SecondInputFeatureList, 'The assertion failed because Second Input Feature List was not displayed after you select the type of transformation function')
        .click(FlowEditTransformationsSelector.elements.SecondInputFeatureList)
        .setValue(FlowEditTransformationsSelector.elements.SecondInputFeatureList, configrationReader.getFeature())
        .pause(configrationReader.getPauseValue())
        .click(FlowEditTransformationsSelector.elements.FirstElementInSecondList)
        .pause(configrationReader.getPauseValue())
        //.assert.not.elementPresent(FlowsSelector.elements.SubmitTransformationButtonDisabled)
        .assert.elementPresent(FlowEditTransformationsSelector.elements.SubmitTransformationButton)
        .pause(configrationReader.getPauseValue())
        .click(FlowEditTransformationsSelector.elements.SubmitTransformationButton)
        .pause(configrationReader.getPauseValue())
        .click(FlowEditTransformationsSelector.elements.TransformationButton)

}
//select Transformation Function - Built-In Type - abs function
exports.SelectTransformationFunction_abs = (browser) => {
    browser
        .assert.elementPresent(FlowEditTransformationsSelector.elements.BuiltInClicked, 'The assertion failed because Built In button was not clicked by default when you enetr Transformation Page')
        .assert.elementPresent(FlowEditTransformationsSelector.elements.BuiltInTypeList, 'The assertion failed because Built In Type List was not displayed in Transformation Page After you click on Add Transformation Button')
        .click(FlowEditTransformationsSelector.elements.BuiltInTypeList)
        .pause(configrationReader.getPauseValue())
        .setValue(FlowEditTransformationsSelector.elements.BuiltInTypeList, configrationReader.getAbsFunction())
        .keys(browser.Keys.ENTER)
        .pause(configrationReader.getDelayValue())
        .assert.elementPresent(FlowEditTransformationsSelector.elements.InputFeaturesList, 'The assertion failed because First Input Feature List was not displayed after you select the type of transformation function')
        .click(FlowEditTransformationsSelector.elements.InputFeaturesList)
        .setValue(FlowEditTransformationsSelector.elements.InputFeaturesList, configrationReader.getFeature_abs())
        .pause(configrationReader.getPauseValue())
        .click(FlowEditTransformationsSelector.elements.FirstElementInList)
        .pause(configrationReader.getPauseValue())
        //.assert.not.elementPresent(FlowsSelector.elements.SubmitTransformationButtonDisabled)
        .assert.elementPresent(FlowEditTransformationsSelector.elements.SubmitTransformationButton)
        .pause(configrationReader.getPauseValue())
        .click(FlowEditTransformationsSelector.elements.SubmitTransformationButton)
        .pause(configrationReader.getPauseValue())
        .click(FlowEditTransformationsSelector.elements.TransformationButton)
        .pause(configrationReader.getPauseValue())
}

//select Transformation Function - Built-In Type - sqrt function
exports.SelectTransformationFunction_sqrt = (browser) => {
    browser
        .assert.elementPresent(FlowEditTransformationsSelector.elements.AddTransformationButton, 'The assertion failed because Add Transformation button was not displayed in Transformation Page')
        .click(FlowEditTransformationsSelector.elements.AddTransformationButton)
        .assert.elementPresent(FlowEditTransformationsSelector.elements.BuiltInClicked, 'The assertion failed because Built In button was not clicked by default when you enetr Transformation Page')
        .assert.elementPresent(FlowEditTransformationsSelector.elements.BuiltInTypeList, 'The assertion failed because Built In Type List was not displayed in Transformation Page After you click on Add Transformation Button')
        .click(FlowEditTransformationsSelector.elements.BuiltInTypeList)
        .pause(configrationReader.getPauseValue())
        .setValue(FlowEditTransformationsSelector.elements.BuiltInTypeList, configrationReader.getSqrtFunction())
        .keys(browser.Keys.ENTER)
        .pause(configrationReader.getDelayValue())
        .assert.elementPresent(FlowEditTransformationsSelector.elements.InputFeaturesList, 'The assertion failed because First Input Feature List was not displayed after you select the type of transformation function')
        .click(FlowEditTransformationsSelector.elements.InputFeaturesList)
        .setValue(FlowEditTransformationsSelector.elements.InputFeaturesList, configrationReader.getFeature_abs())
        .pause(configrationReader.getPauseValue())
        .click(FlowEditTransformationsSelector.elements.FirstElementInList)
        .pause(configrationReader.getPauseValue())
        //.assert.not.elementPresent(FlowsSelector.elements.SubmitTransformationButtonDisabled)
        .assert.elementPresent(FlowEditTransformationsSelector.elements.SubmitTransformationButton)
        .pause(configrationReader.getPauseValue())
        .click(FlowEditTransformationsSelector.elements.SubmitTransformationButton)
        .pause(configrationReader.getPauseValue())
        .click(FlowEditTransformationsSelector.elements.TransformationButton)
        .pause(configrationReader.getPauseValue())
}

//Display Data after run transformation_abs 
exports.DisplayDataforTransformationFunction_abs = (browser) => {
    browser
        //The reason for this step is the issue in EYEON-127
        .pause(configrationReader.getPauseValue())
        .click(FlowEditTransformationsSelector.elements.AddTransformationButton)
        .pause(configrationReader.getPauseValue())
        .click(FlowEditTransformationsSelector.elements.ActiveTransformationFunction)
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(FlowEditTransformationsSelector.elements.ColumnsPreviewDataTable)
        .pause(configrationReader.getPauseValue())
        //First Elemnt in First Row 
        .getText(FlowEditTransformationsSelector.elements.FirstElemntinFirstRow, function (result) {
            browser
            Valuebeforabs = result.value;
        })
        .perform(function () {
            browser
            Valueafterabs = Math.abs(Valuebeforabs)
            console.log('Result value after abs function is ' + Valueafterabs)
            browser.pause(configrationReader.getDelayValue())
        })
        //Second Element in First Row 
        .getText(FlowEditTransformationsSelector.elements.SecondElemntinFirstRow, function (result1) {
            browser
            SecondValue = result1.value;
        })
        .perform(function () {
            browser.waitForElementVisible(FlowEditTransformationsSelector.elements.SecondElemntinFirstRow)
            if (SecondValue == Valueafterabs) {
                console.log('Abs function works as expected')
            } else {
                console.log('Abs function does not work as expected')
            }
            browser.pause(configrationReader.getDelayValue())
        })
        //take any value in the table
        //First Element in Sixth Row 
        .getText(FlowEditTransformationsSelector.elements.FirstElemntinSixthRow, function (result2) {
            browser
            Valuebeforabs_2 = result2.value;
        })
        .perform(function () {
            browser
            Valueafterabs_2 = Math.abs(Valuebeforabs_2)
            console.log('Result value after abs function is ' + Valueafterabs_2)
            browser.pause(configrationReader.getDelayValue())
        })
        //First Element in Sixth Row
        .getText(FlowEditTransformationsSelector.elements.SecondElemntinSixthRow, function (result3) {
            browser
            SecondValue = result3.value;
        })
        .perform(function () {
            browser.waitForElementVisible(FlowEditTransformationsSelector.elements.SecondElemntinFirstRow)
            if (SecondValue == Valueafterabs_2) {
                console.log('Abs function works as expected')
            } else {
                console.log('Abs function does not work as expected')
            }
            browser.pause(configrationReader.getDelayValue())
        })
    browser.pause(configrationReader.getDelayValue())
}

//Display Data after run transformation_sqrt
exports.DisplayDataforTransformationFunction_sqrt = (browser) => {
    browser

        //The reason for this step is the issue in EYEON-127
        .pause(configrationReader.getPauseValue())
        .click(FlowEditTransformationsSelector.elements.AddTransformationButton)
        .pause(configrationReader.getPauseValue())
        .click(FlowEditTransformationsSelector.elements.SecondTransformationFunction)
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(FlowEditTransformationsSelector.elements.ColumnsPreviewDataTable)
        .pause(configrationReader.getPauseValue())
        //First Elemnt in First Row 
        .getText(FlowEditTransformationsSelector.elements.FirstElemntinFirstRow, function (result) {
            browser
            Valuebeforsqrt = result.value;
        })
        .perform(function () {
            browser
            Valueaftersqrt = Math.sqrt(Valuebeforsqrt)
            console.log('Result value after sqrt function is ' + Valueaftersqrt)
            browser.pause(configrationReader.getDelayValue())
        })
        //Second Element in First Row 
        .getText(FlowEditTransformationsSelector.elements.SecondElemntinFirstRow, function (result1) {
            browser
            SecondValue = result1.value;
        })
        .perform(function () {
            browser.waitForElementVisible(FlowEditTransformationsSelector.elements.SecondElemntinFirstRow)
            if (SecondValue == Valueaftersqrt) {
                console.log('Sqrt function works as expected')
            } else {
                console.log('Sqrt function does not work as expected')
            }
            browser.pause(configrationReader.getDelayValue())
        })
    browser.pause(configrationReader.getDelayValue())
}


//Display Data after run transformation function (Subtraction)
exports.DisplayDataforTransformationFunction = (browser) => {
    browser
        //The reason for this step is the issue in EYEON-127
        .pause(configrationReader.getPauseValue())
        .click(FlowEditTransformationsSelector.elements.AddTransformationButton)
        .pause(configrationReader.getPauseValue())
        .click(FlowEditTransformationsSelector.elements.ActiveTransformationFunction)
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(FlowEditTransformationsSelector.elements.ColumnsPreviewDataTable)
        .pause(configrationReader.getPauseValue())
        .getText(FlowEditTransformationsSelector.elements.ThirdElemntinFirstRow, function (result) {
            browser
                .assert.equal(result.value, '0', 'The assertion failed because the value was not equal zero after apply Subtract function on the same feature')
                .pause(configrationReader.getDelayValue())

        })
}