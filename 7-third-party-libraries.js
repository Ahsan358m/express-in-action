const express = require("express");
const morgan = require("morgan");
const http = require("http");

const app = express();

app.use(morgan("short"));

const basicServer = (req, res) =>{
    res.writeHead(200, {"Content-Type":"text/plain"});
    res.end("Hello World");
}

app.use(basicServer);

http.createServer(app).listen(3000,()=>{
    console.log("successfully connected to the localhost:3000");
});