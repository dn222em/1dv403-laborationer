"use strict";

/* Denna "klass" skapar vi Message-objekt utifrån.
 * Vi kapslar in privata variabler med getters och setters. 
*/
    function Message (message, date, id){
    
        this.getText = function(){ return this.message; };
        this.setText = function(_message){
            if(typeof _message === "undefined" || _message.trim() ==="" ){
                console.log("Textarean är tom!");
            }
            this.message = _message;};
    
        this.getNewDate = function(){ return this.date;};
        this.setNewDate = function(_date){ this.date = _date;};
        
        this.getId = function (){return this.id;};
        this.setId = function(_id){ return this.id = _id;};
    }
    
    Message.prototype.toString = function (){
        return this.getText();// +"<br/>"+"<br/>" +" (" + this.getNewDate() + ") ";
    };
    
