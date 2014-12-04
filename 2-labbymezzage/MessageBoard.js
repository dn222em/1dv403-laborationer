"use strict";

/* I denna fil körs vår applikation.
 * Vi använder window.onload för att starta applikationen när
 * fönstret laddat klart. * 
 */

var MessageBoard = {
    
    messages : [],
    
    count: 0,
    
    init : function (){
     
    var publish = document.getElementById("publish-button");
    publish.onclick = MessageBoard.createMessage;

    var shiftEnterKey = document.getElementById("comment-box");
    shiftEnterKey.onkeypress = function ( e) {
        
        if(e.keyCode == 13 && !e.shiftKey) {
            MessageBoard.createMessage();
            return false;

        }
        else if (e.keyCode == 13 && e.shiftKey) {
                //shiftEnterKey.value+='<br  />';//
            }
        };
    /*var enterKey = document.getElementById("comment-box");
    enterKey.onkeypress = function (e) {
        if(e.keyCode === 13){
            createMessage();
        }
    };*/
},
    
    createMessage:function (){
        
        var now = new Date();//.toLocaleString();
        var message = new Message();
    	var ul = document.getElementById("comment-holder");
    	var li = null;//document.createElement("li");
    	var div1 = null;
    	var div2 = null;
    	var div3 = null;
    	var div4 = null;
    	var div5 = null;
    	var div6 = null;
    	var div7 = null;
    	var div8 = null;
    	var p = null;
        var paragr = document.getElementById("count-comments");
        var messageBirth;
        var subText = null;
        var emptyLine = null;
        var idCounter = MessageBoard.count;
        getMessage();
        
        
        function getMessage(){
		
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
        
		message.setNewDate(now);
		if(MessageBoard.shiftEnterKey){
            subText = message.toString();
            emptyLine = subText.replace(/[\n\r]/g, "<br/>");
            message.setText(emptyLine);
		}
		++idCounter;
		//message.id = "message No"+idCounter;
		message.setId("message No"+idCounter);
	    MessageBoard.messages.push(message);
		createElements(message);
		emptyBox();
		MessageBoard.count++;
        return message;
        
    }
    
    function emptyBox(){
    document.getElementById("comment-box").value="";
	var boxNew =document.getElementById("comment-box").value;
    boxNew.trim();

    }

    function createElements(message){

        div6 = document.getElementsByClassName("count-length");
	    while(div6[0]) {
         div6[0].parentNode.removeChild(div6[0]);
        }
	    
	    li = document.createElement("li");
    	document.getElementsByClassName("comment-holder")[0];//.appendChild(li);
    	//li.innerHTML = message.message;//toString();//message.message;
        li.className ="comment-holder-li";
	    li.id = idCounter+"li";

	    ul.appendChild(li);
    	
    	ul.insertBefore(li, ul.childNodes[0]);

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
        div6.id = "count-length";
        div6.className = "count-length";
        paragr.appendChild(div6);

        div6.innerHTML= MessageBoard.messages.length;
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
        var e = "message No"+b;
        var d = confirm("Vill du verkligen radera meddelandet?");
        var index;
        
        if (d){
            for(var i = 0; i < MessageBoard.messages.length; i++) {
            
                if(MessageBoard.messages[i].id === e){
                    console.log(i);
                    index =i;
                    break;
                }
            }
            
            var x = document.getElementById(c);
            x.remove(x.selectedIndex);
            MessageBoard.messages.splice(index,1);
            console.log(MessageBoard.messages);
            var  fr= document.getElementById("count-length");//.value==MessageBoard.messages.length-1);
            fr.innerHTML=MessageBoard.messages.length;
        }
   }
console.log(MessageBoard.messages.length);
console.log(MessageBoard.messages);
}
};
	
// Här ser vi till att starta applikationen när fönstret laddat klart.
window.onload = MessageBoard.init;
   
