const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors")

const app = express();
app.use(cors())
app.use(express.json());

let users = [];

let todos = [];

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/signup",function(req, res){

        const username = req.body.username
        const password = req.body.password

        const user = users.find(u=>u.username === username)

        if(user){
            res.send({
                message:"username already exists"
            })
        }
        else{
            users.push({
                username:username,
                password:password
            })
            res.send({
                message:"Its done"
            })
        }
        
})

app.post("/signin",function(req, res){

})

app.get("/mytodo",function(req, res){

})

app.post("/save",function(req, res){

})

app.post("/edit",function(req, res){

})

app.post("/delete",function(req, res){

})

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
