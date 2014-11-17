"use strict";

function Message (message, date){
    
    this.getText = function () {return message;};
    this.setText = function (_text) { message = text;};
    
    this.getDate = function () {return date;};
    this.SetDate = function (_date) { };
    
}

Message.prototype.toString = function (){
    
    return this.getText() +" (" + this.getDate() + ") ";
};
Message.prototype.getHTMLText = function (){};
Message.prototype.gateDateText = function (){};