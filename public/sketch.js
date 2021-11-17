let clientSocket = io();

clientSocket.on("connect", newConnection);
clientSocket.on("mouseBroadcast", newBroadcast);

//when someone will connect to the server, everything will be run in the client's computer.
function newConnection() {
  console.log(clientSocket.id);
}

function newBroadcast(data) {
  console.log(data);
  fill("red");
  circle(data.x, data.y, 10);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
}

function draw() {
  fill("yellow");
  circle(mouseX, mouseY, 20);
}

function mouseMoved() {
  //create an object in which to put x and y variable containg mouse position
  let message = {
    x: mouseX,
    y: mouseY,
  };

  //I send the object to the server
  clientSocket.emit("mouse", message);
}
