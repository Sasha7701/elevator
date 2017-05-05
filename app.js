const Elevator = require("./elevator");
const Passenger = require("./passenger");

const elevator = new Elevator();
const passengers = [new Passenger("Alex", 7), new Passenger("Eric", 4), new Passenger("Ivan", 2)];
    console.log(passengers);


// console.log(passengers.desiredFloor);
//let passenger1 = passengers.pop();

elevator.on("up", function(event){
	console.log(event.currentFloor);
	if (event.currentFloor == elevator.currentPassenger.desiredFloor){
		//elevator.goDown();
		console.log(elevator.currentFloor == elevator.currentPassenger.desiredFloor);
		elevator.unloadPassenger();
		elevator.goDown();
		}
	else {
			elevator.goUp();
		}
});


elevator.on("down", function(event){
	console.log(event);
	if (event.currentFloor != 0){	
		elevator.goDown();
	
	}
    else
    {
       if (passengers.length > 0){
    	elevator.loadPassenger(passengers.pop());
        console.log(elevator.currentPassenger);
        elevator.goUp();
        
    
     }   
    }
});



elevator.loadPassenger(passengers.pop());
	
console.log(elevator.currentPassenger);

elevator.goUp();


 // elevator.goUp();

// elevator.on("up", function(event){
	
// 	console.log(event);
// 	elevator.goDown();
// });

// elevator.on("down", function(event){

// 	console.log(event);
// 	elevator.goUp();
// });