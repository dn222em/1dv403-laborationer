window.onload = function(){
    var secret=Math.floor( Math.random() * 100 + 1);
    var number=0;
    var count =0;
    
    console.log("Ange ett tal: ");
    while(number!=secret)
    {
        ++count;
        
        try
        {
            
            number=parseInt.console.Readline();
            if(number<1 || number>100){
    			console.log("Du måste ange ett helltal mellam '1' och '100'");
    		}
            
        }
        catch(error){
            console.log("Du måste ange ett helltal mellam '1' och '100'");
            break;
        }
        
        if(number == secret)
        {
            console.log("Grattis du vann! Det hemliga talet var "+secret+" och du behövde "+count+" gissningar för att hitta det.");
        }
        else if (number<secret)
        {
            console.log("Det hemliga talet är högre!");
        }
        else
        {
            console.log("Det hemliga talet är lägre!");
        }
    }
};