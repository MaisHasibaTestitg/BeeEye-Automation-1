const FlowsSelector = require("../Selectors/FlowsSelector");
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
    .assert.elementPresent(FlowsSelector.elements.NavFlows, 'Test was failed because the Flows Link was not found in the Main Navigation Bar')
    .click(FlowsSelector.elements.NavFlows)
    .waitForElementVisible(FlowsSelector.elements.AddFlowBtn, 'Test was failed because Add Flow Button was not found Flows Page')
    .assert.elementPresent(FlowsSelector.elements.AddFlowBtn, 'Test was failed because Add Flow Button was not found Flows Page')
    //Click on "+" Add flow button
    .click(FlowsSelector.elements.AddFlowBtn, function (result) {
      browser
        //pop up will appear to write the name of the new flow
        .waitForElementVisible(FlowsSelector.elements.PopUp, 'Test was failed after you click on Add flow button because no pop ups window displayed')
        .assert.elementPresent(FlowsSelector.elements.PopUp, 'Test was failed after you click on Add flow button because no pop ups window displayed')

        .waitForElementVisible(FlowsSelector.elements.FlowNameInput, 'Test was failed after you click on Add flow button because no flow name input field in the pop ups window')
        .assert.elementPresent(FlowsSelector.elements.FlowNameInput, 'Test was failed after you click on Add flow button because no flow name input field in the pop ups window')
        //Add random number to the name of the new flow
        .setValue(FlowsSelector.elements.FlowNameInput, FlowName.getThenameOfTheNewFlow())
        .keys(browser.Keys.ENTER)
    })
    //Check if back button is display To check if creating Flow is done successfully
    .waitForElementVisible(FlowsSelector.elements.BackButton, configrationReader.getPeriod(), 'Test was failed after you click on Submit button in the pop ups window that the new flow does not done successfully')
    .assert.elementPresent(FlowsSelector.elements.BackButton, 'Test was failed after you click on Submit button in the pop ups window that the new flow does not done successfully')
    .waitForElementVisible(FlowsSelector.elements.FlowNameonBackButton, 'Test was failed after you click on Submit button in the pop ups window that the new flow does not done successfully')
    .assert.elementPresent(FlowsSelector.elements.FlowNameonBackButton, 'Test was failed after you click on Submit button in the pop ups window that the name of the new flow does not display on the Back button')
    .pause(configrationReader.getPauseValue());
}




//Edit flow
exports.EditFlow = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    //Click on Flows Link in Navigation Bar
    .assert.elementPresent(FlowsSelector.elements.NavFlows, 'Test was failed because the Flows Link was not found in the Main Navigation Bar')
    .click(FlowsSelector.elements.NavFlows, function (result) {
      browser
        //In flow card click on ":" to see the menu
        .assert.elementPresent(FlowsSelector.elements.FlowMenu, 'Test was failed because the Flow Menu was not found in the Flow card')
        .click(FlowsSelector.elements.FlowMenu, function (result) {
          browser
            //click on Edit Link
            .assert.elementPresent(FlowsSelector.elements.Edit, 'Test was failed After you click on Flow menu icon because Edit Link was not found in it')
            .click(FlowsSelector.elements.Edit, function (result) {
              browser
                //after you click on "edit" link , the flow should open and thats test by check if DataSorce button is display or not
                .waitForElementVisible(FlowsSelector.elements.DataSourcesButton, 'Test was failed After you click on Edit Link because the link does not take you to correct Page')
                .assert.elementPresent(FlowsSelector.elements.DataSourcesButton, 'Test was failed After you click on Edit Link because the link does not take you to correct Page')
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
    .assert.elementPresent(FlowsSelector.elements.NavFlows, 'Test was failed because the Flows Link was not found in the Main Navigation Bar')
    .click(FlowsSelector.elements.NavFlows, function (result) {
      browser
        .assert.visible(FlowsSelector.elements.FlowMenu, 'Test was failed because the Flow Menu was not found in the Flow card')
        .click(FlowsSelector.elements.FlowMenu, function (result) {
          browser
            .assert.elementPresent(FlowsSelector.elements.Edit, 'Test was failed After you click on Flow menu icon because Edit Link was not found in it')
            .assert.elementPresent(FlowsSelector.elements.Delete, 'Test was failed After you click on Flow menu icon because Delete Link was not found in it')
            .assert.elementPresent(FlowsSelector.elements.Copy, 'Test was failed After you click on Flow menu icon because Copy Link was not found in it')
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
        .assert.elementPresent(FlowsSelector.elements.FlowCount, 'Test was failed because Flow count was not displayed in the card')
        .assert.elementPresent(FlowsSelector.elements.CardBodyChart, 'Test was failed because the Card Body Chart was not displayed in the card')
        .assert.elementPresent(FlowsSelector.elements.CardBodyInfo, 'Test was failed because the Card Body Info was not displayed in the card')
        .assert.elementPresent(FlowsSelector.elements.Author, 'Test was failed because the Author was not displayed in the card')
        .assert.elementPresent(FlowsSelector.elements.FlowName, 'Test was failed because the Flow Name was not displayed in the card')
        .assert.containsText(FlowsSelector.elements.CardBodyChart, 'GINI', 'Test was failed because the Card Body Chart does not contains GINI word')

    })


    .pause(configrationReader.getPauseValue());
}


//Sort By anme
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
    .assert.elementPresent(FlowsSelector.elements.NavFlows, 'Test was failed because the Flows Link was not found in the Main Navigation Bar')
    .click(FlowsSelector.elements.NavFlows, function (result) {
      browser
      assert.elementPresent(FlowsSelector.elements.SpanForGini, 'Test was failed because the sort by Gini was not displayed in Flows Page')
        .click(FlowsSelector.elements.SpanForGini)
    })
    .pause(configrationReader.getPauseValue());
}

//Sort by Date Created
exports.SortByDateCreated = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .assert.elementPresent(FlowsSelector.elements.NavFlows, 'Test was failed because the Flows Link was not found in the Main Navigation Bar')
    .click(FlowsSelector.elements.NavFlows, function (result) {
      browser
        .assert.elementPresent(FlowsSelector.elements.SpanForDatecreated, 'Test was failed because the sort by Date created was not displayed in Flows Page')
        .click(FlowsSelector.elements.SpanForDatecreated)

    })
    .pause(configrationReader.getPauseValue());
}

//no file chosen
exports.NoFileChosen = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(FlowsSelector.elements.UploadBtn, 'Test was failed because select file button was not displayed in the new flow page')
    .assert.elementPresent(FlowsSelector.elements.UploadBtn, 'Test was failed because select file button was not displayed in the new flow page')
    .assert.elementPresent(FlowsSelector.elements.EmptyInput, 'Test was failed because there is no file uploaded but the msg for empty input was not displayed')
    .assert.containsText(FlowsSelector.elements.EmptyInput, 'No file chosen', 'Test was failed because there is no file uploaded but the msg was not displayed that no file chosen')
    .pause(configrationReader.getPauseValue());
}

//extension of the file not csv
exports.ExtensionOfTheFileUploaded = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(FlowsSelector.elements.UploadBtn, 'Test was failed because select file button was not displayed in the new flow page')
    .assert.elementPresent(FlowsSelector.elements.UploadBtn, 'Test was failed because select file button was not displayed in the new flow page')
    .assert.elementPresent(FlowsSelector.elements.InputFileId, 'Test was failed because the Input field for the file was not displayed in the new flow page')
    .setValue(FlowsSelector.elements.InputFileId, require('path').resolve(__dirname + '/Data/NotCorrectExtensionOfTheFileUploaded.txt'))
    .assert.containsText(FlowsSelector.elements.ErrorInput, 'Selected file type not allowed', 'Test was failed because error msg was not displayed even though the extension for the file is not CSV ')
    .pause(configrationReader.getPauseValue());
}

//Upload File
exports.UploadFile = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(FlowsSelector.elements.UploadBtn, 'Test was failed because select file button was not displayed in the new flow page')
    .assert.elementPresent(FlowsSelector.elements.UploadBtn, 'Test was failed because select file button was not displayed in the new flow page')
    .assert.elementPresent(FlowsSelector.elements.InputFileId, 'Test was failed because the Input field for the file was not displayed in the new flow page')
    .setValue(FlowsSelector.elements.InputFileId, require('path').resolve(__dirname + '/Data/UCI_Credit_Card.csv'))
    .pause(configrationReader.getPauseValue());
}

//Check after You upload the file, if File Information section have the correct data and check Data if are display in Preview Data section
exports.CheckDataAfterYouUploadFile = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(FlowsSelector.elements.FileInformation, 'Test was failed because File Information was not displayed after you Upload File')
    .assert.elementPresent(FlowsSelector.elements.FileInformation, 'Test was failed because File Information was not displayed after you Upload File')
    .waitForElementVisible(FlowsSelector.elements.Name, 'Test was failed because the File Name in File Information section was not displayed after you Upload File')
    .assert.elementPresent(FlowsSelector.elements.Name, 'Test was failed because the File Name in File Information section was not displayed after you Upload File')
    .waitForElementVisible(FlowsSelector.elements.Type, 'Test was failed because the Type of the Upladed file in File Information section was not displayed after you Upload File')
    .assert.elementPresent(FlowsSelector.elements.Type, 'Test was failed because the Type of the Upladed file in File Information section was not displayed after you Upload File')
    .waitForElementVisible(FlowsSelector.elements.Columns, 'Test was failed because the Columns number in File Information section was not displayed after you Upload File')
    .assert.elementPresent(FlowsSelector.elements.Columns, 'Test was failed because the Columns number in File Information section was not displayed after you Upload File')
    .assert.elementPresent(FlowsSelector.elements.NameOfThefile, 'Test was failed because the File Name in File Information section was not displayed after you Upload File')
    .assert.containsText(FlowsSelector.elements.NameOfThefile, configrationReader.getTheFileInformation_Name(), 'Test was failed because the File Name in File Information section was not match with the uploaded file name after you Upload File')
    .assert.containsText(FlowsSelector.elements.NumberOfColumns, configrationReader.getTheFileInformation_Columns(), 'Test was failed because the number of columns in File Information section was not match with the number of columns for the uploaded file')
    .assert.containsText(FlowsSelector.elements.TypeOfTheFile, configrationReader.getTheFileInformation_Type(), 'Test was failed because the Type of the file in File Information section was not match with the uploaded file type after you Upload File')

    .waitForElementVisible(FlowsSelector.elements.PreviewData, 'Test was failed because Preview Data section was not displayed after you Upload File')
    .assert.elementPresent(FlowsSelector.elements.PreviewData, 'Test was failed because Preview Data section was not displayed after you Upload File')
    .waitForElementVisible(FlowsSelector.elements.SearchByFeatureName, 'Test was failed because the Search input field was not exists in Preview Data section')
    .assert.elementPresent(FlowsSelector.elements.SearchByFeatureName, 'Test was failed because the Search input field was not exists in Preview Data section')
    .waitForElementVisible(FlowsSelector.elements.Table, 'Test was failed because the Table was not displayed in Preview Data section after you Upload File')
    .assert.elementPresent(FlowsSelector.elements.Table, 'Test was failed because the Table was not displayed in Preview Data section after you Upload File')
    .waitForElementVisible(FlowsSelector.elements.TableRowItem, 'Test was failed because there is no items in the table after you Upload File')
    .assert.elementPresent(FlowsSelector.elements.TableRowItem, 'Test was failed because there is no items in the table after you Upload File')

    .pause(configrationReader.getPauseValue());
}

//Not valid Label
exports.SelectNotValidLabel = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(FlowsSelector.elements.SelectLabelInput, 'Test was failed because Label Input was not displayed in the flow page')
    .assert.elementPresent(FlowsSelector.elements.SelectLabelInput, 'Test was failed because Label Input was not displayed in the flow page')
    .click(FlowsSelector.elements.SelectLabelInput, function (result) {
      browser
        .waitForElementVisible(FlowsSelector.elements.LabelMenuVisible, configrationReader.getPeriod(), 'Test was failed After you click on the Label Input because the dropdown for Labels was not displayed')
        .assert.elementPresent(FlowsSelector.elements.LabelMenuVisible, 'Test was failed After you click on the Label Input because the dropdown for Labels was not displayed')
        .setValue(FlowsSelector.elements.SelectLabelInput, configrationReader.getNotValidLabel())
        .keys(browser.Keys.ENTER)
        .waitForElementVisible(FlowsSelector.elements.LabelWarning, 'Test was failed After you select the Label because the error msg was not displayed even though you select the not vlaid label')
        .assert.elementPresent(FlowsSelector.elements.LabelWarning, 'Test was failed After you select the Label because the error msg was not displayed even though you select the not vlaid label')
    })
    .pause(configrationReader.getPauseValue());
}

//Valid Label
exports.SelectValidLabel = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(FlowsSelector.elements.SelectLabelInput, 'Test was failed because Label Input was not displayed in the flow page')
    .assert.elementPresent(FlowsSelector.elements.SelectLabelInput, 'Test was failed because Label Input was not displayed in the flow page')
    .click(FlowsSelector.elements.SelectLabelInput, function (result) {
      browser
        .waitForElementVisible(FlowsSelector.elements.LabelMenuVisible, configrationReader.getPeriod(), 'Test was failed After you click on the Label Input because the dropdown for Labels was not displayed')
        .assert.elementPresent(FlowsSelector.elements.LabelMenuVisible, 'Test was failed After you click on the Label Input because the dropdown for Labels was not displayed')
        .setValue(FlowsSelector.elements.SelectLabelInput, configrationReader.getValidLabel())
        .keys(browser.Keys.ENTER)
        .waitForElementVisible(FlowsSelector.elements.PieChart, 'Test was failed After you select the Label because the PieChart was not displayed even though you select the vlaid label')
        .assert.elementPresent(FlowsSelector.elements.PieChart, 'Test was failed After you select the Label because the PieChart was not displayed even though you select the vlaid label')
    })
    .pause(configrationReader.getPauseValue());
}

//Run DataSources
exports.RunDataSources = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(FlowsSelector.elements.DataSourcesButton, 'Test was failed because the DataSources button was not found in flow Page')
    .assert.elementPresent(FlowsSelector.elements.DataSourcesButton, 'Test was failed because the DataSources button was not found in flow Page')
    .click(FlowsSelector.elements.DataSourcesButton)
    .pause(configrationReader.getPauseValue());
}

//Verify No error displayed in the log file
exports.VerifyTheLogFile = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(FlowsSelector.elements.FlowLogButton, configrationReader.getPeriod(), false, 'Test was failed because the Flow log icon was not found in flow Page')
    .assert.elementPresent(FlowsSelector.elements.FlowLogButton, 'Test was failed because the Flow log icon was not found in flow Page')
    .click(FlowsSelector.elements.FlowLogButton)
    //.waitForElementNotPresent(FlowsSelector.elements.LogError, configrationReader.getPeriod())
    .waitForElementVisible(FlowsSelector.elements.Log, configrationReader.getPeriod(), 'Test was failed because the log was not display After you click on Flow Log icon')
    .assert.elementPresent(FlowsSelector.elements.Log, 'Test was failed because the log was not display After you click on Flow Log icon')
    .pause(configrationReader.getPauseValue());
}

//general method  to reduce the duplicate code 
exports.CreateNewFlowAndUploadFile = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    //Click on Flows Link in Navigation Bar
    .assert.elementPresent(FlowsSelector.elements.NavFlows, 'Test was failed because the Flows Link was not found in the Main Navigation Bar')
    .click(FlowsSelector.elements.NavFlows)
    .waitForElementVisible(FlowsSelector.elements.AddFlowBtn, 'Test was failed because Add Flow Button was not found Flows Page')
    .assert.elementPresent(FlowsSelector.elements.AddFlowBtn, 'Test was failed because Add Flow Button was not found Flows Page')
    //Click on "+" Add flow button
    .click(FlowsSelector.elements.AddFlowBtn, function (result) {
      browser
        //pop up will appear to write the name of the new flow
        .waitForElementVisible(FlowsSelector.elements.PopUp, 'Test was failed after you click on Add flow button because no pop ups window displayed')
        .assert.elementPresent(FlowsSelector.elements.PopUp, 'Test was failed after you click on Add flow button because no pop ups window displayed')
        .waitForElementVisible(FlowsSelector.elements.FlowNameInput, 'Test was failed after you click on Add flow button because no flow name input field in the pop ups window')
        .assert.elementPresent(FlowsSelector.elements.FlowNameInput, 'Test was failed after you click on Add flow button because no flow name input field in the pop ups window')
        //Add random number to the name of the new flow
        .setValue(FlowsSelector.elements.FlowNameInput, FlowName.getThenameOfTheNewFlow())
        .keys(browser.Keys.ENTER)
    })
    //Check if back button is display To check if creating Flow is done successfully
    .waitForElementVisible(FlowsSelector.elements.BackButton, configrationReader.getPeriod(), 'Test was failed after you click on Submit button in the pop ups window that the new flow does not done successfully')
    .assert.elementPresent(FlowsSelector.elements.BackButton, 'Test was failed after you click on Submit button in the pop ups window that the new flow does not done successfully')
    .waitForElementVisible(FlowsSelector.elements.FlowNameonBackButton, 'Test was failed after you click on Submit button in the pop ups window that the new flow does not done successfully')
    .assert.elementPresent(FlowsSelector.elements.FlowNameonBackButton, 'Test was failed after you click on Submit button in the pop ups window that the new flow does not done successfully')
    .pause(configrationReader.getPauseValue())
    .waitForElementVisible(FlowsSelector.elements.UploadBtn, 'Test was failed because select file button was not displayed in the new flow page')
    .assert.elementPresent(FlowsSelector.elements.UploadBtn, 'Test was failed because select file button was not displayed in the new flow page')
    .assert.elementPresent(FlowsSelector.elements.InputFileId, 'Test was failed because the Input field for the file was not displayed in the new flow page')
    .setValue(FlowsSelector.elements.InputFileId, require('path').resolve(__dirname + '/Data/UCI_Credit_Card.csv'))
    .pause(configrationReader.getPauseValue());
}

//Verify Data Sources section is displayed as wxpected
exports.VerifyDatasourceSection = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(FlowsSelector.elements.HeaderOfDataSourceSection, configrationReader.getPeriod(), 'Test was failed because the Header of the Data Source section was not exists')
    .assert.elementPresent(FlowsSelector.elements.HeaderOfDataSourceSection, 'Test was failed because the Header of the Data Source section was not exists')
    .assert.containsText(FlowsSelector.elements.HeaderOfDataSourceSection, 'Data Sources', 'Test was failed because The Title of Data Source section was not displayed as Data Sources')
    .waitForElementVisible(FlowsSelector.elements.RemoveAllButton, configrationReader.getPeriod(), 'Test was failed because Remove All Button was not displayed in the Header')
    .assert.elementPresent(FlowsSelector.elements.RemoveAllButton, 'Test was failed because Remove All Button was not displayed in the Header')
    .assert.containsText(FlowsSelector.elements.RemoveAllButton, 'Remove all', 'Test was failed because the Button in the header was not contained Remove All word')
    .waitForElementVisible(FlowsSelector.elements.FileNameButton, configrationReader.getPeriod(), 'Test was failed because File Name Button was not displayed')
    .assert.elementPresent(FlowsSelector.elements.FileNameButton, 'Test was failed because File Name Button was not displayed')
    .assert.containsText(FlowsSelector.elements.FileNameButton, configrationReader.getTheFileInformation_Name(), 'Test was failed because the File Name Button was not contained the name of the File Uploaded')
    .waitForElementVisible(FlowsSelector.elements.AddDataSourceButton, 'Test was failed because Add Data Source Button was not displayed')
    .assert.elementPresent(FlowsSelector.elements.AddDataSourceButton, 'Test was failed because Add Data Source Button was not displayed')
    .assert.containsText(FlowsSelector.elements.AddDataSourceButton, 'Add Data Source', 'Test was failed because Add Data Source Button was not contained Add Data Source word')
    .assert.elementPresent(FlowsSelector.elements.CombinedRows, 'Test was failed because Combined Rows value was not displayed')
    .assert.containsText(FlowsSelector.elements.CombinedRows, configrationReader.getNumberOfCombinedRows(), 'Test was failed because Combined Rows value was not displayed correctly as the Combined Rows value for the uploaded file')
    .assert.elementPresent(FlowsSelector.elements.RowsAfterFiltering, 'Test was failed because the Rows After Filtering value was not displayed')
    .assert.containsText(FlowsSelector.elements.RowsAfterFiltering, configrationReader.getNumberOfRowsAfterFiltering(), 'Test was failed because the Rows After Filtering value was not displayed correctly as the Rows After Filtering value for the uploaded file')
    .assert.elementPresent(FlowsSelector.elements.ColumnsInDataSourceSection, 'Test was failed because the Columns value was not displayed')
    .assert.containsText(FlowsSelector.elements.ColumnsInDataSourceSection, configrationReader.getNumberOfColumns(), 'Test was failed because the Columns value was not displayed correctly as the Columns value for the uploaded file')

}

//Preview data - search by feature name is working as expected 
exports.SearchByfeatureName = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    //check if Search input field is exists or not
    .waitForElementVisible(FlowsSelector.elements.SearchByFeatureName, 'Test was failed because the Search input field was not exists in Preview Data section')
    .assert.elementPresent(FlowsSelector.elements.SearchByFeatureName, 'Test was failed because the Search input field was not exists in Preview Data section')
    //set the search field input to search on "LIMIT_BAL" , this value was declared in Config.ini
    .setValue(FlowsSelector.elements.SearchByFeatureName, configrationReader.getFeatureName())
    //check if the search result is correct 
    .assert.elementPresent(FlowsSelector.elements.FirstColumninTable, 'Test was failed because No Result value was displayed for what you searched on')
    //check if first column is what you searched about
    .assert.containsText(FlowsSelector.elements.FirstColumninTable, configrationReader.getFeatureName(), 'Test was failed because the Result does not match what you serached on')
}

//Check if Data are displayed in Columns tab
exports.CheckColumnsTab = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads

    .assert.elementPresent(FlowsSelector.elements.ColumnsTab, 'Test was failed because Columns Tab was not exist in Data Source Details Section')
    .pause(configrationReader.getPauseValue())
    .click(FlowsSelector.elements.ColumnsTab)

    .assert.elementPresent(FlowsSelector.elements.NameColumn, 'Test was failed After you Click on Columns Tab because the switcher box column was not displayed')
    .assert.elementPresent(FlowsSelector.elements.ID, 'Test was failed because the ID Row was not display')
    .assert.containsText(FlowsSelector.elements.ID, 'ID', 'Test was failed because the ID Row was not contained ID as in the File Uploaded')
    .waitForElementVisible(FlowsSelector.elements.LIMIT_BAL, configrationReader.getPeriod(), 'Test was failed because the LIMIT_BAL Row was not display')
    .assert.elementPresent(FlowsSelector.elements.LIMIT_BAL, 'Test was failed because the LIMIT_BAL Row was not display')
    .assert.containsText(FlowsSelector.elements.LIMIT_BAL, 'LIMIT_BAL', 'Test was failed because the LIMIT_BAL Row was not contained LIMIT_BAL as in the File Uploaded')
    .waitForElementVisible(FlowsSelector.elements.GENDER, configrationReader.getPeriod(), 'Test was failed because the GENDER Row was not display')
    .assert.elementPresent(FlowsSelector.elements.GENDER, 'Test was failed because the GENDER Row was not display')
    .assert.containsText(FlowsSelector.elements.GENDER, 'GENDER', 'Test was failed because the GENDER Row was not contained GENDER as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.EDUCATION, 'Test was failed because the EDUCATION Row was not display')
    .assert.containsText(FlowsSelector.elements.EDUCATION, 'EDUCATION', 'Test was failed because the EDUCATION Row was not contained EDUCATION as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.MARRIAGERow, 'Test was failed because the MARRIAGE Row was not display')
    .assert.containsText(FlowsSelector.elements.MARRIAGERow, 'MARRIAGE', 'Test was failed because the MARRIAGE Row was not contained MARRIAGE as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.AGE, 'Test was failed because the AGE Row was not display')
    .assert.containsText(FlowsSelector.elements.AGE, 'AGE', 'Test was failed because the AGE Row was not contained AGE as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.PAY_0, 'Test was failed because the PAY_0 Row was not display')
    .assert.containsText(FlowsSelector.elements.PAY_0, 'PAY_0', 'Test was failed because the PAY_0 Row was not contained PAY_0 as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.PAY_2, 'Test was failed because the PAY_2 Row was not display')
    .assert.containsText(FlowsSelector.elements.PAY_2, 'PAY_2', 'Test was failed because the PAY_2 Row was not contained PAY_2 as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.PAY_3, 'Test was failed because the PAY_2 Row was not display')
    .assert.containsText(FlowsSelector.elements.PAY_3, 'PAY_3', 'Test was failed because the PAY_3 Row was not contained PAY_3 as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.PAY_4, 'Test was failed because the PAY_2 Row was not display')
    .assert.containsText(FlowsSelector.elements.PAY_4, 'PAY_4', 'Test was failed because the PAY_4 Row was not contained PAY_4 as in the File Uploaded')
    .click(FlowsSelector.elements.paginationInTabs)
    .assert.elementPresent(FlowsSelector.elements.PAY_5, 'Test was failed because the PAY_5 Row was not display')
    .assert.containsText(FlowsSelector.elements.PAY_5, 'PAY_5', 'Test was failed because the PAY_5 Row was not contained PAY_5 as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.PAY_6, 'Test was failed because the PAY_6 Row was not display')
    .assert.containsText(FlowsSelector.elements.PAY_6, 'PAY_6', 'Test was failed because the PAY_6 Row was not contained PAY_6 as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.BILL_AMT1, 'Test was failed because the BILL_AMT1 Row was not display')
    .assert.containsText(FlowsSelector.elements.BILL_AMT1, 'BILL_AMT1', 'Test was failed because the BILL_AMT1 Row was not contained BILL_AMT1 as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.BILL_AMT2, 'Test was failed because the BILL_AMT2 Row was not display')
    .assert.containsText(FlowsSelector.elements.BILL_AMT2, 'BILL_AMT2', 'Test was failed because the BILL_AMT2 Row was not contained BILL_AMT2 as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.BILL_AMT3, 'Test was failed because the BILL_AMT3 Row was not display')
    .assert.containsText(FlowsSelector.elements.BILL_AMT3, 'BILL_AMT3', 'Test was failed because the BILL_AMT3 Row was not contained BILL_AMT3 as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.BILL_AMT4, 'Test was failed because the BILL_AMT4 Row was not display')
    .assert.containsText(FlowsSelector.elements.BILL_AMT4, 'BILL_AMT4', 'Test was failed because the BILL_AMT4 Row was not contained BILL_AMT4 as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.BILL_AMT5, 'Test was failed because the BILL_AMT5 Row was not display')
    .assert.containsText(FlowsSelector.elements.BILL_AMT5, 'BILL_AMT5', 'Test was failed because the BILL_AMT5 Row was not contained BILL_AMT5 as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.BILL_AMT6, 'Test was failed because the BILL_AMT6 Row was not display')
    .assert.containsText(FlowsSelector.elements.BILL_AMT6, 'BILL_AMT6', 'Test was failed because the BILL_AMT6 Row was not contained BILL_AMT6 as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.PAY_AMT1, 'Test was failed because the PAY_AMT1 Row was not display')
    .assert.containsText(FlowsSelector.elements.PAY_AMT1, 'PAY_AMT1', 'Test was failed because the PAY_AMT1 Row was not contained PAY_AMT1 as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.PAY_AMT2, 'Test was failed because the PAY_AMT2 Row was not display')
    .assert.containsText(FlowsSelector.elements.PAY_AMT2, 'PAY_AMT2', 'Test was failed because the PAY_AMT2 Row was not contained PAY_AMT2 as in the File Uploaded')
    .click(FlowsSelector.elements.paginationInTabs)
    .assert.elementPresent(FlowsSelector.elements.PAY_AMT3, 'Test was failed because the PAY_AMT3 Row was not display')
    .assert.containsText(FlowsSelector.elements.PAY_AMT3, 'PAY_AMT3', 'Test was failed because the PAY_AMT3 Row was not contained PAY_AMT3 as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.PAY_AMT4, 'Test was failed because the PAY_AMT4 Row was not display')
    .assert.containsText(FlowsSelector.elements.PAY_AMT4, 'PAY_AMT4', 'Test was failed because the PAY_AMT4 Row was not contained PAY_AMT4 as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.PAY_AMT5, 'Test was failed because the PAY_AMT5 Row was not display')
    .assert.containsText(FlowsSelector.elements.PAY_AMT5, 'PAY_AMT5', 'Test was failed because the PAY_AMT5 Row was not contained PAY_AMT5 as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.PAY_AMT6, 'Test was failed because the PAY_AMT6 Row was not display')
    .assert.containsText(FlowsSelector.elements.PAY_AMT6, 'PAY_AMT6', 'Test was failed because the PAY_AMT6 Row was not contained PAY_AMT6 as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.DefaultPaymentNextMonth)
    .assert.containsText(FlowsSelector.elements.DefaultPaymentNextMonth, 'default.payment.next.month')
    .assert.elementPresent(FlowsSelector.elements.RoleColumn, 'Test was failed After you Click on Columns Tab because the Role Column was not displayed')
    .assert.elementPresent(FlowsSelector.elements.TypeColumn, 'Test was failed After you Click on Columns Tab because the Type Column was not displayed')
    .assert.elementPresent(FlowsSelector.elements.CardinalityColumn, 'Test was failed After you Click on Columns Tab because the Cardinality Column was not displayed')
    .assert.elementPresent(FlowsSelector.elements.NullRatioColumn, 'Test was failed After you Click on Columns Tab because the NullRatio Column was not displayed')
    .assert.elementPresent(FlowsSelector.elements.PreviewColumn, 'Test was failed After you Click on Columns Tab because the Preview Column was not displayed')


}

//Columns - search by feature name is working as expected 
exports.SearchByFeatureNameInColumnTab = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .assert.elementPresent(FlowsSelector.elements.ColumnsTab, 'Test was failed because Columns Tab was not exist in Data Source Details Section')
    .pause(7000)
    .click(FlowsSelector.elements.ColumnsTab, function (result) {
      //check if Search input field is exists or not
      browser
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(FlowsSelector.elements.SearchByColumn, 'Test was failed because the Search input field was not exists in Columns tab')
        //set the search field input to search on "LIMIT_BAL" , this value was declared in Config.ini
        .setValue(FlowsSelector.elements.SearchByColumn, configrationReader.getFeatureName())
        //check if the search result is correct 
        .waitForElementVisible(FlowsSelector.elements.FirstRowInTable, 'Test was failed because No Result value was displayed for what you searched on')
        //check if first column is what you searched about
        .assert.containsText(FlowsSelector.elements.FirstRowInTable, configrationReader.getFeatureName(), 'Test was failed because the Result does not match what you serached on')
        .pause(configrationReader.getPauseValue());


    });
  }
//Check if Data are displayed in Statistics tab
exports.CheckStatisticsTab = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads

    .assert.elementPresent(FlowsSelector.elements.StatisticsTab, 'Test was failed because Columns Tab was not exist in Data Source Details Section')
    .pause(configrationReader.getPauseValue())
    .click(FlowsSelector.elements.StatisticsTab)
    .assert.elementPresent(FlowsSelector.elements.FeatureName, 'Test was failed After you Click on Columns Tab because the switcher box column was not displayed')
    .assert.elementPresent(FlowsSelector.elements.ID, 'Test was failed because the ID Row was not display')
    .assert.containsText(FlowsSelector.elements.ID, 'ID', 'Test was failed because the ID Row was not contained ID as in the File Uploaded')
    .waitForElementVisible(FlowsSelector.elements.LIMIT_BAL, configrationReader.getPeriod(), 'Test was failed because the LIMIT_BAL Row was not display')
    .assert.elementPresent(FlowsSelector.elements.LIMIT_BAL, 'Test was failed because the LIMIT_BAL Row was not display')
    .assert.containsText(FlowsSelector.elements.LIMIT_BAL, 'LIMIT_BAL', 'Test was failed because the LIMIT_BAL Row was not contained LIMIT_BAL as in the File Uploaded')
    .waitForElementVisible(FlowsSelector.elements.GENDER, configrationReader.getPeriod(), 'Test was failed because the GENDER Row was not display')
    .assert.elementPresent(FlowsSelector.elements.GENDER, 'Test was failed because the GENDER Row was not display')
    .assert.containsText(FlowsSelector.elements.GENDER, 'GENDER', 'Test was failed because the GENDER Row was not contained GENDER as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.EDUCATION, 'Test was failed because the EDUCATION Row was not display')
    .assert.containsText(FlowsSelector.elements.EDUCATION, 'EDUCATION', 'Test was failed because the EDUCATION Row was not contained EDUCATION as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.MARRIAGERow, 'Test was failed because the MARRIAGE Row was not display')
    .assert.containsText(FlowsSelector.elements.MARRIAGERow, 'MARRIAGE', 'Test was failed because the MARRIAGE Row was not contained MARRIAGE as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.AGE, 'Test was failed because the AGE Row was not display')
    .assert.containsText(FlowsSelector.elements.AGE, 'AGE', 'Test was failed because the AGE Row was not contained AGE as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.PAY_0, 'Test was failed because the PAY_0 Row was not display')
    .assert.containsText(FlowsSelector.elements.PAY_0, 'PAY_0', 'Test was failed because the PAY_0 Row was not contained PAY_0 as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.PAY_2, 'Test was failed because the PAY_2 Row was not display')
    .assert.containsText(FlowsSelector.elements.PAY_2, 'PAY_2', 'Test was failed because the PAY_2 Row was not contained PAY_2 as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.PAY_3, 'Test was failed because the PAY_2 Row was not display')
    .assert.containsText(FlowsSelector.elements.PAY_3, 'PAY_3', 'Test was failed because the PAY_3 Row was not contained PAY_3 as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.PAY_4, 'Test was failed because the PAY_2 Row was not display')
    .assert.containsText(FlowsSelector.elements.PAY_4, 'PAY_4', 'Test was failed because the PAY_4 Row was not contained PAY_4 as in the File Uploaded')
    .click(FlowsSelector.elements.paginationInTabs)
    .assert.elementPresent(FlowsSelector.elements.PAY_5, 'Test was failed because the PAY_5 Row was not display')
    .assert.containsText(FlowsSelector.elements.PAY_5, 'PAY_5', 'Test was failed because the PAY_5 Row was not contained PAY_5 as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.PAY_6, 'Test was failed because the PAY_6 Row was not display')
    .assert.containsText(FlowsSelector.elements.PAY_6, 'PAY_6', 'Test was failed because the PAY_6 Row was not contained PAY_6 as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.BILL_AMT1, 'Test was failed because the BILL_AMT1 Row was not display')
    .assert.containsText(FlowsSelector.elements.BILL_AMT1, 'BILL_AMT1', 'Test was failed because the BILL_AMT1 Row was not contained BILL_AMT1 as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.BILL_AMT2, 'Test was failed because the BILL_AMT2 Row was not display')
    .assert.containsText(FlowsSelector.elements.BILL_AMT2, 'BILL_AMT2', 'Test was failed because the BILL_AMT2 Row was not contained BILL_AMT2 as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.BILL_AMT3, 'Test was failed because the BILL_AMT3 Row was not display')
    .assert.containsText(FlowsSelector.elements.BILL_AMT3, 'BILL_AMT3', 'Test was failed because the BILL_AMT3 Row was not contained BILL_AMT3 as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.BILL_AMT4, 'Test was failed because the BILL_AMT4 Row was not display')
    .assert.containsText(FlowsSelector.elements.BILL_AMT4, 'BILL_AMT4', 'Test was failed because the BILL_AMT4 Row was not contained BILL_AMT4 as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.BILL_AMT5, 'Test was failed because the BILL_AMT5 Row was not display')
    .assert.containsText(FlowsSelector.elements.BILL_AMT5, 'BILL_AMT5', 'Test was failed because the BILL_AMT5 Row was not contained BILL_AMT5 as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.BILL_AMT6, 'Test was failed because the BILL_AMT6 Row was not display')
    .assert.containsText(FlowsSelector.elements.BILL_AMT6, 'BILL_AMT6', 'Test was failed because the BILL_AMT6 Row was not contained BILL_AMT6 as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.PAY_AMT1, 'Test was failed because the PAY_AMT1 Row was not display')
    .assert.containsText(FlowsSelector.elements.PAY_AMT1, 'PAY_AMT1', 'Test was failed because the PAY_AMT1 Row was not contained PAY_AMT1 as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.PAY_AMT2, 'Test was failed because the PAY_AMT2 Row was not display')
    .assert.containsText(FlowsSelector.elements.PAY_AMT2, 'PAY_AMT2', 'Test was failed because the PAY_AMT2 Row was not contained PAY_AMT2 as in the File Uploaded')
    .click(FlowsSelector.elements.paginationInTabs)
    .assert.elementPresent(FlowsSelector.elements.PAY_AMT3, 'Test was failed because the PAY_AMT3 Row was not display')
    .assert.containsText(FlowsSelector.elements.PAY_AMT3, 'PAY_AMT3', 'Test was failed because the PAY_AMT3 Row was not contained PAY_AMT3 as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.PAY_AMT4, 'Test was failed because the PAY_AMT4 Row was not display')
    .assert.containsText(FlowsSelector.elements.PAY_AMT4, 'PAY_AMT4', 'Test was failed because the PAY_AMT4 Row was not contained PAY_AMT4 as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.PAY_AMT5, 'Test was failed because the PAY_AMT5 Row was not display')
    .assert.containsText(FlowsSelector.elements.PAY_AMT5, 'PAY_AMT5', 'Test was failed because the PAY_AMT5 Row was not contained PAY_AMT5 as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.PAY_AMT6, 'Test was failed because the PAY_AMT6 Row was not display')
    .assert.containsText(FlowsSelector.elements.PAY_AMT6, 'PAY_AMT6', 'Test was failed because the PAY_AMT6 Row was not contained PAY_AMT6 as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.DefaultPaymentNextMonth, 'Test was failed because the DefaultPaymentNextMonth Row was not display')
    .assert.containsText(FlowsSelector.elements.DefaultPaymentNextMonth, 'default.payment.next.month', 'Test was failed because the default.payment.next.month Row was not contained default.payment.next.month as in the File Uploaded')
    .assert.elementPresent(FlowsSelector.elements.CountValues, 'Test was failed After you Click on Statistics Tab because the Count Values Column was not displayed')
    .assert.elementPresent(FlowsSelector.elements.UniqueCount, 'Test was failed After you Click on Statistics Tab because the Unique Count Column was not displayed')
    .assert.elementPresent(FlowsSelector.elements.NullRatio, 'Test was failed After you Click on Statistics Tab because the Null Ratio Column was not displayed')
    .assert.elementPresent(FlowsSelector.elements.Mean, 'Test was failed After you Click on Statistics Tab because the Mean Column was not displayed')
    .assert.elementPresent(FlowsSelector.elements.Stdv, 'Test was failed After you Click on Statistics Tab because the Stdv Column was not displayed')
    .assert.elementPresent(FlowsSelector.elements.MinValue, 'Test was failed After you Click on Statistics Tab because the Min Value Column was not displayed')
    .assert.elementPresent(FlowsSelector.elements.the25Percentile, 'Test was failed After you Click on Statistics Tab because the 25th Percentile Column was not displayed')
    .assert.elementPresent(FlowsSelector.elements.Median, 'Test was failed After you Click on Statistics Tab because the Median Column was not displayed')
    .assert.elementPresent(FlowsSelector.elements.the75Percentile, 'Test was failed After you Click on Statistics Tab because the 75thPercentile Column was not displayed')
    .assert.elementPresent(FlowsSelector.elements.MaxValue, 'Test was failed After you Click on Statistics Tab because the Max Value Column was not displayed')
    .assert.elementPresent(FlowsSelector.elements.MostCommonFrequency, 'Test was failed After you Click on Statistics Tab because the Most Common Frequency Column was not displayed')
    .assert.elementPresent(FlowsSelector.elements.MostCommonValue, 'Test was failed After you Click on Statistics Tab because the Most Common Value Column was not displayed')

}