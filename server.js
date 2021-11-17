console.log("up and running");

let express = require("express");

//activate it by creating a new variable
let app = express();

//define the port we want to use
let port = 3000;

//create a server variable telling to our express to listen to the port we defined. In this way we have simulated a local host
let server = app.listen(port);

console.log("Server is running on http://localhost:" + port);

app.use(express.static("public"));

//activate the socket library and make it run on the server we have previously activated using express
let serverSocket = require("socket.io");

let io = serverSocket(server);

//tell node what to do when things happen in the connection with clients.
io.on("connection", newConnection);

function newConnection(newSocket) {
  console.log(newSocket.id);
}
