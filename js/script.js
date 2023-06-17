/*
 File: script.js
 Assignment: Dynamic Interactive Table
 Bikash Shrestha, UMass Lowell Computer Science, Bikash_Shrestha@student.uml.edu
 Copyright (c) 2023 by Bikash Shrestha. All rights reserved. May be
 freely copied or excerpted for educational purposes with credit to the
 author.
 Updated by BS on June 16, 2023, at 8:00 PM.
 Instructor: Professor Wenjin Zhou
 Help: w3 Schools/ Stack Overflow / mdn web docs
 Basic Description: This is the third assignment where we use JavaScript in addition to HTML and CSS to create the interactive multiplication table. 
*/


//Getting the submit button element and adding a click event listener to it 
const TblAdd = document.querySelector("#submit-btn");                   //Reference:  https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector                  
TblAdd.addEventListener("click", mulfcn);                               //Reference: https://www.w3schools.com/js/js_htmldom_eventlistener.asp     

//Disabling the clear button initially
document.getElementById("clear-btn").disabled = true;                   //Reference: https://www.w3schools.com/jsref/prop_pushbutton_disabled.asp

//Function to be executed when the submit button is clicked
function mulfcn() {
  document.getElementById("clear-btn").disabled = false;

  //Get the values of the input and convert them to whole number if entered in decimal
  var rmin = Math.round(parseFloat(document.getElementById("rowmin").value));
  var rmax = Math.round(parseFloat(document.getElementById("rowmax").value));
  var cmin = Math.round(parseFloat(document.getElementById("colmin").value));
  var cmax = Math.round(parseFloat(document.getElementById("colmax").value));

  //Get the input value elements
  var rminVal = document.getElementById("rowmin");
  var rmaxVal = document.getElementById("rowmax");
  var cminVal = document.getElementById("colmin");
  var cmaxVal = document.getElementById("colmax");

   //Check if any of the value contains letters and also validate that input values are valid integer
  var regExp = /[a-zA-Z]/g;                             //Reference: https://stackoverflow.com/questions/61550004/check-if-string-contains-any-letter-javascript-jquery

  if (isNaN(rmin) || regExp.test(rmin)) {
    document.getElementById('table-content').innerHTML = '<h2>Please make sure the minimum row has a valid integer!</h2>';
    rminVal.style.backgroundColor = "red";              //Referance:https://www.w3schools.com/Jsref/met_document_getelementbyid.asp 
  } 
   else if (rmin > 50 || rmin < -50) {
    document.getElementById('table-content').innerHTML = '<h2>Please make sure the integer in minimum row is between -50 and 50!</h2>';
    rminVal.style.backgroundColor = "red";
  } 
  else if (isNaN(rmax) || regExp.test(rmax)) {
    document.getElementById('table-content').innerHTML = '<h2>Please make sure the maximum row has a valid integer!</h2>';
    rmaxVal.style.backgroundColor = "red";
  } 
   else if (rmax > 50 || rmax < -50) {
    document.getElementById('table-content').innerHTML = '<h2>Please make sure the integer in maximum row is between -50 and 50!</h2>';
    rmaxVal.style.backgroundColor = "red";
  } 
  else if (isNaN(cmin) || regExp.test(cmin)) {
    document.getElementById('table-content').innerHTML = '<h2>Please make sure the minimum column has a valid integer!</h2>';
    cminVal.style.backgroundColor = "red";
  } 
   else if (cmin > 50 || cmin < -50) {
    document.getElementById('table-content').innerHTML = '<h2>Please make sure the minimum column is between -50 and 50!</h2>';
    cminVal.style.backgroundColor = "red";
  } 
    else if (isNaN(cmax) || regExp.test(cmax)) {
    document.getElementById('table-content').innerHTML = '<h2>Please make sure the maximum column has a valid integer!</h2>';
    cmaxVal.style.backgroundColor = "red";
  } 
    else if (cmax > 50 || cmax < -50) {
    document.getElementById('table-content').innerHTML = '<h2>Please make sure the maximum column is between -50 and 50!</h2>';
    cmaxVal.style.backgroundColor = "red";
  }

  //Check for valid input which is minimum is always less than or equal to maximum
  else if (rmin > rmax) {
    document.getElementById('table-content').innerHTML = '<h2>Please make sure the minimum row is less than or equal to the maximum row!</h2>';
    rminVal.style.backgroundColor = "red";
  }
   else if (cmin > cmax) {
    document.getElementById('table-content').innerHTML = '<h2>Please make sure the minimum column is less than or equal to the maximum column!</h2>';
    cminVal.style.backgroundColor = "red";
  }
 
    //Reset all input value backgrounds
    else {
        rminVal.style.backgroundColor = "white";
        rmaxVal.style.backgroundColor = "white";
        cminVal.style.backgroundColor = "white";
        cmaxVal.style.backgroundColor = "white";

        var table = '';
        var y = +rmin;

        //Generate table header
        table += '<tr>' + '<td>' + ' ' + '</td>';                       
        for (var x = +cmin; x <= +cmax; ++x) {
            table += '<td>' + x + '</td>';
        }
        table += '</tr>';

        //Generate table rows and column 
        for (var i = +rmin; i <= +rmax; i++) {
            table += '<tr>';
            table += '<td>' + y + '</td>';
            ++y;
            for (var j = +cmin; j <= +cmax; j++) {
                table += '<td>' + i * j + '</td>';
            }
            table += '</tr>';
        }

        //Generate table content
        document.getElementById('table-content').innerHTML = '<table>' + table + '</table>';
    }
}


//Function to clear the input and table content.
function clr()
{
    document.getElementById("clear-btn").disabled = true;
    document.getElementById("rowmin").value="";
    document.getElementById("rowmax").value="";
    document.getElementById("colmin").value="";
    document.getElementById("colmax").value="";
    document.getElementById("table-content").innerHTML = '';
}