"use strict";

/* I denna fil körs vår applikation.
 * Vi använder window.onload för att starta applikationen när
 * fönstret laddat klart. * 
 */

window.onload = function(){
    
    
    var now = new Date();//.toLocaleString();
    var publish = document.getElementById("publish-button");
    publish.onclick = createMessage;
    
    
    var message = new Message();
	var messages = [];
	var ul = null;//document.createElement("ul");
	var li = null;//document.createElement("li");
    var idCounter=0;
	var div1 = null;
	var div2 = null;
	var div3 = null;
	var div4 = null;
	var div5 = null;
	var div6 = null;
	var div7 = null;
	var div8 = null;
	var p = null;
    var paragr = document.getElementById("count-comments");//.removeChild(div6);
    var messageBirth;
    
    console.log(messages);
    

	
	ul = document.createElement("ul");
	document.getElementById("comments-list").appendChild(ul);
	ul.id = "comment-holder";
    	
    
	

    function createMessage(){

		message.setText(document.getElementById("comment-box").value);
		
		if(message.message === "" || document.getElementById("comment-box").value.trim() ===""){
            document.getElementById("comment-box").style.backgroundColor =" #e1e1e1";
            document.getElementById("comment-box").style.border="1px solid red";
            document.getElementById("comment-box").value = "Du måste skriva något för att kommentera";
            
            var delay=1000;
    	   
            setTimeout(function(){
                document.getElementById("comment-box").style.backgroundColor ="white";
                document.getElementById("comment-box").style.border = "1px solid #cce889";
		        document.getElementById("comment-box").value = "";
            },delay); 
		return;
		}
		
		message.setNewDate(now);  //= now;
		messages.push(message);
		idCounter++;
		createElements(message);
		document.getElementById("comment-box").value = null;

		//return messages.push(message);

    }

    function createElements(message){
	    
        //div6 = document.getElementById("count-length");
        //paragr.removeChild(div6);
        div6 = document.getElementsByClassName("count-length");
	    while(div6[0]) {
         div6[0].parentNode.removeChild(div6[0]);
        }
	    
	    li = document.createElement("li");
    	document.getElementById("comment-holder").appendChild(li);
    	
    	//li.innerHTML = message.message;//toString();//message.message;
        li.className ="comment-holder-li";
	    //li.id = "comment-holder-li";
	    li.id = idCounter+"li";

	    ul.appendChild(li);
    	
        p=document.createElement("p");
        document.getElementById(li.id).appendChild(p);
        p.className ="comment-paragraf";
        li.appendChild(p);
        p.innerHTML = message.message;


        
        
	    
	    
	    div1 = document.createElement("div");
        document.getElementById(li.id).appendChild(div1);
        //document.getElementsByClassName("comment-holder-li")[0];
        div1.className = "comment-upp-buttons";
        div1.id = idCounter+"comment-upp-buttons";
        div1.innerHTML;
        li.appendChild(div1);
        
        div2 = document.createElement("ul");
        document.getElementById(div1.id).appendChild(div2);
        //document.getElementsByClassName("comment-upp-buttons")[0];
        div2.id = idCounter+"ul2";
        div2.innerHTML;
        div1.appendChild(div2);
        
        div3 = document.createElement("li");
        document.getElementById(div2.id).appendChild(div3);
        div3.id = idCounter+"li2";
        div3.innerHTML;
        div2.appendChild(div3);
        
        div4 = document.createElement("img");
        document.getElementById(div3.id).appendChild(div4);
        div4.id = idCounter+"date-button";
        div4.className = "date-button";
        div4.innerHTML;
        div3.appendChild(div4);
        div4.setAttribute("src", "pics/TIMER.png");
        div4.setAttribute("onClick", "");
        //div4.onclick = showDate;
        div4.addEventListener("click", showDate);
        
        div5 = document.createElement("img");
        document.getElementById(div4.id).appendChild(div5);
        div5.className ="delete-button";
        div5.id =idCounter+ "delete-button";
        div3.appendChild(div5);
        div5.innerHTML;
        div5.setAttribute("src", "pics/DELETE.png");
        div5.setAttribute("onClick", "");
        //div5.onclick = deleteMessage;
        div5.addEventListener("click", deleteMessage);

        
        div8 = document.createElement("div");
        document.getElementsByClassName(li.id)[1];//.appendChild(div8);
        div5.appendChild(div8);
        div8.id = idCounter+"comment-date";
        div8.className ="comment-date";
        li.appendChild(div8);

        div7 = document.createElement("code");
        document.getElementById(div8.id).appendChild(div7);
        div7.className = "writen-date";
        div7.id = idCounter+"writen-date";
        div8.appendChild(div7);
        div7.innerHTML= showTime(message.date);


        div6 = document.createElement("code");
        document.getElementById("count-comments").appendChild(div6);
        div6.id = idCounter+"count-length";
        div6.className = "count-length";
        paragr.appendChild(div6);

        div6.innerHTML= messages.length;
        
    }
        
    function showTime(str){
        
        
        str  = message.date;
		
		//Create a new date-object to find the exact day. 
	    messageBirth = new Date((-(-str - now))-now ); 
        
        var hours = messageBirth.getHours();
        var minutes = messageBirth.getMinutes();
        var seconds = messageBirth.getSeconds();

        //messageBirth.getHours()+":"+messageBirth.getMinutes()+":"+messageBirth.getSeconds()
        if(hours < 10){
            hours ="0"+hours;
        }
        if (minutes < 10){
            minutes="0"+minutes;
        }
        if(seconds < 10){
            seconds ="0"+seconds;
        }
        var time = hours+":"+minutes+":"+seconds;
        return time; 

    }
    
    function showDate(str){
        
         str  = message.date;
         var timeNew = showTime(str); 

        //Create two Arrays with Swedish names for days and months!
		var dayName=["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fridag", "Lördag"];
		var monthName=["Jenuari", "Februari", "Mars","April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
		
		
		//Create a new date-object to find the exact day. 
	    messageBirth= new Date((-(-str - now))-now );
	    
	    var dateCreation = dayName[messageBirth.getDay()] +" "+messageBirth.getDate()+ " "+monthName[messageBirth.getMonth()]+" "+messageBirth.getFullYear() +"   ";
		//Precentate date and time 
        var str1 = "Meddelandet skapades " +dateCreation+timeNew;
        alert(str1);
    }
    
   function deleteMessage(str){
       
      
        //var a = str.target.nodeName;
        var a = str.target.id;
        var b =a.replace('delete-button','');
        var c = b +"li";
    
        var conf = confirm("Vill du verkligen radera meddelandet?");
         
        div6.innerHTML= --messages.length;

        var x = document.getElementById(c);
        x.remove(x.selectedIndex);
        
       

        
        //x.remove(x.selectedIndex);
        
        /*var b = document.getElementById(x).parentNode.id;
        var c = document.getElementById(b).parentNode.id;
        var d = document.getElementById(c).parentNode.nodeName;
        var e = document.getElementById(d).parentNode.id;
        //alert(event.target.id+" and "+event.target.class);
         
        
        //console.log(c);*/
       
   }

};
	


   
