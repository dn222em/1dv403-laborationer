"use strict";

/* Denna "klass" skapar vi Message-objekt utifrån.
 * Vi kapslar in privata variabler med getters och setters. 
*/
    function Message (message, date){
    
        this.getText = function(){ return this.message; };
        this.setText = function(_message){
            if(typeof _message === "undefined" || _message.trim() ==="" ){
                console.log("Textarean är tom!");
            }
            this.message = _message;};
    
        this.getNewDate = function(){ return this.date;};
        this.setNewDate = function(_date){ this.date = _date;};
    }
    
    Message.prototype.toString = function (){
        return this.getText();// +"<br/>"+"<br/>" +" (" + this.getNewDate() + ") ";
    };
    
    Message.prototype.getHTMLText = function (){return Message.toString().replace(/[\n\r]/gi, "<br />");};
/* function Message (message, date){
        
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
    
    Message.prototype.toString = function (){
        
        return this.getText() +"<br/>"+"<br/>" +" (" + this.getDate() + ") ";
    };

/*function Message (message, date){
    
    this.getText = function () {return message;};
    this.setText = function (_text) { message = _text;};
    
    this.getDate = function () {return date;};
    this.setDate = function (_date) { };
    
}

Message.prototype.toString = function (){
    
    return this.getText() +" (" + this.getDate() + ") ";
};
Message.prototype.getHTMLText = function (){};
Message.prototype.getDateText = function (){};*/
