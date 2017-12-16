const Elevator = require('./elevator.js');
const Person = require('./person.js');

var elevator = new Elevator();

var names = ['A','B','C','D','E'];
var persons = [];

elevator.start();
random(elevator,names);
setInterval(random,4000,elevator,names);



function random(elevator,names){

    for( let name of names ){
        let origin = Math.floor(Math.random()*11);
        let destination = Math.floor(Math.random()*11);
        if (origin == destination){
            destination = Math.floor(Math.random()*11);
        }
       var pers = new Person(name,origin,destination);
        persons.push(pers);
        elevator.call(pers);
    }



}









