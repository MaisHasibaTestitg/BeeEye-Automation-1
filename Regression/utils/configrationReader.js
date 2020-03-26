const fs = require('file-system');
const ini = require('ini');
const config = ini.parse(fs.readFileSync(process.cwd() + '/config.ini', 'utf-8'));

exports.getUrl = () => {
    var url = config.url;
    return url;
}

//for Login with valid Information
exports.getUserName = () => {
    var username = config.username;
    return username;
}

exports.getPassword = () => {
    var password = config.password;
    return password;
}

//For Data display after You Uploaded File
exports.getTheFileInformation_Name = () => {
    var nameOfTheUploadedFile = config.nameOfTheUploadedFile;
    return nameOfTheUploadedFile;
}


exports.getTheFileInformation_NameForSecondFile = () => {
    var nameofSecondUploadedFile = config.nameofSecondUploadedFile;
    return nameofSecondUploadedFile;
}
exports.getTheFileInformation_Columns = () => {
    var numberOfcolumnsinFileUploaded = config.numberOfcolumnsinFileUploaded;
    return numberOfcolumnsinFileUploaded;
}

exports.getTheFileInformation_Type = () => {
    var typeOfFileUploaded = config.typeOfFileUploaded;
    return typeOfFileUploaded;
}


//Period for WaitForElementVisible
exports.getPeriod = () => {
    var waitPeriodToBeVisible = config.waitPeriodToBeVisible;
    return waitPeriodToBeVisible;
}

//Pause Value
exports.getPauseValue = () => {
    var pauseValue = config.pauseValue;
    return pauseValue;
}

//Long delay
exports.getLongWait = () => {
    var LongWait = config.LongWait;
    return LongWait;
}

//Delay
exports.getDelayValue = () => {
    var DelayValue = config.DelayValue;
    return DelayValue;
}

//Error  msg
exports.DisplayError = () => {
    var err = config.err;
    return err;
}

//Valid Label
exports.getValidLabel = () => {
    var validLabel = config.validLabel;
    return validLabel;
}

//not Valid Label
exports.getNotValidLabel = () => {
    var notValidLabel = config.notValidLabel;
    return notValidLabel;
}
//Number of Rows in Uploaded file
exports.getNumberOfCombinedRows = () => {
    var numberOfRowsinFileUploaded = config.numberOfRowsinFileUploaded;
    return numberOfRowsinFileUploaded;
}

//Number of Rows After Filtering
exports.getNumberOfRowsAfterFiltering = () => {
    var numberOfRowsafterfiltering = config.numberOfRowsafterfiltering;
    return numberOfRowsafterfiltering;
}

//Number of Columns in Data Sources section For First File Uploaded
exports.getNumberOfColumns = () => {
    var numberOfcolumnsinFileUploaded = config.numberOfcolumnsinFileUploaded;
    return numberOfcolumnsinFileUploaded;
}

//Number of Columns in File Information section For Second File Uploaded
exports.getNumberOfColumnsFortheSecondFile = () => {
    var numberOfcolumnsinSecondFileUploaded = config.numberOfcolumnsinSecondFileUploaded;
    return numberOfcolumnsinSecondFileUploaded;
}

//number Of columnsa in Data Sources Section after Uploading Two Files
exports.getNumberOfColumnsafterUploadingTwoFiles = () => {
    var numberOfcolumnsafterUploadingTwoFiles = config.numberOfcolumnsafterUploadingTwoFiles;
    return numberOfcolumnsafterUploadingTwoFiles;
}
//search by feature name 
exports.getFeatureName = () => {
    var searchthisFeatureName = config.searchthisFeatureName;
    return searchthisFeatureName;
}

//Join Value
exports.getJoinValue = () => {
    var JoinValue = config.JoinValue;
    return JoinValue;
}

//TransformationFunction
exports.getTransformationFunction = () => {
    var transformationFunction = config.transformationFunction;
    return transformationFunction;
}

exports.getFeature = () => {
    var feature = config.feature;
    return feature;
}

exports.getAbsFunction = () => {
    var Abs = config.Abs;
    return Abs;
}

exports.getFeature_abs = () => {
    var feature_abs = config.feature_abs;
    return feature_abs;
}

exports.getSqrtFunction = () => {
    var Sqrt = config.Sqrt;
    return Sqrt;
}