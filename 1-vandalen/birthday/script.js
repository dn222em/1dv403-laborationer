"use strict";

window.onload = function(){

	
	var birthday = function(date){
		
		//Checking the input birthdate.
		if(!(date.match(/^[0-9]{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])/))){
			  throw new Error("<br>"+'Du måste ange datumet som "ÅÅÅÅ-MM-DD".'+ "<br>"+"<br>"+'Samt "MM" får vara max:12 & "DD" max:31');
		}
		
		//Create an Array for testing.
		var dateObj =[]; 
		dateObj = date.split("-",date.length);
		
			if (dateObj[1]=="02" && dateObj[2]=="29")
	    	{
	    		throw new Error("Choose another day for your birthday!");
	    	}
		
		//Tranform user's input to a datetime.
		date =new Date(date);
		
		//Setting today's date. 
		var today = new Date();

		//Calculate the diff. between local-time and UTC-time.
		var localDiffToday = today.getTimezoneOffset();
		

		//Take care of input errors
	    	if(today.getFullYear() < date.getFullYear()){
	    		throw new Error("You have not been born yet! Please enter a valid year of birth!");
	    	}
	    	else if(today.getFullYear() == date.getFullYear() && today.getMonth() < date.getMonth()){
	    		throw new Error("You have not been born yet! Please enter a valid year, or a month of birth!");
	    	}
	    	else if((today.getFullYear() - date.getFullYear()) + (today.getMonth() - date.getMonth()) === 0 && today.getDate() < date.getDate()){
	    		throw new Error("You have not been born yet! Please enter a valid year, or a month, or maybe a day of birth!");
	    	}
	    
	    //Changing the year of birth to this year..diff == 0;	
    	date.setFullYear(today.getFullYear());
	    
			
	    //Checking if the birthday is today or tomorrow.
			if(today.getMonth() == date.getMonth() && today.getDate() == date.getDate()){
				return 0;
			}
			if(today.getMonth() == date.getMonth() && (today.getDate() + 1 ) == date.getDate()){
				return 1;
			}
			//Control that the birthday is not pasted. And if...
		if (today > date) {
				date.setFullYear(today.getFullYear() + 1);
			}
		//Calculate difference between days + plus one day if we want it like this.
		 //var happyDay =Math.round(((date - today)+(localDiffToday*60*1000)) / (1000*60*60*24)+1);
		 
		 var happyDay = Math.floor( ( date.getTime() - today.getTime() ) / (1000*60*60*24) );
		 
	 	//Returns the result-birthday.
		 //return happyDay;
		 
//===========================Testing==========================================\\					 
		//My Code..
		
		//Create two Arrays with Swedish names for days and months!
		var dayName=["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fridag", "Lördag"];
		var monthName=["Jenuari", "Februari", "Mars","April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
		
		//Create a string to test the Arrays.
		var dateString= "Idag är det "+dayName[today.getDay()]+" den ";
		dateString += today.getDate()+" "+ monthName[today.getMonth()];
		
		//Create a new date-object to find the exact day. 
	    var dayBirth=new Date((-(-date - today))-today + (localDiffToday*60*1000)); 

		
		//Precentate the results
console.log("Du fyller år "+dayName[dayBirth.getDay()] +" den "+dayBirth.getDate()+ " "+monthName[dayBirth.getMonth()]+" "+dayBirth.getFullYear());			
		
		console.log(dateString);
	 	console.log(countDown(dayBirth)); //exempel : "December 25, 2014, 00:01:00"
		console.log(dateObj);
		//Returns the result-birthday.
		return happyDay;
		
//============================Countdown=======================================\\

function countDown(countDawnDay){
		
		//Create a new Date-object.
		//ex.var countDawnDay=new Date("December 25, 2014, 00:01:00"); 
		countDawnDay = new Date(countDawnDay);
		
		var timeDiff = countDawnDay.getTime() - today.getTime();
		
		if(timeDiff===0){
			clearTimeout(timer);
			console.localDiffToday("Grattis!!! Ett år äldre!!");
		}
		
		var seconds = Math.floor(timeDiff/1000);
		
		var minutes= Math.floor(seconds/60);

		var hours = Math.floor(minutes /60);

		var days = Math.floor(hours/24);

		var weeks = Math.floor(days/7);
		
		days %= 7;
		hours %= 24;
		minutes %= 60;
		seconds %=60;
		
 var timer = setTimeout(function() {console.log(" || Weeks: "+weeks+" || Days: "+days+" ||  Hours: "+hours+" ||  Minutes: "+minutes+" ||  Seconds: "+seconds)}, 100);

}
//=============================End of independend code========================//
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