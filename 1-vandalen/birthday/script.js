"use strict";

window.onload = function(){

	
	var birthday = function(date){
		
					
					//Tranform user's input to a datetime.
					date =new Date(date);
					//Setting today's date. 
					var today = new Date();	
					var localDiffToday = today.getTimezoneOffset();
					
	
					//Take care of input errors
				    	if(today.getFullYear() < date.getFullYear()){
				    		throw new Error("You have not been born yet! Please enter a valid year of birth!");
				    	}
				    	else if(today.getFullYear() == date.getFullYear() && today.getMonth() < date.getMonth()){
				    		throw new Error("You have not been born yet! Please enter a valid year, or month of birth!");
				    	}
				    	else if((today.getFullYear() - date.getFullYear()) + (today.getMonth() - date.getMonth()) === 0 && today.getDate() < date.getDate()){
				    		throw new Error("You have not been born yet! Please enter a valid year, or month, or day of birth!");
				    	}
				    //Changing the yar of birth to this year..diff == 0;	
				    	date.setFullYear(today.getFullYear());
				    	
				    //Control that the birthday is not passed. And if...
						if (today > date) {
						  date.setFullYear(today.getFullYear() + 1);
						}
				    //Checking if the birthday is today or tomorrow.
						if(today.getDate() == date.getDate()){
							return 0;
						}
						if(date.getDate()-today.getDate()==1){
							return 1;
						}
					
					//Calculate difference between days + plus one day if we want it like this.
					 var happyDay =Math.round(((date - today)+(localDiffToday*60*1000)) / (1000*60*60*24)+1);
					 
					//Returns the result-birthday.
					 return happyDay;
						
		
		


	



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
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};