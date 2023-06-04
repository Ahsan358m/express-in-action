const express = require("express");
const path = require("path");
const http = require("http");

const app = express();

const publicPath = path.resolve(__dirname, "./public");

app.get("/", (req, res)=>{
    res.end("Welcome to home page");
});

app.get("/about", (req, res)=>{
    res.end("Welcome to about page");
});

app.get("/weather", (req, res)=>{
    res.end("The Weather is nice today");
});

app.use((req, res)=>{
    res.statusCode = 404;
    res.end("404");
});

http.createServer(app).listen(3000, ()=>{
    console.log("Server is listening on 3000");
});

