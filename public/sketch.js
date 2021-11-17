let clientSocket = io();

clientSocket.on("connect", newConnection);

//when someone will connect to the server, everything will be run in the client's computer.
function newConnection() {
  console.log(clientSocket.id);
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(mouseX, mouseY, 20);
}
