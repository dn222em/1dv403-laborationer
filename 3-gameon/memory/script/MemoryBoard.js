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
        
        pushElements(defaultPictures);
        
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
               // console.log(defaultPictures);

            }
        }
        function showImage(str){
            var a = str.target.id;
            var element = document.getElementById(a);
            element.setAttribute("src", "memory/pics/1.png");
            
            console.log(a);
            return element.innerHTML;

            /*picture = document.createElement("img");
            memoryBoard = document.getElementById("memoryBoard");
            document.getElementById("memoryBoard").appendChild(picture);
            picture.setAttribute("src", "memory/pics/1.png");

            picture.id="picture No"+ MemoryBoard.count;
            picture.className="defaultPicture";
            MemoryBoard.count++;
            picture.innerHTML; 
            memoryBoard.appendChild(picture);*/
        }
        

        /*var memoryBoard = document.getElementById("memoryBoard");

       
        //memoryBoard.appendChild(picture);
        
      
        var gameBoard = document.createElement("div");
        document.getElementById("memoryBoard").appendChild(gameBoard);
        gameBoard.innerHTML = pushElements();
        memoryBoard.appendChild(gameBoard);*/
        
        
       // = url("../pics/0.png");
        console.log("hello");
                console.log(defaultPictures);
                                console.log();


        
    }
    
};

window.onload = MemoryBoard.init;