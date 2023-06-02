const express = require("express");
const http = require("http");
const app = express();

let myFunMiddleware = (req, res, next) =>{
    console.log(`In comes a ${req.method} to ${req.url}`);
    next();
}

app.use(myFunMiddleware);
app.use((req, res) =>{
res.writeHead(200, {"Content-Type":"text/plain"});
res.end('Hello World');
});

http.createServer(app).listen(3000);
