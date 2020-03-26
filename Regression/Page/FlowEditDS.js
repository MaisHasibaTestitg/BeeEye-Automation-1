const FlowsSelector = require("../Selectors/FlowsSelector");
const FlowEditDsSelector = require("../Selectors/FlowEditDsSelector");
const configrationReader = require("../utils/configrationReader");
const {
    assert
  } = require('chai').assert
  const {
    expect
  } = require('chai')
  const setup = require("../utils/setup");

  exports.LastConfiguringStep = (browser) => {
    browser
      .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
      //here to make sure that no file chosen in create new flow function 
      .assert.elementPresent(FlowsSelector.elements.EmptyInput,'The assertion failed because "No file chosen" was not displayed eventhough no file was chosen')
      //check if Back button is exist or not 
      .assert.elementPresent(FlowsSelector.elements.FlowNameonBackButton,'The assertion failed because Back button was not displayed in Flow Page')
      //take the name of the new flow
      .getText(FlowsSelector.elements.FlowNameonBackButton, function (result) {
        browser
        FlowNameValue = result.value;
      })
    }
    //this function to search by the flow name to access to last created new flow and check if the changes on this flow is still the same when the user returns back to this flow
    exports.SearchOnSpecificFlowName = (browser) => {
      browser
      //return to Flows Page
        .click(FlowsSelector.elements.NavFlows)
        .perform(function() {
          browser
          .waitForElementVisible(FlowEditDsSelector.elements.SearchFlowField,'The Test failed because Search by flow name was not displayed in Flows Page')
          //put the flow name that you stored it on search field 
          .setValue(FlowEditDsSelector.elements.SearchFlowField, FlowNameValue)
        .pause(configrationReader.getDelayValue())
        })
        //check if "no file chosen" was exist to make sure that the user is navigated to the last confguring step for the selected flow
        .click(FlowEditDsSelector.elements.FirstFlow)
        .assert.elementPresent(FlowsSelector.elements.EmptyInput,'The assertion failed because "No file chosen" was not displayed eventhough no file was chosen')
      .pause(configrationReader.getPauseValue());
  }


