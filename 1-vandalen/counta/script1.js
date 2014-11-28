"use strict";
window.onload = function(){

//=====Applikationen läser in ett heltal och beräknar antal nollor samt udda och jämna tal====\\


	var convertString = function(str){
	
	//Makes sure that the user enter only numbers
	if (!(str.match(/^[0-9]{0,15}\d+$/))){
    	throw new Error ("Ange enbart heltal!");
	}
	
	//Makes sure that 'str' is a string.
	var res =str.toString();
	
	//Create  an Array with "0":s only.
	var res1 = res.match(/0/g);
	
	//Create an Array with all numbers.
	var numbers = str.split("");

	//Splits the numbers - Array to two. One array with even numbers
	//and one with odd numbers.
	var resEven = numbers.filter(function(number){return number % 2 === 0;});
	var resOdd = numbers.filter(function(number){return number % 2 === 1;});
	
	//Removes "0":s from the even Array.
	resEven = resEven.filter(function(number){return number > 0;});
	
	//To bypass Errors with "null".
	if (res1 === null){
		
		//Presentate the result.
		str = 'Antal 0: 0' + '  Udda: '+ resOdd.length + '  Jämna: '+ resEven.length;
		return str;
	}
	
	//Presentate the result.
    str ='Antal 0: '+res1.length + ' Udda: '+ resOdd.length + ' Jämna: '+ resEven.length;
    return str;
	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};