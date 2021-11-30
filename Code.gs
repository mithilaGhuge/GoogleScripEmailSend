function sendMail() {
  var workBook = SpreadsheetApp.getActiveSpreadsheet();
  var worksheetrecipientsMailList = workBook.getSheetByName("ReceipientEmailIDs");
  var worksheetMailBody = workBook.getSheetByName("MailBody");
  var subject = worksheetMailBody.getRange('A2').getValue();
  var messageBody = worksheetMailBody.getRange('B2').getValue();
 
  for (var i=2; i<=worksheetrecipientsMailList.getLastRow();i++){
    var email = worksheetrecipientsMailList.getRange('A'+i).getValue();
    MailApp.sendEmail(email, subject, messageBody)
  }
}