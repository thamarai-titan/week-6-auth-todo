const express = require("express");
require("dotenv").config()
const jwt = require("jsonwebtoken");
const cors = require("cors");
const JWT_SECRET = process.env.JWT_SECRET

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

let users = [];

let todos = [];

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(u => u.username === username);

  if (user) {
    res.send({
      message: "username already exists",
    });
  } else {
    users.push({
      username: username,
      password: password,
    });
    res.send({
      message: "Its done",
    });
  }
});

app.post("/signin", function (req, res) {
  const username = req.body.username
  const password = req.body.password


  const user = users.find(
      user => user.username === username && user.password === password
  );

  if (!user) {
      console.log("Login failed: No matching user found");
      return res.status(401).send({ message: "Invalid username or password" });
  }
  else{
  const token = jwt.sign({ username: username }, JWT_SECRET);
  user.token = token
  console.log(users)
  res.send({ token, message: "Sign-in successful" });
  }
});


app.get("/mytodo", function (req, res) {
  const token = req.headers.token
  
  const userDetails = jwt.verify(token,JWT_SECRET)
  const user = userDetails.username
  res.send({
    message:"your name was " + userDetails.username
  })
});

app.post("/save", function (req, res) {});

app.post("/edit", function (req, res) {});

app.post("/delete", function (req, res) {});

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
