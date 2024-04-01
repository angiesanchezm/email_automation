# AUTOMATION OF SENDING EMAILS FROM GOOGLE SHEETS WITH APPS SCRIPT

This project automates the process of sending emails from Google Sheets based on specified conditions in the 'ACTIVITY' spreadsheet and using customized HTML email content.

This script sends an email to an email address stored in a cell of the 'sheet name email' sheet, based on a true condition in any of the cells of 'Column 1'.

### Instructions
To successfully run this script, you need to create a Google Sheets file with the following conditions:

* A spreadsheet named 'ACTIVITY' with a table starting from row 2 and at least 2 columns.
* Column 1 containing checkboxes indicating true or false values.
* An empty Column 2 to be set as "Notification sent" when the email is sent.
* Another spreadsheet named 'sheet name email' containing 'ACTIVITY' and the email address to which the notification will be sent.
  
### Run instructions
To execute this automation, follow these steps:

* Activate Apps Script by clicking on Extensions > Apps Script.
* Create a .gs file containing the code in main.js.
* Create an .html file containing the template in content_body.html.
* Set up a new trigger 'on change' of a spreadsheet.

