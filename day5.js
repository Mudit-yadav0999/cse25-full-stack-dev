//event
//EventEmiiter is class in which we have to usw emit("event emit")
//program 1 and 2
// emit() on()

// const EventEmitter=require("events");
// const event= new EventEmitter();
// event.on("greet",()=>{
//     console.log("thid is event emiter");
//))


// event.emit("greet");
// event.emit("greet");
// event.emit("greet");


//progran1:create custom event emitter that triugger "greet" or "exit"
const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// greet event
myEmitter.on("greet", (name) => {
    console.log(`Hello, ${name}!`);
});

// exit event
myEmitter.on("exit", () => {
    console.log("Goodbye! Exiting the program...");
});

// Trigger greet
myEmitter.emit("greet", "Mudit");

// Trigger exit
myEmitter.emit("exit");