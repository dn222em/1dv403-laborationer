
  

//window.onload  = function count (){
var str  = prompt ('Ange en textrad som innehåller minst ett "a" och minst ett "A"');
var res1 = str.match(/a/g);
var res2 = str.match(/A/g);
 
    
    if (res1 === null && res2 === null ){
 
  alert ('Snälla ange en textrad som innehåller minst ett bokstav "a" respektiv "A"!');
  return false; 
   }
    alert('Antal a: '+res1.length+"   "+'Antal A: '+res2.length);
    return true;
  