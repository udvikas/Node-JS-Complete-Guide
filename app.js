// const http = require("http");
//
// const myServer = http.createServer((req, res) => {
//   console.log(req);
// });
// myServer.listen(4000);

/*
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Your name: vikas"); // Replace YourNameHere with your name
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, this is my server running on port 4000!\n");
});

server.listen(4000, () => {
  console.log("Server is running on port 4000");
});
*/

// HTTP Module
const http = require("http");

// function rqListener(req, res) {}
const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers);

  const url = req.url;
  if (url === "/home") {
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Welcome to Home Page</h1></body>");
    res.write("</html>");
    res.end();
  } else if (url === "/about") {
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Welcome to About us Page</h1></body>");
    res.write("</html>");
    res.end();
  } else if (url === "/node") {
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Welcome to my Node js project</h1></body>");
    res.write("</html>");
    res.end();
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Hello Browser from Node JS Server</h1></body>");
    res.write("</html>");
    res.end();
  }
  // process.exit();
});
// node will execute this function whenever any request reaches to our server. this is event-driven architecture, that node js use heavely.
server.listen(3000);
