function getFormvalue() {
  
  event.preventDefault(); 

  
  const firstName = document.forms["form1"]["fname"].value;
  const lastName = document.forms["form1"]["lname"].value;
  alert("First Name: " + firstName + "\nLast Name: " + lastName); 

  
  document.forms["form1"].reset(); 
}
