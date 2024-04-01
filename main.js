//Access the spreadsheet SHEET NAME that contains the email
var sheet_email_data = SpreadsheetApp.getActive().getSheetByName('sheet name email');


//Get the active cell and its properties
const active_cell = SpreadsheetApp.getActiveSheet().getCurrentCell();
const cell_value = active_cell.getValue();
const active_column = active_cell.getColumn();
const active_row = active_cell.getRow();
const active_sheet = active_cell.getSheet().getName();  

//Images for header and footer of the email
mail_header = 'link_image'
foot_mail = 'link_image'

//URL´s for bullet points
first_URL = 'url'
second_URL = 'url'
third_URL = 'url'

//Social media URL´s
facebook = 'url facebook'
instagram = 'url instagram'
linkedin = 'url linkedIn'

//Import html content from an html file
var htmlContent = HtmlService.createHtmlOutputFromFile('content_body').getContent();

//Get all values in the spreadsheet, from the first cell to the last cell containing data.
var values = sheet_email_data.getSheetValues(1,1,sheet_email_data.getLastRow(),sheet_email_data.getLastColumn());



function myFunction() {
  const activity_sheet = "ACTIVITY"; //Name of the sheet that contains the condition to send th email
  const number_header_rows = 1; //Number of header rows
  const numer_colum = 1; //Number of column

  condition_value = "TRUE"; //Value contained in the cell
  
  activity = "ACTIVITY" //Define the activity

  for(i=0;i<values.length-1;i++){ //Loop to search for the email associated with the activity
    if(activity == values[i][0]){
      email = values[i][3];
    }
  }

  //If the active sheet is equal to activity_sheet and active row is greater than number_header_rows 
  // and active column is equal to number_colum and cell value equals condition_value
  if (activity_sheet==active_sheet && active_row>number_header_rows && active_column==numer_colum && cell_value==condition_value){
    
    //Send email
    MailApp.sendEmail({
      to: email,
      subject: "write a subject",
      htmlBody: htmlContent,
      cc:'add an email' //Optional
    });
    //Set the value "Sent" in the next cell
    active_cell.getSheet().getRange(active_row,2).setValue("Notification sent");   
  }  
}





