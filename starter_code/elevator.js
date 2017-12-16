
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
   // console.log(`Requests ${this.requests}`)
    this.log();
    let results = this.waitingList.filter(request => request.originFloor == this.floor);
    
    if(results.length>0){
      this.waitingList = this.waitingList.filter(request => request.originFloor != this.floor);
      for (let waiter of results){
      //  console.log(`Waiter ${waiter}`);
        this.passengers.push(waiter);
      }
    }

    let resultsDown = this.passengers.filter(request => request.destinationFloor == this.floor);
    if(resultsDown.length>0){
      this.passengers = this.passengers.filter(request => request.destinationFloor != this.floor);
    }
    
    if(this.direction == 'UP')
    {
      this.floorUp();
      
    }else this.floorDown();

    

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
    console.log(`Direction: ${this.direction} | Floor: ${this.floor} | WL: ${this.waitingList.length} | PS: ${this.passengers.length}` );
    if(this.waitingList.length>0){
      console.log("Waiting list");
      console.log(this.waitingList);
    }
    if(this.passengers.length>0){
      console.log("Passengers");
      console.log(this.passengers);
    }
    
  }
}

module.exports = Elevator;
