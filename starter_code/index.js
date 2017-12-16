const Elevator = require('./elevator.js');
const Person = require('./person.js');

var elevator = new Elevator();

var names = ['A','B','C','D','E'];
var persons = [];
var count = 0;

elevator.start();
random(elevator,names);
setInterval(random,3000,elevator,names);



function random(elevator,names){

        let name = "passenger" + count;
        let origin = Math.floor(Math.random()*11);
        let destination = Math.floor(Math.random()*11);
        if (origin == destination){
            destination = Math.floor(Math.random()*11);
        }
       var pers = new Person(name,origin,destination);
        persons.push(pers);
        elevator.call(pers);
        count++;


}









