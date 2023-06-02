const express = require("express");
const http = require("http");
const app = express();

let myFunMiddleware = (req, res, next) =>{
    console.log(`In comes a ${req.method} to ${req.url}`);
    next();
}

let myFakeAuthoriization = (req, res, next) =>{
    const minute = (new Date()).getMinutes();
    if((minute%2)===0){
        //res.end("Authorized");
        next();
    }
    else{
        res.statusCode = 403;
        res.end("Not Authorized");
    }
}




app.use(myFunMiddleware);
app.use(myFakeAuthoriization);


app.use((req, res) =>{
    res.send("Secret info password is : $SwordFish_123*");
});

// app.use((req, res) =>{
// //res.writeHead(200, {"Content-Type":"text/plain"});
// res.end('Hello World');
// });

http.createServer(app).listen(3000);