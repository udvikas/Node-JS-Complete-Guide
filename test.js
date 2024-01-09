const bodyParser = require("body-parser");
const express = require("express");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// app.use("/", (req, res, next) => {
//   console.log("this is always runs");
//   next();
// });

app.use("/add-product", (req, res, next) => {
  // console.log("in another middle ware");
  res.send(
    '<form action="/product" method="POST"><input type= "text" name="title"><input type="number" name="size"><button type="submit">Add Product</button></form>'
  );
  // res.send("<h1>Welcome to Add Product Page</h1>");
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("in the middleware");
  res.send("<h1>Welcome Express js Page</h1>");
});

app.listen(3000);
