"use strict";
window.onload = function(){

	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){
		
	// Plats för förändring.
	
///Replace all the "a" and "A" characters to the "#" symbol.
	str =str.replace(/a/gi, "#");

///Create an Array from a string using the ".split()" method.
	//A "for" loop changes the small letters to big ones(capitals) and the big letters to small ones.
	var res = [];
	res = str.split("",str.length);
	
	for (var i =0; i <res.length; i++){
		
		if (res[i] == res[i].toLowerCase()){
			
			res[i]=res[i].toUpperCase();
		}
		else if (res[i] == res[i].toUpperCase()){
		
			res[i]=res[i].toLowerCase();
		}
	}
	
	// Vid fel, kasta ett undantag med ett meddelande till användaren. 
	///Take care of empty string
	//str.length
	if (str.trim() === ""){
		console.log("Du måste skriva något!");
	}
	
	// Returnera den konverterade strängen.
	return res.join("");


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