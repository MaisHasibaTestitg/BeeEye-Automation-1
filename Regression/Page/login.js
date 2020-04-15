const loginSelectors = require("../Selectors/loginSelectors");
const configrationReader = require("../utils/configrationReader");
const {
  assert
} = require('chai').assert
const {
  expect
} = require('chai')
const setup = require("../utils/setup");


//Login without password
exports.LoginWithoutPassword = (browser) => {
  browser
  //wait the body to be loadded
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    //Check if email field is display 
    .assert.elementPresent(loginSelectors.elements.email, 'The assertion failed because the email field was not found in the Login Page')
    //set the value for the email field
    .setValue(loginSelectors.elements.email, configrationReader.getUserName()) // send values
    //Check if Password field is display 
    .assert.elementPresent(loginSelectors.elements.password, 'The assertion failed because the password field was not found in the Login Page')
    //set the value for password field
    .setValue(loginSelectors.elements.password, '') // send values
    //Check if Sign-in Terms checkbox is displayed or not
    .assert.elementPresent(loginSelectors.elements.signInTermsCheckbox, 'The assertion failed because the sign In Terms Checkobx was not found in the Login Page')
    .click(loginSelectors.elements.signInTermsCheckbox)
    //Check if Sign in button is display or not
    .assert.elementPresent(loginSelectors.elements.signInBtn, 'The assertion failed because the sign In Button was not found in the Login Page')
    .click(loginSelectors.elements.signInBtn)
    //Here to check that the login was not successfully and the user is still in Log in Page, also error msg is display
    .assert.elementPresent(loginSelectors.elements.SignInTitle, 'The assertion failed After you click on Sign in button because the login was successfully even though the login was without password')
    .assert.elementPresent(loginSelectors.elements.SignInError, 'The assertion failed After you click on Sign in button because no error msg displayed even though the login was without password')
    .pause(configrationReader.getPauseValue());
}


//Login Without username
exports.LoginWithoutUsername = (browser) => {
  browser
  //wait the body to be loadded
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    //Check if email field is display 
    .assert.elementPresent(loginSelectors.elements.email, 'The assertion failed because the email field was not found in the Login Page')
    //set the value for the email field
    .setValue(loginSelectors.elements.email, '') // send values
    //Check if Password field is display
    .assert.elementPresent(loginSelectors.elements.password, 'The assertion failed because the password field was not found in the Login Page')
    //set the value for password field
    .setValue(loginSelectors.elements.password, configrationReader.getPassword()) // send values
    //Check if Sign-in Terms checkbox is displayed or not
    .assert.elementPresent(loginSelectors.elements.signInTermsCheckbox, 'The assertion failed because the sign-in Terms Checkobx was not found in the Login Page')
    .click(loginSelectors.elements.signInTermsCheckbox)
    //Check if Sign in button is display or not
    .assert.elementPresent(loginSelectors.elements.signInBtn, 'The assertion failed because the sign In Button was not found in the Login Page')
    .click(loginSelectors.elements.signInBtn)
    //Here to check that the login was not successfully and the user is still in Log in Page , also error msg is display
    .assert.elementPresent(loginSelectors.elements.SignInTitle, 'The assertion failed After you click on Sign in button because the login was successfully even though the login was Without username')
    .assert.elementPresent(loginSelectors.elements.SignInError, 'The assertion failed After you click on Sign in button because no error msg displayed even though the login was without username')
    .pause(configrationReader.getPauseValue());

}

//Login With wrong password
exports.LoginWithWrongPassword = (browser) => {
  browser
  //wait the body to be loadded
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    //Check if email field is display
    .assert.elementPresent(loginSelectors.elements.email, 'The assertion failed because the email field was not found in the Login Page')
    //set the value for the email field
    .setValue(loginSelectors.elements.email, configrationReader.getUserName()) // send values
    //Check if Password field is display
    .assert.elementPresent(loginSelectors.elements.password, 'The assertion failed because the password field was not found in the Login Page')
    //set the value for password field
    .setValue(loginSelectors.elements.password, 'jj') // send values
    //Check if Sign-in Terms checkbox is displayed or not
    .assert.elementPresent(loginSelectors.elements.signInTermsCheckbox, 'The assertion failed because the sign-in Terms Checkobx was not found in the Login Page')
    .click(loginSelectors.elements.signInTermsCheckbox)
    //Check if Sign in button is display or not
    .assert.elementPresent(loginSelectors.elements.signInBtn, 'The assertion failed because the sign In Button was not found in the Login Page')
    .click(loginSelectors.elements.signInBtn)
    //Here to check that the login was not successfully and the user is still in Log in Page , also error msg is display
    .assert.elementPresent(loginSelectors.elements.SignInTitle, 'The assertion failed After you click on Sign in button because the login was successfully even though the login was With wrong password')
    .assert.elementPresent(loginSelectors.elements.SignInError, 'The assertion failed After you click on Sign in button because no error msg displayed even though the login was  With wrong password')
    .pause(configrationReader.getPauseValue());

}
//Login with wrong username
exports.LoginWithWrongUsername = (browser) => {
  browser
  //wait the body to be loadded
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    //Check if email field is display
    .assert.elementPresent(loginSelectors.elements.email, 'The assertion failed because the email field was not found in the Login Page')
    //set the value for the email field
    .setValue(loginSelectors.elements.email, 'user') // send values
    //Check if Password field is display
    .assert.elementPresent(loginSelectors.elements.password, 'The assertion failed because the password field was not found in the Login Page')
    //set the value for password field
    .setValue(loginSelectors.elements.password, configrationReader.getPassword()) // send values
    //Check if Sign-in Terms checkbox is displayed or not
    .assert.elementPresent(loginSelectors.elements.signInTermsCheckbox, 'The assertion failed because the sign-in Terms Checkobx was not found in the Login Page')
    .click(loginSelectors.elements.signInTermsCheckbox)
    //Check if Sign in button is display or not
    .assert.elementPresent(loginSelectors.elements.signInBtn, 'The assertion failed because the sign In Button was not found in the Login Page')
    .click(loginSelectors.elements.signInBtn)
    //Here to check that the login was not successfully and the user is still in Log in Page , also error msg is display
    .assert.elementPresent(loginSelectors.elements.SignInTitle, 'The assertion failed After you click on Sign in button because the login was successfully even though the login was  With wrong username')
    .pause(configrationReader.getPauseValue())
    .assert.elementPresent(loginSelectors.elements.SignInError, 'The assertion failed After you click on Sign in button because no error msg displayed even though the login was  With wrong username')
    

}


//Login with valid information
exports.LoginWithValidInformation = (browser) => {
  browser
  //wait the body to be loadded
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
     //Check if email field is display
    .assert.elementPresent(loginSelectors.elements.email, 'The assertion failed because the email field was not found in the Login Page')
    //set the value for the email field
    .setValue(loginSelectors.elements.email, configrationReader.getUserName()) // send values
    //Check if Password field is display
    .assert.elementPresent(loginSelectors.elements.password, 'The assertion failed because the password field was not found in the Login Page')
    //set the value for password field
    .setValue(loginSelectors.elements.password, configrationReader.getPassword()) // send values
    //Check if Sign-in Terms checkbox is displayed or not
    .assert.elementPresent(loginSelectors.elements.signInTermsCheckbox, 'The assertion failed because the sign-in Terms Checkobx was not found in the Login Page')
    .click(loginSelectors.elements.signInTermsCheckbox)
    //Check if Sign in button is display or not
    .assert.elementPresent(loginSelectors.elements.signInBtn, 'The assertion failed because the sign In Button was not found in the Login Page')
    .click(loginSelectors.elements.signInBtn)
    .pause(configrationReader.getPauseValue())
    //Here to check that the login is successfully 
    .waitForElementVisible(loginSelectors.elements.UserMenu,configrationReader.getPeriod(),'Test was failed After you click on Sign in button because the login was not successfully even though the login was With Valid Information')
    .assert.containsText(loginSelectors.elements.UserMenu,configrationReader.getUserName(),'The assertion failed After you click on Sign in button because the login was not successfully even though the login was With Valid Information') 
    

}
