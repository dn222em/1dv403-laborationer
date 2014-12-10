"use strict";
/* I denna fil körs vår applikation.
 * Vi använder window.onload för att starta applikationen när
 * fönstret laddat klart. * 
 */
var MemoryBoard = {
    
    count : 0,
    
    init : function (){
        
        ++MemoryBoard.count;

        var defaultPictures = [];
        var picture=null;
        var memoryBoard=null;
        var counter =0;
        var countClicks=0;
        pushElements(defaultPictures);

        var pictures = [];
        
        while(counter < 2){
            ++counter;
            MemoryBoard.count-=MemoryBoard.count;
            randomImage();
        }

        //MemoryBoard.count-=MemoryBoard.count;
        //randomImage();
      
        
        function pushElements(defaultPictures){
            
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
                defaultPictures.push(picture);
            }
        }
        function showImage(str){
            ++countClicks;
            console.log((countClicks));

            var a = str.target.id;
       
            var newPicture = document.getElementById(a);
            
            newPicture.setAttribute("src", pictures[0]);
            pictures.splice(0,1);
            newPicture.innerHTML;
            a=str;
            freezePictures(a);
            return countClicks;
        }
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
        
        function freezePictures(str){
             
        }   
        function check(str1, str2){
            if(str1!== str2){
            console.log(str1);
            console.log(str2);
            console.log(str1+" "+str2);
            /*var picture1 = document.getElementById(str1);
            
            //var picture2 =  document.getElementById(secondPicture);
            //document.getElementById("picture No"+firstPicture-1).appendChild(picture1);
            picture1.setAttribute("src", "memory/pics/0.png");
        
           // picture2.setAttribute("src", "memory/pics/0.png");*/
            }
        }
    }
};

window.onload = MemoryBoard.init;