"use strict";
window.onload = function(){

	var isPalindrom = function(str){
		
		//Input-string converts to lower case.
		str = str.toLowerCase();
		
		//Create a new string without white-spaces.
		var res = str.replace(/\s/g, '');
		
		//Create an Array with characters
		var firstArr = res.split("");
		
		//Deklare a new Array.
		//Pushes the first Array's values backwards to the new one.
		var secondArr = [];
		
		for (var i = firstArr.length - 1; i >= 0; --i){
			 secondArr.push(firstArr[i]);
		}
		
		//Checks if the two Arrays have the same values
		if(firstArr.join(",") == secondArr.join(",")){
			
			//Introduce the palindrom and the positive result.
			var pali = str.fontcolor("blue") +' är ett palindrom!'.fontcolor("green");
			return pali; 
		}
		
		//Introduve the negative result.
		pali = str.fontcolor("blue") +' är inte ett palindrom!'.fontcolor("red");
		return pali;
	};
	// ------------------------------------------------------------------------------
	//Lånar kod från Webbteknik 1 - uppgift 1
	// Kod för att hantera utskrift och inmatning. 	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = isPalindrom(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};