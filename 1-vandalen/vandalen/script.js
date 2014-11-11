"use strict";

var makePerson = function(persArr){


	// Din kod här...
///Create an Array.
	persArr = [{name: "Dimitris Nalmpantis", age: 33 }, {name: "Fnnis Almazidis", age: 64}, {name: "Frideriki Nalmpanti", age: 10}, {name: "Tasos Almazidis", age: 29}];

    for(var i=0; i<3; i++){
        
        alert(persArr["name" + i]);
    }
    
    
    
    //persArr.sort();
    
    //var str = persArr.name.join();

    //alert(Math.min(persArr.age()));
  // alert(persArr.age());
  //alert(persArr.age());
  /*var max = Math.max.apply(Math, persArr.age);// return 344
var min = Math.min.apply(Math, persArr.age);
alert(max + min);*/


    
}

