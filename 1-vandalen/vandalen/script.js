"use strict";
var makePerson = function(persArr){
	
  //var result = {};  
    
	// Din kod här...

//===Create an Array with ages:===
    //var ageArr = [];
    //var yearsOld =persArr.forEach(function(e){return ageArr.push(e.age);});
    var ageArr = persArr.map(function(person){
        return person.age;
    });

//===Create an Array with names:===
    //var nameArr=[];
    //var nameOn =persArr.forEach(function(e){return nameArr.push(e.name);});
    
    var nameArr = persArr.map(function(person){
        return person.name;
    });


//===Sorting the Array with names :== Sorting strings with non-ASCII characters, i.e. strings with accented characters (e, é, è, a, ä, etc.)===
    nameArr.sort(function (a, b) {return a.localeCompare(b)});
   
    // Array.sort(nameArr);
 
//===Find the maximum-minimum och average value of ageArr:===
    var min = Math.min.apply(Math,ageArr);
    var max = Math.max.apply(Math,ageArr);
    var aver = Math.round((ageArr.reduce(function(a,b){return a+b;}))/ageArr.length);
  
//===Returns an objekt with the mathimaticals resaults:===
    result = {minAge: min, maxAge: max, averageAge: aver, names: nameArr.join(", ")};
    return result;
  
    
};
 
//============================Testing=========================================\\

//====Create a Class; A Constructor; A Method====
    function Person(){
        this.name = "No name?";
        this.age ;
    }

//======Encapsulating the properties.===========
    //Name properties.
    Person.prototype.setName = function(newName){
        
        if(typeof newName ==="undefined" || newName.trim() ===""){
            throw new Error("Please enter a valid name!");
        }
        
        this.name = newName; 
    };
    
    Person.prototype.getName = function(){
        return this.name;
    };
    
    
    //Age properties.
    Person.prototype.setAge = function(newAge){
        if( isNaN(parseInt(newAge, 10)) || typeof newAge != "number"){
           throw new Error(" " + typeof newAge + "-->" + newAge + " is not a number. Please enter a valid age!");
        }
        else if (newAge < 1 ){
            throw new Error (" "+newAge + " is not a valid age! Please enter a new number");
        }
       this.age =newAge; 
    };
    
    Person.prototype.getAge = function(){
        return this.age;
    };
    
//===========Initialize an instans of object============
                //and crate many objects
                
    var Person1 = new Person();
    Person1.setName("Dimitris Nalmpantis");
    Person1.setAge(33);
    
    var Person2 = new Person(); 
    Person2.setName("Fannis Almazidis");
    Person2.setAge(64);
    
    var Person3 = new Person(); 
    Person3.setName("Frideriki Nalmpanti");
    Person3.setAge(10);
    
    var Person4 = new Person(); 
    Person4.setName("Tasos Almazidis");
    Person4.setAge(29);
    

    //Create a object Array:   
    var myArr =[Person1, Person2, Person3, Person4];
    
//==========Presentate the result=======================
    var result= makePerson(myArr);
    console.log(result);
    
    //Another Exampel.
    var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
    result = makePerson(data);
    console.log(result);

/*===============================================Thinks to Remember:

(object array )
var persArr = [{name: "Dimitris Nalmpantis", age: 33 }, {name: "Fannis Almazidis", age: 64}, {name: "Frideriki Nalmpanti", age: 10}, {name: "Tasos Almazidis", age: 29}];


(number array) var ageArr = [];
for(var j=0; j<persArr.length; j++){
ageArr.push(persArr[j].age);
}


(string array) var nameArr=[];
for(var i=0; i<persArr.length; i++){
nameArr.push(persArr[i].name);
}
    //var myArr = [{name: "Dimitris Nalmpantis", age: 33 }, {name: "Fannis Almazidis", age: 64}, {name: "Frideriki Nalmpanti", age: 10}, {name: "Tasos Almazidis", age: 29}];

================================================End*/