"use strict";
window.onload = function(){

//=====Applikationen läser in tio heltal och presenterar nästa största tal====\\


	var convertString = function(str){
	
		var one = document.getElementById("string").value;
		var two = document.getElementById("string2").value;
		var three = document.getElementById("string3").value;
		var four = document.getElementById("string4").value;
		var five =document.getElementById("string5").value;
		var six = document.getElementById("string6").value;
		var seven = document.getElementById("string7").value;
		var eight = document.getElementById("string8").value;
		var nine = document.getElementById("string9").value;
		var ten = document.getElementById("string10").value;
		
		if (!one || !two || !three || !four || !five || !six || !seven || !eight || !nine || !ten){
			throw new Error ("Fyll alla fälten!");
		}
		else if (isNaN(one) || isNaN(two) || isNaN(three) || isNaN(four) || isNaN(five) || isNaN(six) || isNaN(seven) || isNaN(eight) || isNaN(nine) || isNaN(ten)){
			throw new Error("Ange bara siffror!");
		}
	
		var max = Math.max(one,two,three,four,five,six,seven,eight,nine,ten);

		if (one == max){
			one = -999999999999999;
		}
		else if (two == max){
			two = -999999999999999;
		}
		else if (three == max){
			three = -999999999999999;
		}
		else if (four == max){
			four = -999999999999999;
		}
		else if (five == max){
			five = -999999999999999;
		}
		else if (six == max){
			six = -999999999999999;
		}
		else if (seven == max){
			seven = -999999999999999;
		}
		else if (eight == max){
			eight = -999999999999999;
		}
		else if (nine == max){
			nine = -999999999999999;
		}
		else if (ten == max){
			ten = -999999999999999;
		}
		var secondMax = (Math.max(one,two,three,four,five,six,seven,eight,nine,ten));
	
		console.log (secondMax);
		return secondMax;

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