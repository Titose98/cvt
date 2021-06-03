var entry = document.getElementById("Submit");
entry.addEventListener("click", displayDetails());

var row = 1

function displayDetails() {
    var fname =  document.getElementById("fname").value;
    var lname = document.getElementById("fname").value;
    var date  = document.getElementById("date_of_vaccination").value;
    var administered = document.getElementById("vaccine_administered").value;
    var place  = document.getElementById("place_of_vaccine").value;

   if(!fname || !lname || !date || !administered || !place){
       alert("Please fill all the boxes");
       return;
   } 

   var display = document.getElementById("table");

   var newRow = display.insertRow(row);

   var cell1 = newRow.insertCell(0);
   var cell2 = newRow.insertCell(1);
   var cell3 = newRow.insertCell(2);
   var cell4 = newRow.insertCell(3);
   var cell5 = newRow.insertCell(4);

   cel1.innerHTML = fname;
   cel2.innerHTML = lname;
   cel3.innerHTML = date;
   cel4.innerHTML = administered;
   cel4.innerHTML = place;

   row++;
   
}