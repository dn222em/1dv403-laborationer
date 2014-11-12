"use strict";
var makePerson = function(persArr){
	
  var result = {};  
    
	// Din kod här...
	
//===Create an Array with ages:===
    var ageArr = [];
    var yearsOld =persArr.forEach(function(e){return ageArr.push(e.age);});
    //var a= persArr.filter(function(item) {return (item.age > 0);}); //Why it's not working?
 
//===Create an Array with names:===
    var nameArr=[];
    var nameOn =persArr.forEach(function(e){return nameArr.push(e.name);});
    //var nameArr = persArr.filter(function(item) {return  item.name;});


//===Sortering the Array with names :== Sorting strings with non-ASCII characters, i.e. strings with accented characters (e, é, è, a, ä, etc.)===
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
 
//===Testing===
    var myArr = [{name: "Dimitris Nalmpantis", age: 33 }, {name: "Fannis Almazidis", age: 64}, {name: "Frideriki Nalmpanti", age: 10}, {name: "Tasos Almazidis", age: 29}];

    var result= makePerson(myArr);
    console.log(result);
    
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

================================================End*/