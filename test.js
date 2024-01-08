// const http = require("http");
// const route = require("./routes");
// console.log(route.someText);
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("in the middleware");
  next(); //Allow the request to continue or travel to the next middleware in line (it will be called when we don't send the respond)
});

app.use((req, res, next) => {
  console.log("in another middleware");
  res.send("<h1>Welcome to the express js</h1>");
  //   res.send({ name: "vikas" });
});

app.listen(3000);
// const server = http.createServer(app);
//
// server.listen(3000);
