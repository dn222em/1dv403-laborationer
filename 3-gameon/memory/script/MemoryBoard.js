"use strict";
/* I denna fil körs vår applikation.
 * Vi använder window.onload för att starta applikationen när
 * fönstret laddat klart. * 
 */
var MemoryBoard = {
    
    count : 0,
    
    init : function (){
        
        ++MemoryBoard.count;
        
        //Declare local variables  
        var picture = null;
        var memoryBoard = null;
        var counter = 0;
        var countClicks = 0;
        var adder = 11;
        var pictures = [];
        var pictures1 =[];
        var multiPictures =[pictures, pictures1];
        var index;
        var delay = 600;
        var twoPictures = [];
        
        pushElements();
        randomImage();  
  
      
        /*Method to create and push elements in the array and html- code */
        function pushElements(){
            
            for (var i =0; i<16; i++){
                
                picture = document.createElement("img");
                memoryBoard = document.getElementById("memoryBoard");
                document.getElementById("memoryBoard").appendChild(picture);
                picture.setAttribute("src", "memory/pics/0.png");
                picture.setAttribute("onClick", "");
    
                picture.addEventListener("click", showImage);
                
                picture.id="picture No"+ MemoryBoard.count;
                picture.className="defaultPicture";
                
                MemoryBoard.count++;
                
                picture.innerHTML; 
                
                memoryBoard.appendChild(picture);
            }
        }
        function showImage(str){
            
            ++countClicks;

           //Declare new variables
            var elementId = str.target.id;                          // Finds picture id
            var numberOfId =elementId.replace("picture No",'');     // Removes the number from id
            
            
            //Stop from changing the same picture. (look down for method giveNewId();) 
            if(Number(numberOfId)>16){
                return;
            }
        
            var newPicture = document.getElementById(elementId);    // New variabel - new image 
            
            for(var i=0; i<pictures.length; i++){
              
                if(multiPictures[1][i]==elementId){
                    newPicture.setAttribute("src", multiPictures[0][i]);            // Change the picture with a random by giving a new attribute
                    index = i;
                    break;
                }
            }
            
            twoPictures.push(multiPictures[1][index]);
            twoPictures.push(multiPictures[0][index]);
            newPicture.innerHTML;
            newPicture.id = giveNewId(elementId);                   // Giving new id with a bigger number (look if(Number(b)>16) some lines up)
            if(twoPictures.length === 4){
                freezePictures(str);
            }
        }
        
        /*Method to create an new array with all images*/
        function randomImage(){

            while(counter < 2){     //  It needs to run the //MemoryBoard.count-=MemoryBoard.count; and //randomImage(); statements twice
                ++counter;
                MemoryBoard.count -= MemoryBoard.count;   
                for(var j =0; j<8;j++){
                    MemoryBoard.count++;
                    pictures.push("memory/pics/"+MemoryBoard.count+".png");
                }
            }
            MemoryBoard.count -= MemoryBoard.count;   
            for(var k =0; k<pictures.length;k++){
                pictures1.push("picture No"+ ++MemoryBoard.count);
            }

            shuffleArray(pictures); 
            /*
             * Randomize array element order in-place.
             * Using Fisher-Yates shuffle algorithm.
             */
            function shuffleArray(pictures) {
                for (var i = pictures.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = pictures[i];
                    pictures[i] = pictures[j];
                    pictures[j] = temp;
                }
                return pictures;
            }
        }
        
       
        /*Method to change elemente's / picture's id */
        function giveNewId(str){
            
            // Declare new variables
            var oldId = str;
            var newId =oldId + adder;
            return newId;
        }
        
        function freezePictures(str){
            
         var picture1 = null;
            var picture2 = null;

            if(twoPictures[1] === twoPictures[3]){
                console.log(twoPictures[1]+"  -  "+twoPictures[3]);
                multiPictures[0].splice(multiPictures[0].indexOf(twoPictures[1]),1);
                multiPictures[0].splice(multiPictures[0].indexOf(twoPictures[3]),1);
                multiPictures[1].splice(multiPictures[1].indexOf(twoPictures[0]),1);
                multiPictures[1].splice(multiPictures[1].indexOf(twoPictures[2]),1);

                console.log("Jajamen! Fortsätt så!");
                
                while(twoPictures.length > 0) {
                    twoPictures.pop();}
                    
                if (multiPictures[0].length<1 && multiPictures[1].length<1){
                    
                    var p = document.createElement("p");
                    document.getElementById("score").appendChild(p);
                    var div = document.getElementById("score");
                    p.id = "score-holder";
                    
                    if(countClicks>15){
                        p.style.color="red";
                        p.innerHTML = "Skojar du! Du måste bli bättre! "+countClicks/2+" chanser är för mycket!";
                        return div.appendChild(p);
                    }
                    p.innerHTML = "Graaaaattttiiiiiiss! Du behövde bara "+countClicks/2+" chanser!";
                    
                    return div.appendChild(p);
                }
                return;
            }
        

            setTimeout(function(){
                
                    picture1= document.getElementById(twoPictures[0] + adder);//.getAttribute("src");
                    picture1.setAttribute("src", "memory/pics/0.png");
                    picture1.id = twoPictures[0];
                    
                    picture2 = document.getElementById(twoPictures[2] + adder);
                    picture2.setAttribute("src", "memory/pics/0.png");
                    picture2.id = twoPictures[2];
                    
                    while(twoPictures.length > 0) {
                        twoPictures.pop();
                    }
                },delay);
            return; 
            
        }
    }
};

window.onload = MemoryBoard.init;