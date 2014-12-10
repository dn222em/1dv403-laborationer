"use strict";
/* I denna fil körs vår applikation.
 * Vi använder window.onload för att starta applikationen när
 * fönstret laddat klart. * 
 */
var MemoryBoard = {
    
    count : 0,
    
    init : function (){
     //Declare local variables  
        ++MemoryBoard.count;

        var picture = null;
        var memoryBoard = null;
        var counter = 0;
        var countClicks = 0;
        var adder = 11;
        var twoPictures =[];
        pushElements();

        var pictures = [];
        
        //var defaultPictures = []; //Array with the default picture
        while(counter < 2){     //  It needs to run the //MemoryBoard.count-=MemoryBoard.count; and //randomImage(); statements twice
            ++counter;
            MemoryBoard.count -= MemoryBoard.count;
            randomImage();  
        }
        
        
      
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
                //defaultPictures.push(picture);
            }
        }
        function showImage(str){
            ++countClicks;
           
           //Declare new variables
            var elementId = str.target.id;                          // Finds picture id
            var numberOfId =elementId.replace("picture No",'');     // Removes the number from id
            twoPictures.push(elementId);
            
            //Stop from changing the same picture. (look dawn for method giveNewId();) 
            if(Number(numberOfId)>16){
                return;
            }
        
            var newPicture = document.getElementById(elementId);    // New variabel - new image 
            newPicture.setAttribute("src", pictures[0]);            // Change the picture with a random by giving a new attribute
            pictures.splice(0,1);                                   // Removes this picture from array 
            newPicture.innerHTML;
            newPicture.id = giveNewId(elementId);                   // Giving new id with a bigger number (look if(Number(b)>16) some lines up)
            if(twoPictures.length === 2){
                freezePictures(str);
            }
            /*if(freezePictures()){
                while(twoPictures.length > 0) {
                    twoPictures.pop();
            }}*/
            return countClicks;
        }
        
        /*Method to create an new array with all images*/
        function randomImage(){
                
            for(var j =0; j<8;j++){
                MemoryBoard.count++;
                pictures.push("memory/pics/"+MemoryBoard.count+".png");
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
            var delay = 800;
            
            if(twoPictures[0] === twoPictures[1]){
                while(twoPictures.length > 0) {
                    twoPictures.pop();}
                return;
               
            }
            setTimeout(function(){
                
                    picture1= document.getElementById(twoPictures[0] + adder);//.getAttribute("src");
                    picture1.setAttribute("src", "memory/pics/0.png");
                    picture1.id = twoPictures[0];
                    
                    picture2 = document.getElementById(twoPictures[1] + adder);
                    picture2.setAttribute("src", "memory/pics/0.png");
                    picture2.id = twoPictures[1];
                    
                    while(twoPictures.length > 0) {
                        twoPictures.pop();
                    }
                },delay);
            return;  
            
        }
    }
};

window.onload = MemoryBoard.init;