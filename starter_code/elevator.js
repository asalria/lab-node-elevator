
class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = "UP";
    this.passengers = [];
    this.waitingList = [];
  }

  start() { 
    var upd = setInterval(this.update.bind(this),1000);
  }
  stop() { 
    clearInterval(upd);
  }
  update() {
   // console.log(`Requests ${this.requests}`);
    for( let request of this.requests ){
   
    

    let results = this.waitingList.filter(request => request.originFloor == this.floor);
    
    if(results.length>0){
      this.waitingList = this.waitingList.filter(request => request.originFloor != this.floor);
      for (let waiter of results){
      //  console.log(`Waiter ${waiter}`);
        this.passengers.push(waiter);
      }
      console.log(`Floor ${this.floor}`);
      console.log("Waiting list");
      console.log(this.waitingList);
      console.log("Pssg");
      console.log(this.passengers);
      this.log();
    }

    let resultsDown = this.passengers.filter(request => request.destinationFloor == this.floor);
    if(resultsDown.length>0){
      this.passengers = this.passengers.filter(request => request.destinationFloor != this.floor);
      console.log(`Floor ${this.floor}`);
      console.log("Waiting list");
      console.log(this.waitingList);
      console.log("Pssg");
      console.log(this.passengers);
      this.log();
    }
    
    if(this.direction == 'UP')
    {
      this.floorUp();
      
    }else this.floorDown();

  

    
    }
   }
  _passengersEnter() { 

  }
  _passengersLeave() { }
  floorUp() { 
    if(this.floor < this.MAXFLOOR){
      this.floor++;
    }else this.direction = "DOWN";
  }
  floorDown() { 
    if(this.floor > 0){
      this.floor--;
    }else this.direction = "UP";
  }
  call(person) { 
    this.waitingList.push(person);
    this.requests.push(person.originFloor);
  }
  log() { 
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
