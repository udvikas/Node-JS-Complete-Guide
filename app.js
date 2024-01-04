/*
// HTTP Module
const http = require("http");

// function rqListener(req, res) {}
const server = http.createServer((req, res) => {
  console.log(req);
});
// node will execute this function whenever any request reaches to our server. this is event-driven architecture, that node js use heavely.
server.listen(3000);
*/

// const http = require("http");
//
// const myServer = http.createServer((req, res) => {
//   console.log(req);
// });
// myServer.listen(4000);

const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Your name: vikas"); // Replace YourNameHere with your name
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, this is my server running on port 4000!\n");
});

server.listen(4000, () => {
  console.log("Server is running on port 4000");
});
