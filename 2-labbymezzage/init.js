"use strict";

/* I denna fil körs vår applikation.
 * Vi använder window.onload för att starta applikationen när
 * fönstret laddat klart. * 
 */

window.onload = function(){
    
    
    var now = new Date().toLocaleString();
    var publish = document.getElementById("publish-button");
    publish.onclick = createMessage;
    
    
    var message = new Message();
	var messages = [];
	var ul = null;//document.createElement("ul");
	var li = null;//document.createElement("li");
	var div1 = null;
	var div2 = null;
	var div3 = null;
	var div4 = null;
	var div5 = null;
	var div6 = null;
	var div7 = null;
	var div8 = null;
    var paragr = document.getElementById("count-comments");//.removeChild(div6);

    

	
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
		
		message.setDate(now);  //= now;
		console.log(message);
		messages.push(message);

		createElements(message);
		console.log(messages.length);
		console.log(messages);
		document.getElementById("comment-box").value = null;

		return messages.length;

    }
    
    function createElements(message){
	    
        div6 = document.getElementById("count-length");
        paragr.removeChild(div6);
	    
	    
	    li = document.createElement("li");
    	document.getElementById("comment-holder").appendChild(li);
        
        li.innerHTML = message.message;
	    li.id = "comment-holder-li";
	    ul.appendChild(li);
	    
	    
	    div1 = document.createElement("div");
        document.getElementById("comment-holder-li").appendChild(div1);
        div1.id = "comment-upp-buttons";
        div1.innerHTML;
        li.appendChild(div1);
        
        div2 = document.createElement("ul");
        document.getElementById("comment-upp-buttons").appendChild(div2);
        div2.id = "div2";
        div2.innerHTML;
        div1.appendChild(div2);
        
        div3 = document.createElement("li");
        document.getElementById("div2").appendChild(div3);
        div3.id = "div3";
        div3.innerHTML;
        div2.appendChild(div3);
        
        div4 = document.createElement("img");
        document.getElementById("div3").appendChild(div4);
        div4.id = "delete-button";
        div4.innerHTML;
        div3.appendChild(div4);
        div4.setAttribute("src", "pics/TIMER.png");
        
        div5 = document.createElement("img");
        document.getElementById("delete-button").appendChild(div5);
        div5.id = "date-button";
        div3.appendChild(div5);
        div5.innerHTML;
        div5.setAttribute("src", "pics/DELETE.png");
        
        
        div8 = document.createElement("div");
        document.getElementById("comment-holder-li").appendChild(div8);
        div5.appendChild(div8);
        div8.id = "comment-date";
        li.appendChild(div8);

        div7 = document.createElement("code");
        document.getElementById("comment-date").appendChild(div7);
        div7.id = "writen-date";
        div8.appendChild(div7);
        div7.innerHTML= message.date;


        div6 = document.createElement("code");
        document.getElementById("count-comments").appendChild(div6);
        div6.id = "count-length";
        paragr.appendChild(div6);

        div6.innerHTML= messages.length;
        

	    //return li;
	}

    function Message (message, date){
        
        this.message;
        this.date;
    }
        
    Message.prototype.getText = function(){
        return this.message;
    };
    
    Message.prototype.setText = function(newText){
        
        if(typeof newText ==="undefined" || newText.trim() ===""){
            
            console.log("Textarean är tom!");
        }
        
        this.message = newText; 
    };
    
     Message.prototype.getDate = function(){
        return this.date;
    };
    Message.prototype.setDate = function(newDate){
        
       this.date = newDate; 
    };
    

};

