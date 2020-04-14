const FlowsSelector = require("../Selectors/FlowsSelector");
const FlowEditTransformationsSelector = require("../Selectors/FlowEditTransformationsSelector");
const FlowEditDsSelector = require("../Selectors/FlowEditDsSelector");
const {
  assert
} = require('chai').assert
const {
  expect
} = require('chai')
const configrationReader = require("../utils/configrationReader");
const FlowName = require("../utils/FlowName");
const setup = require("../utils/setup");
const screenShotUtils = require("../utils/screenShotUtils");
const logReport = require("mochawesome-screenshots/logReport")

//create new flow
exports.CreateNewFlow = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    //Click on Flows Link in Navigation Bar
    .assert.elementPresent(FlowsSelector.elements.NavFlows, 'The assertion failed because the Flows Link was not found in the Main Navigation Bar')
    .click(FlowsSelector.elements.NavFlows)
    .waitForElementVisible(FlowsSelector.elements.AddFlowBtn, 'Test was failed because Add Flow Button was not found Flows Page')
    .assert.elementPresent(FlowsSelector.elements.AddFlowBtn, 'The assertion failed because Add Flow Button was not found Flows Page')
    //Click on "+" Add flow button
    .click(FlowsSelector.elements.AddFlowBtn, function (result) {
      browser
        //pop up will appear to write the name of the new flow
        .waitForElementVisible(FlowsSelector.elements.PopUp, 'Test was failed after you click on Add flow button because no pop ups window displayed')
        .assert.elementPresent(FlowsSelector.elements.PopUp, 'The assertion failed after you click on Add flow button because no pop ups window displayed')

        .waitForElementVisible(FlowsSelector.elements.FlowNameInput, 'Test was failed after you click on Add flow button because no flow name input field in the pop ups window')
        .assert.elementPresent(FlowsSelector.elements.FlowNameInput, 'The assertion failed after you click on Add flow button because no flow name input field in the pop ups window')
        //Add random number to the name of the new flow
        .setValue(FlowsSelector.elements.FlowNameInput, FlowName.getThenameOfTheNewFlow())
        .keys(browser.Keys.ENTER)
    })
    .pause(configrationReader.getPauseValue());
}
//Check if back button is display To check if creating Flow is done successfully
exports.CheckBackButton = (browser) => {
  browser
    //Check if back button is display To check if creating Flow is done successfully
    .waitForElementVisible(FlowsSelector.elements.BackButton, configrationReader.getPeriod(), 'Test was failed after you click on Submit button in the pop ups window that the new flow does not done successfully')
    .assert.elementPresent(FlowsSelector.elements.BackButton, 'The assertion failed after you click on Submit button in the pop ups window that the new flow does not done successfully')
    .waitForElementVisible(FlowsSelector.elements.FlowNameonBackButton, 'Test was failed after you click on Submit button in the pop ups window that the new flow does not done successfully')
    .assert.elementPresent(FlowsSelector.elements.FlowNameonBackButton, 'The assertion failed after you click on Submit button in the pop ups window that the name of the new flow does not display on the Back button')
    .pause(configrationReader.getPauseValue());
}

//Edit flow
exports.EditFlow = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    //Click on Flows Link in Navigation Bar
    .assert.elementPresent(FlowsSelector.elements.NavFlows, 'The assertion failed because the Flows Link was not found in the Main Navigation Bar')
    .click(FlowsSelector.elements.NavFlows, function (result) {
      browser
        //In flow card click on ":" to see the menu
        .assert.elementPresent(FlowsSelector.elements.FlowMenu, 'The assertion failed because the Flow Menu was not found in the Flow card')
        .click(FlowsSelector.elements.FlowMenu, function (result) {
          browser
            //click on Edit Link
            .assert.elementPresent(FlowsSelector.elements.Edit, 'The assertion failed After you click on Flow menu icon because Edit Link was not found in it')
            .click(FlowsSelector.elements.Edit, function (result) {
              browser
                //after you click on "edit" link , the flow should open and thats test by check if DataSorce button is display or not
                .waitForElementVisible(FlowsSelector.elements.DataSourcesButton, 'Test was failed After you click on Edit Link because the link does not take you to correct Page')
                .assert.elementPresent(FlowsSelector.elements.DataSourcesButton, 'The assertion failed After you click on Edit Link because the link does not take you to correct Page')
            })
        })
    })
    .pause(configrationReader.getPauseValue());
}


//Delete Flow
exports.DeleteFlow = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    //Click on Flows Link in Navigation Bar
    .assert.elementPresent(FlowsSelector.elements.NavFlows, 'The assertion failed because the Flows Link was not found in the Main Navigation Bar')
    .click(FlowsSelector.elements.NavFlows, function (result) {
      browser
        .assert.visible(FlowsSelector.elements.FlowMenu, 'The assertion failed because the Flow Menu was not found in the Flow card')
        .click(FlowsSelector.elements.FlowMenu, function (result) {
          browser
            .assert.elementPresent(FlowsSelector.elements.Edit, 'The assertion failed After you click on Flow menu icon because Edit Link was not found in it')
            .assert.elementPresent(FlowsSelector.elements.Delete, 'The assertion failed After you click on Flow menu icon because Delete Link was not found in it')
            .assert.elementPresent(FlowsSelector.elements.Copy, 'The assertion failed After you click on Flow menu icon because Copy Link was not found in it')
            .click(FlowsSelector.elements.Delete)
        })
    })

    .pause(configrationReader.getPauseValue());
}


// Card in Flows Page
exports.FlowCard = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .click(FlowsSelector.elements.NavFlows, function (result) {
      browser
        .assert.elementPresent(FlowsSelector.elements.FlowCount, 'The assertion failed because Flow count was not displayed in the card')
        .assert.elementPresent(FlowsSelector.elements.CardBodyChart, 'The assertion failed because the Card Body Chart was not displayed in the card')
        .assert.elementPresent(FlowsSelector.elements.CardBodyInfo, 'The assertion failed because the Card Body Info was not displayed in the card')
        .assert.elementPresent(FlowsSelector.elements.Author, 'The assertion failed because the Author was not displayed in the card')
        .assert.elementPresent(FlowsSelector.elements.FlowName, 'The assertion failed because the Flow Name was not displayed in the card')
        .assert.containsText(FlowsSelector.elements.CardBodyChart, 'GINI', 'The assertion failed because the Card Body Chart does not contains GINI word')

    })


    .pause(configrationReader.getPauseValue());
}


//Sort By name
exports.SortByName = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .click(FlowsSelector.elements.NavFlows, function (result) {
      browser
        .waitForElementVisible(FlowsSelector.elements.SpanForName, 'Test was failed because the sort by Name was not displayed in Flows Page')
        .click(FlowsSelector.elements.SpanForName)
    })
    .pause(configrationReader.getPauseValue());
}

//Sort by Gini
exports.SortByGini = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .assert.elementPresent(FlowsSelector.elements.NavFlows, 'The assertion failed because the Flows Link was not found in the Main Navigation Bar')
    .click(FlowsSelector.elements.NavFlows, function (result) {
      browser
        .assert.elementPresent(FlowsSelector.elements.SpanForGini, 'The assertion failed because the sort by Gini was not displayed in Flows Page')
        .click(FlowsSelector.elements.SpanForGini)
    })
    .pause(configrationReader.getPauseValue());
}

//Sort by Date Created
exports.SortByDateCreated = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .assert.elementPresent(FlowsSelector.elements.NavFlows, 'The assertion failed because the Flows Link was not found in the Main Navigation Bar')
    .click(FlowsSelector.elements.NavFlows, function (result) {
      browser
        .assert.elementPresent(FlowsSelector.elements.SpanForDatecreated, 'The assertion failed because the sort by Date created was not displayed in Flows Page')
        .click(FlowsSelector.elements.SpanForDatecreated)

    })
    .pause(configrationReader.getPauseValue());
}

//no file chosen
exports.NoFileChosen = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(FlowsSelector.elements.UploadBtn, 'Test was failed because select file button was not displayed in the new flow page')
    .assert.elementPresent(FlowsSelector.elements.UploadBtn, 'The assertion failed because select file button was not displayed in the new flow page')
    .assert.elementPresent(FlowsSelector.elements.EmptyInput, 'The assertion failed because there is no file uploaded but the msg for empty input was not displayed')
    .assert.containsText(FlowsSelector.elements.EmptyInput, 'No file chosen', 'The assertion failed because there is no file uploaded but the msg was not displayed that no file chosen')
    .pause(configrationReader.getPauseValue());
}

//extension of the file not csv
exports.ExtensionOfTheFileUploaded = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(FlowsSelector.elements.UploadBtn, 'Test was failed because select file button was not displayed in the new flow page')
    .assert.elementPresent(FlowsSelector.elements.UploadBtn, 'The assertion failed because select file button was not displayed in the new flow page')
    .assert.elementPresent(FlowsSelector.elements.InputFileId, 'The assertion failed because the Input field for the file was not displayed in the new flow page')
    .setValue(FlowsSelector.elements.InputFileId, require('path').resolve(__dirname + '/Data/NotCorrectExtensionOfTheFileUploaded.txt'))
    .assert.containsText(FlowsSelector.elements.ErrorInput, 'Selected file type not allowed', 'The assertion failed because error msg was not displayed even though the extension for the file is not CSV ')
    .pause(configrationReader.getPauseValue());
}

//Upload CSV File
exports.UploadFile = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(FlowsSelector.elements.UploadBtn, 'Test was failed because select file button was not displayed in the new flow page')
    .assert.elementPresent(FlowsSelector.elements.UploadBtn, 'The assertion failed because select file button was not displayed in the new flow page')
    .assert.elementPresent(FlowsSelector.elements.InputFileId, 'The assertion failed because the Input field for the file was not displayed in the new flow page')
    .setValue(FlowsSelector.elements.InputFileId, require('path').resolve(__dirname + '/Data/UCI_Credit_Card.csv'))
    .pause(configrationReader.getLongWait())

}

//
//Upload File With null Values
exports.UploadFileWithNullValues = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(FlowsSelector.elements.UploadBtn, 'Test was failed because select file button was not displayed in the new flow page')
    .assert.elementPresent(FlowsSelector.elements.UploadBtn, 'The assertion failed because select file button was not displayed in the new flow page')
    .assert.elementPresent(FlowsSelector.elements.InputFileId, 'The assertion failed because the Input field for the file was not displayed in the new flow page')
    .setValue(FlowsSelector.elements.InputFileId, require('path').resolve(__dirname + '/Data/UCI_Credit_Card_With_Null_Values.csv'))
    .pause(configrationReader.getDelayValue())

}
//Check after You upload the file, if File Information section have the correct data and check Data if are display in Preview Data section
exports.CheckDataAfterYouUploadFile = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(FlowsSelector.elements.FileInformation, 'Test was failed because File Information was not displayed after you Upload File')
    .assert.elementPresent(FlowsSelector.elements.FileInformation, 'The assertion failed because File Information was not displayed after you Upload File')
    .waitForElementVisible(FlowsSelector.elements.Name, 'Test was failed because the File Name in File Information section was not displayed after you Upload File')
    .assert.elementPresent(FlowsSelector.elements.Name, 'The assertion failed because the File Name in File Information section was not displayed after you Upload File')
    .waitForElementVisible(FlowsSelector.elements.Type, 'Test was failed because the Type of the Upladed file in File Information section was not displayed after you Upload File')
    .assert.elementPresent(FlowsSelector.elements.Type, 'The assertion failed because the Type of the Upladed file in File Information section was not displayed after you Upload File')
    .waitForElementVisible(FlowsSelector.elements.Columns, 'Test was failed because the Columns number in File Information section was not displayed after you Upload File')
    .assert.elementPresent(FlowsSelector.elements.Columns, 'The assertion failed because the Columns number in File Information section was not displayed after you Upload File')
    .assert.elementPresent(FlowsSelector.elements.NameOfThefile, 'The assertion failed because the File Name in File Information section was not displayed after you Upload File')
    .assert.containsText(FlowsSelector.elements.NameOfThefile, configrationReader.getTheFileInformation_Name(), 'The assertion failed because the File Name in File Information section was not match with the uploaded file name after you Upload File')
    .assert.containsText(FlowsSelector.elements.NumberOfColumns, configrationReader.getTheFileInformation_Columns(), 'The assertion failed because the number of columns in File Information section was not match with the number of columns for the uploaded file')
    .assert.containsText(FlowsSelector.elements.TypeOfTheFile, configrationReader.getTheFileInformation_Type(), 'The assertion failed because the Type of the file in File Information section was not match with the uploaded file type after you Upload File')

    .waitForElementVisible(FlowsSelector.elements.PreviewData, 'Test was failed because Preview Data section was not displayed after you Upload File')
    .assert.elementPresent(FlowsSelector.elements.PreviewData, 'The assertion failed because Preview Data section was not displayed after you Upload File')
    .waitForElementVisible(FlowsSelector.elements.SearchByFeatureName, 'Test was failed because the Search input field was not exists in Preview Data section')
    .assert.elementPresent(FlowsSelector.elements.SearchByFeatureName, 'The assertion failed because the Search input field was not exists in Preview Data section')
    .waitForElementVisible(FlowsSelector.elements.Table, 'Test was failed because the Table was not displayed in Preview Data section after you Upload File')
    .assert.elementPresent(FlowsSelector.elements.Table, 'The assertion failed because the Table was not displayed in Preview Data section after you Upload File')
    .waitForElementVisible(FlowsSelector.elements.TableRowItem, 'Test was failed because there is no items in the table after you Upload File')
    .assert.elementPresent(FlowsSelector.elements.TableRowItem, 'The assertion failed because there is no items in the table after you Upload File')

    .pause(configrationReader.getPauseValue());
}

//Not valid Label
exports.SelectNotValidLabel = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(FlowsSelector.elements.SelectLabelInput, 'Test was failed because Label Input was not displayed in the flow page')
    .assert.elementPresent(FlowsSelector.elements.SelectLabelInput, 'The assertion failed because Label Input was not displayed in the flow page')
    .click(FlowsSelector.elements.SelectLabelInput, function (result) {
      browser
        .waitForElementVisible(FlowsSelector.elements.LabelMenuVisible, configrationReader.getPeriod(), 'Test was failed After you click on the Label Input because the dropdown for Labels was not displayed')
        .assert.elementPresent(FlowsSelector.elements.LabelMenuVisible, 'The assertion failed After you click on the Label Input because the dropdown for Labels was not displayed')
        .setValue(FlowsSelector.elements.SelectLabelInput, configrationReader.getNotValidLabel())
        .click(FlowsSelector.elements.FirstElementinLabelList)
        //.keys(browser.Keys.ENTER)
        .pause(configrationReader.getPauseValue())
        .waitForElementVisible(FlowsSelector.elements.LabelWarning, 'Test was failed After you select the Label because the error msg was not displayed even though you select the not valid label')
        .assert.elementPresent(FlowsSelector.elements.LabelWarning, 'The assertion failed After you select the Label because the error msg was not displayed even though you select the not valid label')
        .assert.containsText(FlowsSelector.elements.LabelWarning, 'Selected column has more than two values')
    })
    .pause(configrationReader.getPauseValue());
}

//Valid Label
exports.SelectValidLabel = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(FlowsSelector.elements.SelectLabelInput, 'Test was failed because Label Input was not displayed in the flow page')
    .assert.elementPresent(FlowsSelector.elements.SelectLabelInput, 'The assertion failed because Label Input was not displayed in the flow page')
    .click(FlowsSelector.elements.SelectLabelInput, function (result) {
      browser
        .waitForElementVisible(FlowsSelector.elements.LabelMenuVisible, configrationReader.getPeriod(), 'Test was failed After you click on the Label Input because the dropdown for Labels was not displayed')
        .assert.elementPresent(FlowsSelector.elements.LabelMenuVisible, 'The assertion failed After you click on the Label Input because the dropdown for Labels was not displayed')
        .setValue(FlowsSelector.elements.SelectLabelInput, configrationReader.getValidLabel())
        .pause(configrationReader.getDelayValue())
        .click(FlowsSelector.elements.FirstElementinLabelList)
        // .keys(browser.Keys.ENTER)
        .pause(configrationReader.getLongWait())
        .waitForElementVisible(FlowsSelector.elements.PieChart, 'Test was failed After you select the Label because the PieChart was not displayed even though you select the valid label')
        .assert.elementPresent(FlowsSelector.elements.PieChart, 'The assertion failed After you select the Label because the PieChart was not displayed even though you select the valid label')
    })
    .pause(configrationReader.getPauseValue());
}

//Run DataSources
exports.RunDataSources = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(FlowsSelector.elements.DataSourcesButton, 'Test was failed because the DataSources button was not found in flow Page')
    .assert.elementPresent(FlowsSelector.elements.DataSourcesButton, 'The assertion failed because the DataSources button was not found in flow Page')
    .click(FlowsSelector.elements.DataSourcesButton)
    .pause(configrationReader.getPauseValue())
    .assert.not.elementPresent(FlowsSelector.elements.AutoFGButtonDisabled, 'The assertion failed because Auto FG Button was disabled for the flow')
    .pause(configrationReader.getDelayValue());
}

//Verify No error displayed in the log file
exports.VerifyTheLogFile = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(FlowsSelector.elements.FlowLogButton, configrationReader.getPeriod(), false, 'Test was failed because the Flow log icon was not found in flow Page')
    .assert.elementPresent(FlowsSelector.elements.FlowLogButton, 'The assertion failed because the Flow log icon was not found in flow Page')
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
    .pause(configrationReader.getPauseValue());
}

//Verify Data Sources section is displayed as expected
exports.VerifyDatasourceSection = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(FlowsSelector.elements.HeaderOfDataSourceSection, configrationReader.getPeriod(), 'Test was failed because the Header of the Data Source section was not exists')
    .assert.elementPresent(FlowsSelector.elements.HeaderOfDataSourceSection, 'The assertion failed because the Header of the Data Source section was not exists')
    .assert.containsText(FlowsSelector.elements.HeaderOfDataSourceSection, 'Data Sources', 'The assertion failed because The Title of Data Source section was not displayed as Data Sources')
    .waitForElementVisible(FlowsSelector.elements.RemoveAllButton, configrationReader.getPeriod(), 'Test was failed because Remove All Button was not displayed in the Header')
    .assert.elementPresent(FlowsSelector.elements.RemoveAllButton, 'The assertion failed because Remove All Button was not displayed in the Header')
    .assert.containsText(FlowsSelector.elements.RemoveAllButton, 'Remove all', 'The assertion failed because the Button in the header was not contained Remove All word')
    .waitForElementVisible(FlowsSelector.elements.FileNameButton, configrationReader.getPeriod(), 'Test was failed because File Name Button was not displayed')
    .assert.elementPresent(FlowsSelector.elements.FileNameButton, 'The assertion failed because File Name Button was not displayed')
    .assert.containsText(FlowsSelector.elements.FileNameButton, configrationReader.getTheFileInformation_Name(), 'The assertion failed because the File Name Button was not contained the name of the File Uploaded')
    .waitForElementVisible(FlowsSelector.elements.AddDataSourceButton, 'Test was failed because Add Data Source Button was not displayed')
    .assert.elementPresent(FlowsSelector.elements.AddDataSourceButton, 'The assertion failed because Add Data Source Button was not displayed')
    .assert.containsText(FlowsSelector.elements.AddDataSourceButton, 'Add Data Source', 'The assertion failed because Add Data Source Button was not contained Add Data Source word')
    .assert.elementPresent(FlowsSelector.elements.CombinedRows, 'The assertion failed because Combined Rows value was not displayed')
    .assert.containsText(FlowsSelector.elements.CombinedRows, configrationReader.getNumberOfCombinedRows(), 'The assertion failed because Combined Rows value was not displayed correctly as the Combined Rows value for the uploaded file')
    .assert.elementPresent(FlowsSelector.elements.RowsAfterFiltering, 'The assertion failed because the Rows After Filtering value was not displayed')
    .assert.containsText(FlowsSelector.elements.RowsAfterFiltering, configrationReader.getNumberOfRowsAfterFiltering(), 'The assertion failed because the Rows After Filtering value was not displayed correctly as the Rows After Filtering value for the uploaded file')
    .assert.elementPresent(FlowsSelector.elements.ColumnsInDataSourceSection, 'The assertion failed because the Columns value was not displayed')
    .assert.containsText(FlowsSelector.elements.ColumnsInDataSourceSection, configrationReader.getNumberOfColumns(), 'The assertion failed because the Columns value was not displayed correctly as the Columns value for the uploaded file')

}

//Preview data - search by feature name is working as expected 
exports.SearchByfeatureName = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    //check if Search input field is exists or not
    .waitForElementVisible(FlowsSelector.elements.SearchByFeatureName, 'Test was failed because the Search input field was not exists in Preview Data section')
    .assert.elementPresent(FlowsSelector.elements.SearchByFeatureName, 'The assertion failed because the Search input field was not exists in Preview Data section')
    //set the search field input to search on "LIMIT_BAL" , this value was declared in Config.ini
    .setValue(FlowsSelector.elements.SearchByFeatureName, configrationReader.getFeatureName())
    //check if the search result is correct 
    .assert.elementPresent(FlowsSelector.elements.FirstColumninTable, 'The assertion failed because No Result value was displayed for what you searched on')
    //check if first column is what you searched about
    .assert.containsText(FlowsSelector.elements.FirstColumninTable, configrationReader.getFeatureName(), 'The assertion failed because the Result does not match what you serached on')
}

//Check if Data are displayed in Columns tab
exports.CheckColumnsTab = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .assert.elementPresent(FlowsSelector.elements.ColumnsTab, 'The assertion failed because Columns Tab was not exist in Data Source Details Section')
    .pause(configrationReader.getPauseValue())
    .click(FlowsSelector.elements.ColumnsTab)
    .assert.elementPresent(FlowsSelector.elements.Table, 'The assertion failed After you Click on Columns Tab because the Table was not displayed')
    .assert.elementPresent(FlowsSelector.elements.SwitcherBoxColumn, 'The assertion failed After you Click on Columns Tab because the Switcher box column was not displayed')
    .assert.elementPresent(FlowsSelector.elements.NameColumn, 'The assertion failed After you Click on Columns Tab because the Name column was not displayed')
    .assert.elementPresent(FlowsSelector.elements.ID, 'The assertion failed because the ID Row was not display')
    .assert.containsText(FlowsSelector.elements.ID, configrationReader.getFeature(), 'The assertion failed because the ID Row was not contained ID as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.RoleColumn, 'The assertion failed After you Click on Columns Tab because the Role Column was not displayed')
    .assert.elementPresent(FlowsSelector.elements.TypeColumn, 'The assertion failed After you Click on Columns Tab because the Type Column was not displayed')
    .assert.elementPresent(FlowsSelector.elements.CardinalityColumn, 'The assertion failed After you Click on Columns Tab because the Cardinality Column was not displayed')
    .assert.elementPresent(FlowsSelector.elements.NullRatioColumn, 'The assertion failed After you Click on Columns Tab because the NullRatio Column was not displayed')
    .assert.elementPresent(FlowsSelector.elements.PreviewColumn, 'The assertion failed After you Click on Columns Tab because the Preview Column was not displayed')
}

//Columns - search by feature name is working as expected 
exports.SearchByFeatureNameInColumnTab = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .assert.elementPresent(FlowsSelector.elements.ColumnsTab, 'The assertion failed because Columns Tab was not exist in Data Source Details Section')
    .pause(configrationReader.getDelayValue())
    .click(FlowsSelector.elements.ColumnsTab, function (result) {
      //check if Search input field is exists or not
      browser
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(FlowsSelector.elements.SearchByColumn, 'The assertion failed because the Search input field was not exists in Columns tab')
        //set the search field input to search on "LIMIT_BAL" , this value was declared in Config.ini
        .setValue(FlowsSelector.elements.SearchByColumn, configrationReader.getFeatureName())
        //check if the search result is correct 
        .waitForElementVisible(FlowsSelector.elements.FirstRowInTable, 'Test was failed because No Result value was displayed for what you searched on')
        //check if first column is what you searched about
        .assert.containsText(FlowsSelector.elements.FirstRowInTable, configrationReader.getFeatureName(), 'The assertion failed because the Result does not match what you serached on')
        .pause(configrationReader.getPauseValue());
    });
}
//Check if Data are displayed in Statistics tab
exports.CheckStatisticsTab = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads

    .assert.elementPresent(FlowsSelector.elements.StatisticsTab, 'The assertion failed because Columns Tab was not exist in Data Source Details Section')
    .pause(configrationReader.getPauseValue())
    .click(FlowsSelector.elements.StatisticsTab)
    .assert.elementPresent(FlowsSelector.elements.Table, 'The assertion failed After you Click on Statistics Tab because the Table was not displayed')
    .assert.elementPresent(FlowsSelector.elements.FeatureName, 'The assertion failed After you Click on Statistics Tab because the Feature Name column was not displayed')
    .assert.elementPresent(FlowsSelector.elements.ID, 'The assertion failed because the ID Row was not display')
    .assert.containsText(FlowsSelector.elements.ID, configrationReader.getFeature(), 'The assertion failed because the ID Row was not contained ID as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.CountValues, 'The assertion failed After you Click on Statistics Tab because the Count Values Column was not displayed')
    .assert.elementPresent(FlowsSelector.elements.UniqueCount, 'The assertion failed After you Click on Statistics Tab because the Unique Count Column was not displayed')
    .assert.elementPresent(FlowsSelector.elements.NullRatio, 'The assertion failed After you Click on Statistics Tab because the Null Ratio Column was not displayed')
    .assert.elementPresent(FlowsSelector.elements.Mean, 'The assertion failed After you Click on Statistics Tab because the Mean Column was not displayed')
    .assert.elementPresent(FlowsSelector.elements.Stdv, 'The assertion failed After you Click on Statistics Tab because the Stdv Column was not displayed')
    .assert.elementPresent(FlowsSelector.elements.MinValue, 'The assertion failed After you Click on Statistics Tab because the Min Value Column was not displayed')
    .assert.elementPresent(FlowsSelector.elements.the25Percentile, 'The assertion failed After you Click on Statistics Tab because the 25th Percentile Column was not displayed')
    .assert.elementPresent(FlowsSelector.elements.Median, 'The assertion failed After you Click on Statistics Tab because the Median Column was not displayed')
    .assert.elementPresent(FlowsSelector.elements.the75Percentile, 'The assertion failed After you Click on Statistics Tab because the 75thPercentile Column was not displayed')
    .assert.elementPresent(FlowsSelector.elements.MaxValue, 'The assertion failed After you Click on Statistics Tab because the Max Value Column was not displayed')
    .assert.elementPresent(FlowsSelector.elements.MostCommonFrequency, 'The assertion failed After you Click on Statistics Tab because the Most Common Frequency Column was not displayed')
    .assert.elementPresent(FlowsSelector.elements.MostCommonValue, 'The assertion failed After you Click on Statistics Tab because the Most Common Value Column was not displayed')
    .pause(configrationReader.getPauseValue())
}

//Check if Search By Feature Name is working as expected In Statistics tab
exports.SearchByFeatureNameInStatisticsTab = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .assert.elementPresent(FlowsSelector.elements.StatisticsTab, 'The assertion failed because Columns Tab was not exist in Data Source Details Section')
    .pause(configrationReader.getDelayValue())
    .click(FlowsSelector.elements.StatisticsTab, function (result) {
      //check if Search input field is exists or not
      browser
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(FlowsSelector.elements.SearchByColumn, 'The assertion failed because the Search input field was not exists in Statistics tab')
        //set the search field input to search on "LIMIT_BAL" , this value was declared in Config.ini
        .setValue(FlowsSelector.elements.SearchByColumn, configrationReader.getFeatureName())
        //check if the search result is correct 
        .waitForElementVisible(FlowsSelector.elements.FirstRowInTable, configrationReader.getPeriod(), 'Test was failed because No Result value was displayed for what you searched on')
        //check if first column is what you searched about
        .assert.containsText(FlowsSelector.elements.FirstRowInTable, configrationReader.getFeatureName(), 'Test was failed because the Result does not match what you serached on')
        .pause(configrationReader.getDelayValue());
    })
    .pause(configrationReader.getDelayValue());
}

//Delete a column that was added to the Central Data Source table, use the slider in the Columns tab, Verify that this column will no longer be in the Data Panel.
exports.DeleteColumn = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .assert.elementPresent(FlowsSelector.elements.ColumnsTab, 'The assertion failed because Columns Tab was not exist in Data Source Details Section')
    //Add this pause value to make delay while the tabs are loading
    .pause(configrationReader.getDelayValue())
    //Click on Columns tab
    .click(FlowsSelector.elements.ColumnsTab, function (result) {
      browser
        //delay
        .pause(configrationReader.getPauseValue())
        //check if Search input field is exists or not
        .assert.elementPresent(FlowsSelector.elements.SearchByColumn, 'The assertion failed because the Search input field was not exists in Statistics tab')
        //set the search field input to search on "LIMIT_BAL" , this value was declared in Config.ini
        .setValue(FlowsSelector.elements.SearchByColumn, configrationReader.getFeatureName())
        //Check the switcher box column if is display
        .assert.elementPresent(FlowsSelector.elements.SwitcherBoxColumn)
        //click on Switcher box to delete this column "LIMIT_BAL" 
        .click(FlowsSelector.elements.SwitcherBoxColumn)
        .pause(configrationReader.getPeriod())
        //Go to Preview Data Tab to verify that this column will no longer be in the Data Panel. 
        .click(FlowsSelector.elements.PreviewData)
        .assert.elementPresent(FlowsSelector.elements.SearchByFeatureName)
        //search on "LIMIT_BAL"
        .setValue(FlowsSelector.elements.SearchByFeatureName, configrationReader.getFeatureName())
        .pause(configrationReader.getPauseValue())
        //Msg No columns should display When you search on deleted column
        .assert.elementPresent(FlowsSelector.elements.NoColumnsMsg)
        .assert.containsText(FlowsSelector.elements.NoColumnsMsg, 'No columns to preview')
        .pause(configrationReader.getPauseValue());
    })
    .pause(configrationReader.getPauseValue());
}

//Add another CSV file
exports.AddAnotherCSVFile = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .assert.elementPresent(FlowsSelector.elements.AddDataSourceButton, 'The assertion failed because Add Data Source Button was not display in Flow Page')
    .click(FlowsSelector.elements.AddDataSourceButton)
    .waitForElementVisible(FlowsSelector.elements.UploadBtn, 'Test was failed because select file button was not displayed in the new flow page')
    .assert.elementPresent(FlowsSelector.elements.UploadBtn, 'The assertion failed because select file button was not displayed in the new flow page')
    .assert.elementPresent(FlowsSelector.elements.InputFileId, 'The assertion failed because the Input field for the file was not displayed in the new flow page')
    //Add another file
    .setValue(FlowsSelector.elements.InputFileId, require('path').resolve(__dirname + '/Data/UCI_Birth_Dates.csv'))
    .pause(configrationReader.getLongWait())
    .assert.elementPresent(FlowsSelector.elements.NameOfThefile, 'The assertion failed because the File Name in File Information section was not displayed after you Upload File')
    .assert.containsText(FlowsSelector.elements.NameOfThefile, configrationReader.getTheFileInformation_NameForSecondFile(), 'The assertion failed because the File Name in File Information section was not match with the uploaded file name after you Upload File')
    .pause(configrationReader.getPauseValue())
}

exports.SelectJoinValue = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    //Add join value 
    .assert.elementPresent(FlowsSelector.elements.FirstJoinField)
    .setValue(FlowsSelector.elements.FirstJoinField, configrationReader.getJoinValue())
    .pause(configrationReader.getPauseValue())
    .click(FlowsSelector.elements.FirstElement)
    .pause(configrationReader.getPauseValue())
    .assert.elementPresent(FlowsSelector.elements.SecondjoinField)
    .setValue(FlowsSelector.elements.SecondjoinField, configrationReader.getJoinValue())
    .pause(configrationReader.getPauseValue())
    .click(FlowsSelector.elements.FirstElement)
    .pause(configrationReader.getLongWait())

}

//Delete The Second CSV File
exports.DeleteCSVFile = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .assert.elementPresent(FlowsSelector.elements.NumberOfColumns, 'The assertion failed because the number of columns in File Information section was not displayed')
    .assert.containsText(FlowsSelector.elements.NumberOfColumns, configrationReader.getNumberOfColumnsFortheSecondFile(), 'The assertion failed because the number of columns in File Information section was not match with the number of columns for the uploaded file')
    .assert.elementPresent(FlowsSelector.elements.ColumnsInDataSourceSection, 'The assertion failed because the Columns value was not displayed')
    .assert.containsText(FlowsSelector.elements.ColumnsInDataSourceSection, configrationReader.getNumberOfColumnsafterUploadingTwoFiles(), 'The assertion failed because the Columns value was not displayed correctly as the Columns value for the uploaded file')
    .assert.elementPresent(FlowsSelector.elements.RemoveIcon, 'The assertion failed because the Remove icon was not displayed')
    //click on remove icon to delete the second CSV file
    .click(FlowsSelector.elements.RemoveIcon)
    .click(FlowsSelector.elements.DataSourcesButton)
    //delay
    .pause(configrationReader.getPauseValue())
    //check the columns value after you delete the second CSV file
    .assert.containsText(FlowsSelector.elements.ColumnsInDataSourceSection, configrationReader.getNumberOfColumns(), 'The assertion failed because the Columns value was not displayed correctly as the Columns value for the uploaded file')
    .pause(configrationReader.getPauseValue());

}
//Delete All Data Sources
exports.DeleteAllDataSource = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .assert.elementPresent(FlowsSelector.elements.RemoveAllButton, 'The assertion failed because Remove all button was not displayed in Flow Page')
    //click on remove all button
    .click(FlowsSelector.elements.RemoveAllButton)
    .assert.elementPresent(FlowsSelector.elements.ModalForRemoveDataSource, 'The assertion failed after you click on Remove all button because no madal was displayed for Removing')
    .assert.elementPresent(FlowsSelector.elements.SubmitButtonInRemoveModal, 'The assertion failed because no submit button in the Removing Modal')
    .pause(configrationReader.getPauseValue())
    //Click on submit button to remove all data source
    .click(FlowsSelector.elements.SubmitButtonInRemoveModal)
    //delay
    .pause(configrationReader.getPauseValue())
    //if Add Master Data Source was display then all Data sources was deleted 
    .assert.elementPresent(FlowsSelector.elements.AddMasterDataSourceButton, 'The assertion failed after you Remove all data source because the Add Master Data Source Button was not displayed')
    .assert.containsText(FlowsSelector.elements.AddMasterDataSourceButton, 'Add Master Data Source', 'The assertion failed after you Remove all data source because the button was not contained Add Master Data Source which indicates that all data sources are not deleted')
    // check if "No file chosen" msg is display or not after you remove all data sources
    .assert.elementPresent(FlowsSelector.elements.EmptyInput, 'The assertion failed After you click on Remove all button because the msg for empty input was not displayed')
    .assert.containsText(FlowsSelector.elements.EmptyInput, 'No file chosen', 'The assertion failed because there is no file uploaded but the msg was not displayed that no file chosen after you click on Remove All button')

}

//Flow edit nav header
exports.IsFlowEditNavHeaderDisplay = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .assert.elementPresent(FlowsSelector.elements.FlowEditHeader, 'The assertion failed because Flow Edit Nav Header was not displayed after you create new flow')
    .assert.elementPresent(FlowsSelector.elements.BackButton, 'The assertion failed because Flow name button was not displayed in Flow edit nav header')
    .assert.elementPresent(FlowsSelector.elements.TransformationButton, 'The assertion failed because Transformation Button was not displayed in Flow edit nav header')
    .assert.elementPresent(FlowsSelector.elements.AutoFGButton, 'The assertion failed because AutoFG Button was not displayed in Flow edit nav header')
    .assert.elementPresent(FlowsSelector.elements.ExperimentsButton, 'The assertion failed because Experiments Button was not displayed in Flow edit nav header')
    .assert.elementPresent(FlowsSelector.elements.FlowLogButton, 'The assertion failed because Bell Button was not displayed in Flow edit header')
    .assert.elementPresent(FlowsSelector.elements.RunFlowButton, 'The assertion failed because Run Flow Button was not displayed in Flow edit header')
    .assert.elementPresent(FlowsSelector.elements.StopFlowButton, 'The assertion failed because Stop Flow Button was not displayed in Flow edit header')

    .pause(configrationReader.getPauseValue())

}
//Flow name button navigates to flow manager dashbord
exports.FlowNameButton = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .assert.elementPresent(FlowsSelector.elements.FlowEditHeader, 'The assertion failed because Flow Edit Nav Header was not displayed after you create new flow')
    .assert.elementPresent(FlowsSelector.elements.BackButton, 'The assertion failed because Flow name button was not displayed in Flow edit nav header')
    //click on Flow Name button
    .click(FlowsSelector.elements.BackButton)
    .pause(configrationReader.getPauseValue())
    //check after you click if it takes you to flow Manager Dashboard
    .assert.elementPresent(FlowsSelector.elements.FlowManagerTitle, 'The assertion failed after you click on Flow name button Button because it did not take you to correct Page')
    .assert.elementPresent(FlowsSelector.elements.FlowList, 'The assertion failed after you click on Flow name button Button because it did not take you to correct Page')
    .pause(configrationReader.getPauseValue())
}

//Transformations button navigates to transformations Page
exports.TransformationButton = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .assert.elementPresent(FlowsSelector.elements.FlowEditHeader, 'The assertion failed because Flow Edit Nav Header was not displayed after you create new flow')
    .assert.elementPresent(FlowsSelector.elements.TransformationButton, 'The assertion failed because Transformation Button was not displayed in Flow edit nav header')
    .click(FlowsSelector.elements.TransformationButton)
    .pause(configrationReader.getPauseValue())
    .assert.elementPresent(FlowsSelector.elements.TransformationTab, 'The assertion failed after you click on Transformation Button because it did not take you to correct Page')
    .pause(configrationReader.getPauseValue())

}

//AutoFG navigates to AFG Page
exports.AutoFGButton = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .assert.elementPresent(FlowsSelector.elements.FlowEditHeader, 'The assertion failed because Flow Edit Nav Header was not displayed after you create new flow')
    .assert.elementPresent(FlowsSelector.elements.AutoFGButton, 'The assertion failed because AutoFG Button was not displayed in Flow edit nav header')
    .click(FlowsSelector.elements.AutoFGButton)
    .pause(configrationReader.getPauseValue())
    .assert.elementPresent(FlowsSelector.elements.AutoFGPage)
    .pause(configrationReader.getPauseValue())

}

//Experiments navigates to experiments Page
exports.ExperimentsButton = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .assert.elementPresent(FlowsSelector.elements.FlowEditHeader, 'The assertion failed because Flow Edit Nav Header was not displayed after you create new flow')
    .assert.elementPresent(FlowsSelector.elements.ExperimentsButton, 'The assertion failed because Experiments Button was not displayed in Flow edit nav header')
    .click(FlowsSelector.elements.ExperimentsButton)
    .pause(configrationReader.getPauseValue())
    .assert.elementPresent(FlowsSelector.elements.ExperimentSideBar, 'The assertion failed after you click on Experiments Button because it did not take you to correct Page')
    .pause(configrationReader.getPauseValue())

}

//verify if Bell button opens the messages dialog
exports.BellButton = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .assert.elementPresent(FlowsSelector.elements.FlowEditHeader, 'The assertion failed because Flow Edit Nav Header was not displayed after you create new flow')
    .assert.elementPresent(FlowsSelector.elements.FlowLogButton, 'The assertion failed because Bell Button was not displayed in Flow edit header')
    .click(FlowsSelector.elements.FlowLogButton)
    .pause(configrationReader.getPauseValue())
    .assert.elementPresent(FlowsSelector.elements.LogWindow, 'The assertion failed after you click on Bell Button because the Log window was not displayed')
    .assert.containsText(FlowsSelector.elements.LogWindow, 'Flow Log')
    .pause(configrationReader.getPauseValue())
}

//verify if Stop flow is disabled for new flow
exports.StopFlow = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .assert.elementPresent(FlowsSelector.elements.FlowEditHeader, 'The assertion failed because Flow Edit Nav Header was not displayed after you create new flow')
    .pause(configrationReader.getPauseValue())
    //make sure that stop flow button was displayed in Flow Edit Header
    .assert.elementPresent(FlowsSelector.elements.StopFlowButton, 'The assertion failed because Stop Flow Button was not displayed in Flow Edit Header')
    //check if attribute disabled is true or not 
    .getAttribute(FlowsSelector.elements.StopFlowButton, 'disabled', function (result) {
      browser
        .assert.equal(result.value, 'true', 'The assertion failed because Stop Flow Button was enabled for the new flow');
    })
    .click(FlowsSelector.elements.StopFlowButton, function (result) {
      browser
        .pause(configrationReader.getPauseValue())
    })
    //delay
    .pause(configrationReader.getPauseValue())
}

//verify if Run flow is disabled for new flow (tool tip explains why)
exports.RunFlow = (browser) => {

  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .assert.elementPresent(FlowsSelector.elements.FlowEditHeader, 'The assertion failed because Flow Edit Nav Header was not displayed after you create new flow')
    .pause(configrationReader.getPauseValue())
    .assert.elementPresent(FlowsSelector.elements.RunFlowButton, 'The assertion failed because Run Flow Button was not displayed in Flow Edit Nav Header after you create new flow')
    .assert.elementPresent(FlowsSelector.elements.RunFlowDisabled, 'The assertion failed because Run Flow Button was enabled in Flow Edit Nav Header after you create new flow')
    .click(FlowsSelector.elements.RunFlowButton, function (result) {
      browser
        //make sure that Tool Tip was displayed 
        .assert.elementPresent(FlowsSelector.elements.ToolTipforRunFlow)
        .pause(configrationReader.getPauseValue())
    })
    //delay
    .pause(configrationReader.getPauseValue())
}