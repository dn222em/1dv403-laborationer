"use strict";

window.onload = function(){

	//var number = +prompt("Ange ett tal: ");
	
	// I denna funktion ska du skriva koden för att hantera "spelet"
	var guess = function(number){
	
	console.log("Det hemliga talet: " + secret); // Du når den yttre variabeln secret innifrån funktionen.
	console.log("Du gissade: " + number); // Detta nummer är det som användaren gissade på.
	
	//number= readline();
	var count = 0;
	var secret = Math.floor( Math.random() * 100 + 1);  //* (max-min)+1 )+min; Math.floor( Math.random() * (100-1)+1) + 1; Math.floor( Math.random() * 100)+1; //50; // Detta tal behöver bytas ut mot ett slumpat tal.
	
		
	// Plats för förändring.
	while(number != secret){	

		try{
			
		
			number = +prompt("Ange ett tal mellan '0' och '100': ");
			
			
		/*	if(!(+prompt  > 0 && +prompt  < 100 ))
			{
				
				--count;
			}*/
			
			// [false, "Talet är utanför intervallet 0 - 100"]
			if(number<1 || number>100){
				
			alert("Du måste ange ett helltal mellam '1' och '100'");
			--count;
			
			}
			// Returnera exempelvis: 
		}
		catch(error){
			
		alert("Du måste ange ett helltal!", error);
		break;
		}
	
	++count;
	
		// [true, "Grattis du vann! Det hemliga talet var X och du behövde Y gissningar för att hitta det."]
		if (number == secret){
			alert("Grattis du vann! Det hemliga talet var "+secret+" och du behövde "+count+" gissningar för att hitta det.");
			return;
		}
		// [false, "Det hemliga talet är högre!"]
		else if(number < secret && number !==0){
			alert("Det hemliga talet är högre!");
		}
		// [false, "Det hemliga talet är lägre!"]
		else if(number > secret &&   number <100){
			alert("Det hemliga talet är lägre!");
		}
		
	}
	};
	
	// ------------------------------------------------------------------------------



	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		var answer = guess(input.value) // Läser in talet från textrutan och skickar till funktionen "guess"
		p.innerHTML = answer[1];		// Skriver ut texten från arrayen som skapats i funktionen.	

		if(answer[0] === true){				// Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}
	
	});
};