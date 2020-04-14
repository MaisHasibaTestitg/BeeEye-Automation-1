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

//select Transformation Function - Built-In Type - abs function
exports.SelectTransformationFunction_DateSplit = (browser) => {
    browser
        .assert.elementPresent(FlowEditTransformationsSelector.elements.BuiltInClicked, 'The assertion failed because Built In button was not clicked by default when you enetr Transformation Page')
        .assert.elementPresent(FlowEditTransformationsSelector.elements.BuiltInTypeList, 'The assertion failed because Built In Type List was not displayed in Transformation Page After you click on Add Transformation Button')
        .click(FlowEditTransformationsSelector.elements.BuiltInTypeList)
        .pause(configrationReader.getPauseValue())
        .setValue(FlowEditTransformationsSelector.elements.BuiltInTypeList, configrationReader.getDateSplitFunction())
        .keys(browser.Keys.ENTER)
        .pause(configrationReader.getDelayValue())
        .assert.elementPresent(FlowEditTransformationsSelector.elements.InputFeatureList_DateSplit, 'The assertion failed because First Input Feature List was not displayed after you select the type of transformation function')
        .click(FlowEditTransformationsSelector.elements.InputFeatureList_DateSplit)
        .setValue(FlowEditTransformationsSelector.elements.InputFeatureList_DateSplit, configrationReader.getFeature_DateSplit())
        .pause(configrationReader.getPauseValue())
        //.keys(browser.Keys.ENTER)
        .click(FlowEditTransformationsSelector.elements.FirstElementInList_DateSplit)
        .pause(configrationReader.getPauseValue())
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
        //First Element in First Row 
        .getText(FlowEditTransformationsSelector.elements.FirstElementinFirstRow, function (result) {
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
        .getText(FlowEditTransformationsSelector.elements.SecondElementinFirstRow, function (result1) {
            browser
            SecondValue = result1.value;
        })
        .perform(function () {
            browser.waitForElementVisible(FlowEditTransformationsSelector.elements.SecondElementinFirstRow)
            if (SecondValue == Valueafterabs) {
                console.log('Abs function works as expected')
            } else {
                console.log('Abs function does not work as expected')
            }
            browser.pause(configrationReader.getDelayValue())
        })
        //take any value in the table
        //First Element in Sixth Row 
        .getText(FlowEditTransformationsSelector.elements.FirstElementinSixthRow, function (result2) {
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
        .getText(FlowEditTransformationsSelector.elements.SecondElementinSixthRow, function (result3) {
            browser
            SecondValue = result3.value;
        })
        .perform(function () {
            browser.waitForElementVisible(FlowEditTransformationsSelector.elements.SecondElementinFirstRow)
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
        .click(FlowEditTransformationsSelector.elements.ActiveTransformationFunction)
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(FlowEditTransformationsSelector.elements.ColumnsPreviewDataTable)
        .pause(configrationReader.getPauseValue())
        //First Element in First Row 
        .getText(FlowEditTransformationsSelector.elements.FirstElementinFirstRow, function (result) {
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
        .getText(FlowEditTransformationsSelector.elements.SecondElementinFirstRow, function (result1) {
            browser
            SecondValue = result1.value;
        })
        .perform(function () {
            browser.waitForElementVisible(FlowEditTransformationsSelector.elements.SecondElementinFirstRow)
            if (SecondValue == Valueaftersqrt) {
                console.log('Sqrt function works as expected')
            } else {
                console.log('Sqrt function does not work as expected')
            }
            browser.pause(configrationReader.getDelayValue())
        })
    browser.pause(configrationReader.getDelayValue())
}

//Display Data after run transformation_DateSplit 
exports.DisplayDataforTransformationFunction_DateSplit = (browser) => {
    browser
        //The reason for this step is the issue in EYEON-127
        .pause(configrationReader.getPauseValue())
        .click(FlowEditTransformationsSelector.elements.AddTransformationButton)
        .pause(configrationReader.getPauseValue())
        .click(FlowEditTransformationsSelector.elements.ActiveTransformationFunction)
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(FlowEditTransformationsSelector.elements.ColumnsPreviewDataTable)
        .pause(configrationReader.getPauseValue())

        //First Element in the Row (Birth Date)
        .getText(FlowEditTransformationsSelector.elements.FirstElementinFirstRow, function (result) {
            browser
            //This value displayed in the table
            WholeDate = result.value;
        })
        .perform(function () {
            browser
            WholeDateAfterSplit = WholeDate.split("-")
            console.log('The Whole Date is :' + WholeDate)
            console.log('The Year is : ' + WholeDateAfterSplit[0])
            console.log('The Month is : ' + WholeDateAfterSplit[1])
            console.log('The Day is : ' + WholeDateAfterSplit[2])
            browser.pause(configrationReader.getDelayValue())
        })

        //Second Element in the Row (Day)
        .getText(FlowEditTransformationsSelector.elements.SecondElementinFirstRow, function (result3) {
            browser
            //this value is displayed in the table
            DayValue = result3.value;
        })
        .perform(function () {
            browser
            console.log('The Day is : ' + WholeDateAfterSplit[2])
            if (DayValue == WholeDateAfterSplit[2]) {
                console.log('The Day value was display correctly in the table : ' + DayValue)
            } else {
                console.log('The Day value was not display correctly in the table : ' + DayValue)
            }

            browser.pause(configrationReader.getDelayValue())
        })
        //Third Element in the Row (Month)
        .getText(FlowEditTransformationsSelector.elements.ThirdElementinFirstRow, function (result2) {
            browser
            //this value is displayed in the table
            MonthValue = result2.value;
        })
        .perform(function () {
            browser
            console.log('The Month is : ' + WholeDateAfterSplit[1])
            if (MonthValue == WholeDateAfterSplit[1]) {
                console.log('The Month value was display correctly in the table : ' + MonthValue)
            } else {
                console.log('The Month value was not display correctly in the table : ' + MonthValue)
            }

            browser.pause(configrationReader.getDelayValue())
        })

        //Forth Element in the Row (Year)
        .getText(FlowEditTransformationsSelector.elements.ForthElementinFirstRow, function (result1) {
            browser
            //this value is displayed in the table
            YearValue = result1.value;
        })
        .perform(function () {
            browser
            console.log('The Year is : ' + WholeDateAfterSplit[0])
            if (YearValue == WholeDateAfterSplit[0]) {
                console.log('The Year value was display correctly in the table : ' + YearValue)
            } else {
                console.log('The Year value was not display correctly in the table : ' + YearValue)
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
        .getText(FlowEditTransformationsSelector.elements.ThirdElementinFirstRow, function (result) {
            browser
                .assert.equal(result.value, '0', 'The assertion failed because the value was not equal zero after apply Subtract function on the same feature')
                .pause(configrationReader.getDelayValue())

        })
}

//Trans - edit transformation
exports.EditTransformation = (browser) => {
    browser
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .assert.elementPresent(FlowEditTransformationsSelector.elements.EditTransformationbutton, 'the assertion failed because the Edit Icone was not displayed')
        .click(FlowEditTransformationsSelector.elements.EditTransformationbutton)
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(FlowEditTransformationsSelector.elements.InputFeaturesList, 'The assertion failed because the Input feature List was not displayed after you click on Edit button')
        .assert.elementPresent(FlowEditTransformationsSelector.elements.DeleteIcon, 'The assertion failed because the Delete Icon was not displayed on the feature name')
        .click(FlowEditTransformationsSelector.elements.DeleteIcon)
        .pause(configrationReader.getPauseValue())
        .setValue(FlowEditTransformationsSelector.elements.InputFeaturesList, configrationReader.getFeature())
        .pause(configrationReader.getPauseValue())
        .click(FlowEditTransformationsSelector.elements.FirstElementInList)
        .pause(configrationReader.getPauseValue())

}

//Trans - Save Edit transformation
exports.SaveTransformation = (browser) => {
    browser
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .assert.elementPresent(FlowEditTransformationsSelector.elements.SubmitTransformationButton, 'the assertion failed because the Save transformation button was not displayed')
        .click(FlowEditTransformationsSelector.elements.SubmitTransformationButton)
        .pause(configrationReader.getPauseValue())
        .click(FlowEditTransformationsSelector.elements.TransformationButton)
        .pause(configrationReader.getPauseValue())
}

//Trans - Delete transformation
exports.DeleteTransformation = (browser) => {
    browser
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .assert.elementPresent(FlowEditTransformationsSelector.elements.DeleteTransformation, 'the assertion failed because the Delete transformation button was not displayed')
        .click(FlowEditTransformationsSelector.elements.DeleteTransformation)
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(FlowEditTransformationsSelector.elements.BuiltInTypeList, 'The assertion failed after you click on Delete icon because Built In List should display after you click on delete icon but it did not display ')
        .pause(configrationReader.getPauseValue())
}

//Add imputations
//Imputation Tab

exports.AddImputation = (browser) => {
    browser
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .assert.elementPresent(FlowEditTransformationsSelector.elements.ImputationTab, 'The assertion failed because the Imputation tab was not displayed')
        .click(FlowEditTransformationsSelector.elements.ImputationTab)
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(FlowEditTransformationsSelector.elements.ManualImputationRadiobutton, 'The assertion failed after you click on Imputation Tab because Manual Imputation Input was not displayed')
        .pause(configrationReader.getPauseValue())
}
//Manual Impute with -1
exports.ImputeWithNegative = (browser) => {
    browser
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .assert.elementPresent(FlowEditTransformationsSelector.elements.ColumnsForImputation, 'The assertion failed because the Columns for Imputation Input was not displayed')
        .setValue(FlowEditTransformationsSelector.elements.ColumnsForImputation, configrationReader.getFeatureForImputation())
        .pause(configrationReader.getPauseValue())

        .click(FlowEditTransformationsSelector.elements.FirstElementInManualImputationList)
        .assert.elementPresent(FlowEditTransformationsSelector.elements.StrategyList)
        .click(FlowEditTransformationsSelector.elements.StrategyList)
        .setValue(FlowEditTransformationsSelector.elements.StrategyList, configrationReader.getNegativeStrategy())
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(FlowEditTransformationsSelector.elements.SubmitTransformationButton)
        .pause(configrationReader.getPauseValue())
        .click(FlowEditTransformationsSelector.elements.SubmitTransformationButton)
        .pause(configrationReader.getPauseValue())
        .click(FlowEditTransformationsSelector.elements.TransformationButton)
}
//Display Data after run transformation function (Impute with -1)
exports.DisplayDataforTransformationFunction_ImputeWithNegative = (browser) => {
    browser
        //The reason for this step is the issue in EYEON-127
        .pause(configrationReader.getPauseValue())
        .click(FlowEditTransformationsSelector.elements.AddTransformationButton)
        .pause(configrationReader.getPauseValue())
        .click(FlowEditTransformationsSelector.elements.ActiveTransformationFunction)
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(FlowEditTransformationsSelector.elements.ColumnsPreviewDataTable)
        .pause(configrationReader.getPauseValue())
        .getText(FlowEditTransformationsSelector.elements.FirstElementinFirstRow, function (result) {
            browser
            FirstValue = result.value
            browser.pause(configrationReader.getDelayValue())
        })
        .perform(function () {
            if (FirstValue == -1 || FirstValue < 0 || FirstValue > 0) {
                console.log('The value is ' + FirstValue)
            } else {
                console.log('There is a null value' + FirstValue)
            }
            browser.pause(configrationReader.getDelayValue())
        })
        .getText(FlowEditTransformationsSelector.elements.FirstElementinSecondRow, function (result1) {
            browser
            SecondValue = result1.value
            browser.pause(configrationReader.getDelayValue())
        })
        .perform(function () {
            if (SecondValue == -1 || SecondValue < 0 || SecondValue > 0) {
                console.log('The value is ' + SecondValue)
            } else {
                console.log('There is a null value' + SecondValue)
            }
            browser.pause(configrationReader.getDelayValue())
        })
        .getText(FlowEditTransformationsSelector.elements.FirstElementinThirdRow, function (result2) {
            browser
            ThirdValue = result2.value
            browser.pause(configrationReader.getDelayValue())
        })
        .perform(function () {
            if (ThirdValue == -1 || ThirdValue < 0 || ThirdValue > 0) {
                console.log('The value is ' + ThirdValue)
            } else {
                console.log('There is a null value' + ThirdValue)
            }
            browser.pause(configrationReader.getDelayValue())
        })
        .getText(FlowEditTransformationsSelector.elements.FirstElementinForthRow, function (result3) {
            browser
            ForthValue = result3.value
            browser.pause(configrationReader.getDelayValue())
        })
        .perform(function () {
            if (ForthValue == -1 || ForthValue < 0 || ForthValue > 0) {
                console.log('The value is ' + ForthValue)
            } else {
                console.log('There is a null value' + ForthValue)
            }
            browser.pause(configrationReader.getDelayValue())
        })
        .getText(FlowEditTransformationsSelector.elements.FirstElementinFifthRow, function (result4) {
            browser
            FifthValue = result4.value
            browser.pause(configrationReader.getDelayValue())
        })
        .perform(function () {
            if (FifthValue == -1 || FifthValue < 0 || FifthValue > 0) {
                console.log('The value is ' + FifthValue)
            } else {
                console.log('There is a null value' + FifthValue)
            }
            browser.pause(configrationReader.getDelayValue())
        })
        .getText(FlowEditTransformationsSelector.elements.FirstElementinSixthRow, function (result5) {
            browser
            SixthValue = result5.value
            browser.pause(configrationReader.getDelayValue())
        })
        .perform(function () {
            if (SixthValue == -1 || SixthValue < 0 || SixthValue > 0) {
                console.log('The value is ' + SixthValue)
            } else {
                console.log('There is a null value' + SixthValue)
            }
            browser.pause(configrationReader.getDelayValue())
        })
        .getText(FlowEditTransformationsSelector.elements.FirstElementinSeventhRow, function (result6) {
            browser
            SeventhValue = result6.value
            browser.pause(configrationReader.getDelayValue())
        })
        .perform(function () {
            if (SeventhValue == -1 || SeventhValue < 0 || SeventhValue > 0) {
                console.log('The value is ' + SeventhValue)
            } else {
                console.log('There is a null value' + SeventhValue)
            }
            browser.pause(configrationReader.getDelayValue())
        })

}

//Manual Impute with zero
exports.ImputeWithZero = (browser) => {
    browser
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .assert.elementPresent(FlowEditTransformationsSelector.elements.ColumnsForImputation, 'The assertion failed because the Columns for Imputation Input was not displayed')
        .setValue(FlowEditTransformationsSelector.elements.ColumnsForImputation, configrationReader.getFeatureForImputation())
        .pause(configrationReader.getPauseValue())

        .click(FlowEditTransformationsSelector.elements.FirstElementInManualImputationList)
        .assert.elementPresent(FlowEditTransformationsSelector.elements.StrategyList)
        .click(FlowEditTransformationsSelector.elements.StrategyList)
        .setValue(FlowEditTransformationsSelector.elements.StrategyList, configrationReader.getZeroStrategy())
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(FlowEditTransformationsSelector.elements.SubmitTransformationButton)
        .pause(configrationReader.getPauseValue())
        .click(FlowEditTransformationsSelector.elements.SubmitTransformationButton)
        .pause(configrationReader.getPauseValue())
        .click(FlowEditTransformationsSelector.elements.TransformationButton)
}
//Display Data after run transformation function (Impute with 0)
exports.DisplayDataforTransformationFunction_ImputeWithZero = (browser) => {
    browser
        //The reason for this step is the issue in EYEON-127
        .pause(configrationReader.getPauseValue())
        .click(FlowEditTransformationsSelector.elements.AddTransformationButton)
        .pause(configrationReader.getPauseValue())
        .click(FlowEditTransformationsSelector.elements.ActiveTransformationFunction)
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(FlowEditTransformationsSelector.elements.ColumnsPreviewDataTable)
        .pause(configrationReader.getPauseValue())
        .getText(FlowEditTransformationsSelector.elements.FirstElementinFirstRow, function (result) {
            browser
            FirstValue = result.value
            browser.pause(configrationReader.getDelayValue())
        })
        .perform(function () {
            if (FirstValue == 0 || FirstValue < 0 || FirstValue > 0) {
                console.log('The value is ' + FirstValue)
            } else {
                console.log('There is a null value' + FirstValue)
            }
            browser.pause(configrationReader.getDelayValue())
        })
        .getText(FlowEditTransformationsSelector.elements.FirstElementinSecondRow, function (result1) {
            browser
            SecondValue = result1.value
            browser.pause(configrationReader.getDelayValue())
        })
        .perform(function () {
            if (SecondValue == 0 || SecondValue < 0 || SecondValue > 0) {
                console.log('The value is ' + SecondValue)
            } else {
                console.log('There is a null value' + SecondValue)
            }
            browser.pause(configrationReader.getDelayValue())
        })
        .getText(FlowEditTransformationsSelector.elements.FirstElementinThirdRow, function (result2) {
            browser
            ThirdValue = result2.value
            browser.pause(configrationReader.getDelayValue())
        })
        .perform(function () {
            if (ThirdValue == 0 || ThirdValue < 0 || ThirdValue > 0) {
                console.log('The value is ' + ThirdValue)
            } else {
                console.log('There is a null value' + ThirdValue)
            }
            browser.pause(configrationReader.getDelayValue())
        })
        .getText(FlowEditTransformationsSelector.elements.FirstElementinForthRow, function (result3) {
            browser
            ForthValue = result3.value
            browser.pause(configrationReader.getDelayValue())
        })
        .perform(function () {
            if (ForthValue == 0 || ForthValue < 0 || ForthValue > 0) {
                console.log('The value is ' + ForthValue)
            } else {
                console.log('There is a null value' + ForthValue)
            }
            browser.pause(configrationReader.getDelayValue())
        })
        .getText(FlowEditTransformationsSelector.elements.FirstElementinFifthRow, function (result4) {
            browser
            FifthValue = result4.value
            browser.pause(configrationReader.getDelayValue())
        })
        .perform(function () {
            if (FifthValue == 0 || FifthValue < 0 || FifthValue > 0) {
                console.log('The value is ' + FifthValue)
            } else {
                console.log('There is a null value' + FifthValue)
            }
            browser.pause(configrationReader.getDelayValue())
        })
        .getText(FlowEditTransformationsSelector.elements.FirstElementinSixthRow, function (result5) {
            browser
            SixthValue = result5.value
            browser.pause(configrationReader.getDelayValue())
        })
        .perform(function () {
            if (SixthValue == 0 || SixthValue < 0 || SixthValue > 0) {
                console.log('The value is ' + SixthValue)
            } else {
                console.log('There is a null value' + SixthValue)
            }
            browser.pause(configrationReader.getDelayValue())
        })
        .getText(FlowEditTransformationsSelector.elements.FirstElementinSeventhRow, function (result6) {
            browser
            SeventhValue = result6.value
            browser.pause(configrationReader.getDelayValue())
        })
        .perform(function () {
            if (SeventhValue == 0 || SeventhValue < 0 || SeventhValue > 0) {
                console.log('The value is ' + SeventhValue)
            } else {
                console.log('There is a null value' + SeventhValue)
            }
            browser.pause(configrationReader.getDelayValue())
        })

}

//Manual Impute with Most frequent
exports.ImputeWithMostFrequent = (browser) => {
    browser
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .assert.elementPresent(FlowEditTransformationsSelector.elements.ColumnsForImputation, 'The assertion failed because the Columns for Imputation Input was not displayed')
        .setValue(FlowEditTransformationsSelector.elements.ColumnsForImputation, configrationReader.getFeatureForImputation())
        .pause(configrationReader.getPauseValue())
        .click(FlowEditTransformationsSelector.elements.FirstElementInManualImputationList)
        .assert.elementPresent(FlowEditTransformationsSelector.elements.StrategyList, 'The assertion failed because the Strategy List was not displayed')
        .click(FlowEditTransformationsSelector.elements.StrategyList)
        .setValue(FlowEditTransformationsSelector.elements.StrategyList, configrationReader.getMostFrequentStrategy())
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(FlowEditTransformationsSelector.elements.SubmitTransformationButton, 'The assertion failed because the submit transformation button was not displayed')
        .pause(configrationReader.getPauseValue())
        .click(FlowEditTransformationsSelector.elements.SubmitTransformationButton)
        .pause(configrationReader.getPauseValue())
        .click(FlowEditTransformationsSelector.elements.TransformationButton)
}
//count the most frequent values
exports.CountValues = (browser) => {
    browser
        //The reason for this step is the issue in EYEON-127
        .pause(configrationReader.getPauseValue())
        //.click(FlowsSelector.elements.DataSourcesButton)
        //.assert.elementPresent(FlowsSelector.elements.PreviewData)
        .getText(FlowEditTransformationsSelector.elements.Secondd, function (result) {
            browser
            FirstVal = result.value;
            console.log('First element' + result.value)

        }) //getText
        .perform(function () {
            if (FirstVal > 0 || FirstVal < 0) {
                console.log('value is' + FirstVal)
                count = count + 1
                console.log('The count is' + count)

            } else {
                console.log('is null')
            } //else
        }) //perform

        .perform(function () {
            if (FirstVal > 0 || FirstVal < 0) {
                // count=count+1
                browser.elements('css selector', FlowEditTransformationsSelector.elements.TableRow, (results) => {
                    for (let i = 0; i < results.value.length; i++) {
                        console.log('the length is'+results.value.length)
                        browser.elementIdText(results.value[i].ELEMENT, (result1) => {
                            elem = results.value[i].ELEMENT;
                            if (elem > 0 || elem < 0) {

                                Secondval = result1.value;
                                console.log('Second val in tabel is ' + Secondval)
                            } else {
                                console.log('is null')
                            }

                        })

                    } //for loop
                }); //elements
            } else {
                console.log('it is null value')
            }

        }) //perform

}

//Display Data after run transformation function (Impute with most frequent)
exports.DisplayDataforTransformationFunction_ImputeWithMostFrequent = (browser) => {
    browser
        //The reason for this step is the issue in EYEON-127
        .pause(configrationReader.getPauseValue())
        .click(FlowEditTransformationsSelector.elements.AddTransformationButton)
        .pause(configrationReader.getPauseValue())
        .click(FlowEditTransformationsSelector.elements.ActiveTransformationFunction)
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(FlowEditTransformationsSelector.elements.ColumnsPreviewDataTable)
        .pause(configrationReader.getPauseValue())
        .getText(FlowEditTransformationsSelector.elements.Firstt, function (result) {
            browser
            FirstVal = result.value;
            console.log('First element' + FirstVal)
            let count=0;

        }) //getText
        
        .perform(function () {
            if (FirstVal > 0 || FirstVal < 0) {
                  count=count+1
                 console.log('The count is' + count)
                 browser.elements('css selector', FlowEditTransformationsSelector.elements.TableRow, (results) => {
                    for (let i = 0; i < results.value.length; i++) {
                        //console.log('the length is'+results.value.length)
                        browser.elementIdText(results.value[i].ELEMENT, (result1) => {
                            elem = result1.value;
                            if (elem==count) {
                              count=count+1;
                                console.log('Second val in tabel is ' + count)
                            } else {
                                console.log('is null')
                            }

                        })

                    } //for loop
                }); //elements
            } else {
                console.log('it is null value')
            }

        }) //perform

}
