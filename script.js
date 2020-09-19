

function calc() {
    var a = parseInt(document.querySelector('#value1').value);
    /* The Document method querySelector() returns the first 
    Element within the document that matches the specified 
    selector, or group of selectors. 
    If no matches are found, null is returned.
    
    # is referencing the id


    the parseInt - The parseInt() function parses a string 
    and returns an integer.
    */
   var b = parseInt(document.querySelector('#value2').value);
   var op = document.querySelector('#operator').value;
   var calculate;

   if (op === 'add') {
    calculate = a + b;
   } else if (op === 'min') {
    calculate = a - b
   } else if (op === 'div') {
    calculate = a / b
   } else if (op === 'mul') {
    calculate = a * b
   } 


   document.querySelector("#result").innerHTML = calculate;
   

}