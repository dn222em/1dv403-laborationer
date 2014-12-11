var RandomGenerator = {
	
	/*
		Denna metod tar antalet rader och columner som inparameter.
		
		Metoden returnerar en array inneh�llandes utslumpade tal mellan 1 och (rows*cols)/2. Varje tal representeras tv�
		g�nger och motsvarar s�ledes en spelbricka. 
		
		I en 4*4 matris kan Arrayen t.ex. se ut s� h�r:
		[1,2,6,8,6,2,5,3,1,3,7,5,8,4,4,7]
		
		I en 2*4 matris kan Arrayen t.ex. se ut s� h�r:				
		[3,4,4,1,2,1,2,3]
	*/
	
	getPictureArray: function(rows, cols)
	{
		var numberOfImages = rows*cols;
		var maxImageNumber = numberOfImages/2;
	
	   	var imgPlace = [];
	
	   //Utplacering av bilder i Array
	   for(var i=0; i<numberOfImages; i++)
		  imgPlace[i] = 0;
	
		for(var currentImageNumber=1; currentImageNumber<=maxImageNumber; currentImageNumber++)
		{		
			var imageOneOK = false;
			var imageTwoOK = false;
			
			do
			{
				if(imageOneOK == false)
				{
					var randomOne = Math.floor( (Math.random() * (rows*cols-0) + 0) );				
					
					if( imgPlace[randomOne] == 0 )
					{
						imgPlace[randomOne] = currentImageNumber;
						imageOneOK = true;
					}
				}
				
				if(imageTwoOK == false)
				{
					var randomTwo = Math.floor( (Math.random() * (rows*cols-0) + 0) );				
								
					if( imgPlace[randomTwo] == 0 )
					{
						imgPlace[randomTwo] = currentImageNumber;
						imageTwoOK = true;
					}
				}			
			}
			while(imageOneOK == false || imageTwoOK == false);		
		}
		
		return imgPlace;
	}
}


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
        var oldPictures = [];
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
            
            //Stop from changing the same picture. (look down for method giveNewId();) 
            if(Number(numberOfId)>16){
                return;
            }
        
            var newPicture = document.getElementById(elementId);    // New variabel - new image 
            newPicture.setAttribute("src", pictures[0]);            // Change the picture with a random by giving a new attribute
            oldPictures.push(pictures[0]);                          // Create an new array with value before its been remove
            
            pictures.splice(0,1);                                   // Removes this picture from array 
            newPicture.innerHTML;
            newPicture.id = giveNewId(elementId);                   // Giving new id with a bigger number (look if(Number(b)>16) some lines up)
            if(twoPictures.length === 2){
                freezePictures(str);
            }
            
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
                        console.log(oldPictures[0] +"  -  "+oldPictures[1]);

            pictures.unshift(oldPictures[1]);
            pictures.unshift(oldPictures[0]);

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


 