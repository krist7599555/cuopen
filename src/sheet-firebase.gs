// https://docs.google.com/spreadsheets/d/1MO8kLiE_UKEDGzo9Qx6CTQxDPmqBw9yszEGBdZDkf0E/edit?usp=sharing

var secret = '4J3NaKAbmnq7wLUR951SMoTF5sTSnSgtIMpx8bXG';

function getFirebaseUrl(jsonPath) {
  return 'https://cuopen-9a3af.firebaseio.com/' + jsonPath + '.json?auth=' + secret;
}

function syncMasterSheet(dbName, excelData) {
  var options = {
    method: 'put',
    contentType: 'application/json',
    payload: JSON.stringify(excelData)
  };
  var fireBaseUrl = getFirebaseUrl(dbName);
  UrlFetchApp.fetch(fireBaseUrl, options);
}

function startSync() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var dbName = sheet.getName();
  var [rows, columns] = [sheet.getLastRow(), sheet.getLastColumn()];
  var data = sheet.getRange(1, 1, rows, columns).getValues();
  syncMasterSheet(dbName, data);
}
